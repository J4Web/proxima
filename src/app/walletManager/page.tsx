'use client'

import React, { useEffect, useState, } from 'react'
import { Github, ArrowUpRight, Wallet, Loader2, AlertTriangle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl';
import { WalletCard } from '../components/WalletCard'
import { Button } from '../components/Button'
import MnemonicCard from '../components/MnemonicCard'
import * as bip39 from "bip39";
import { derivePath } from 'ed25519-hd-key';
import DbService from '@/lib/dbUtils'
import { hdkey } from 'ethereumjs-wallet'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/Dialog"
import { Navbar } from '../components/Navbar'


interface Wallet {
  id: string
  name: string
  idx: number
  publicKey: string
  privateKey: string
  keyPairs?: { index: number, publicKey: string, privateKey: string }[],
}

interface WalletManagerProps {
  title: string
  brandName: string
  network: string
}

const faucetToNetworks: Record<string, string> = {
  'moi': 'https://voyage.moi.technology/faucet/',
  'sol': 'https://solfaucet.com/',
  'eth': 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia',

}




export default function WalletManager({ title, brandName, network }: WalletManagerProps) {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [mnemonic, setMnemonic] = useState<string>();
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showClearConfirmation, setShowClearConfirmation] = useState(false)
  const dbService = new DbService();
  const fetchMnemonic = async () => {
    setIsLoading(true)
    const existingData = await dbService.getMnemonicFromDB(network)
    if (existingData && Object.keys(existingData).length > 0) {
      const mnemonic = Object.keys(existingData)[0]
      setMnemonic(mnemonic)
      setShowMnemonic(true)
      setWallets(existingData[mnemonic].keyPairs)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchMnemonic();
  }, []);




  const generateKeysFromMnemonic = (mnemonic: string) => {

    if (network == 'sol') {
      const seed = bip39.mnemonicToSeedSync(mnemonic);
      const idx = wallets.length;
      const path = `m/44'/501'/${idx}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair = Keypair.fromSecretKey(secret);
      return {
        idx: idx + 1,
        publicKey: keypair.publicKey.toBase58(),
        privateKey: Buffer.from(keypair.secretKey).toString('hex')
      };
    }
    if (network == 'eth') {
      const seed = bip39.mnemonicToSeedSync(mnemonic);
      const hdWallet = hdkey.fromMasterSeed(seed);
      const idx = wallets.length;
      const walletPath = `m/44'/60'/0'/${idx}/0`;
      const wallet = hdWallet.derivePath(walletPath).getWallet();
      const privateKey = wallet.getPrivateKeyString();
      const publicKey = wallet.getPublicKeyString();
      return {
        idx: idx + 1,
        publicKey: publicKey,
        privateKey: privateKey
      }
    }
  };



  const getMnemonic = () => {
    if (!mnemonic || mnemonic.length === 0) {
      const mnemonic = bip39.generateMnemonic();
      setMnemonic(mnemonic);
      setShowMnemonic(true);
      return mnemonic
    }
    return mnemonic;
  }

  const generateWallet = async () => {

    if (network === 'sol') {
      let mnemonic = '';
      let keyPairs = [];
      const existingData = await dbService.getMnemonicFromDB(network);
      if (existingData && Object.keys(existingData).length > 0) {
        mnemonic = Object.keys(existingData)[0];
        keyPairs = existingData[mnemonic].keyPairs;
      } else {
        mnemonic = getMnemonic();
      }

      const newKeyPair = generateKeysFromMnemonic(mnemonic);
      keyPairs.push(newKeyPair);

      const newWallet: Wallet = {
        id: Date.now().toString(),
        idx: wallets.length + 1,
        name: `Wallet ${wallets.length + 1}`,
        publicKey: newKeyPair!.publicKey,
        privateKey: newKeyPair!.privateKey,
      };

      setWallets([...wallets, newWallet]);
      await dbService.saveMnemonicToDB(mnemonic, keyPairs, network);

    }
    if (network == 'eth') {
      let mnemonic = '';
      let keyPairs = [];
      const existingData = await dbService.getMnemonicFromDB(network);
      if (existingData && Object.keys(existingData).length > 0) {
        mnemonic = Object.keys(existingData)[0];
        keyPairs = existingData[mnemonic].keyPairs;
      } else {
        mnemonic = getMnemonic();
      }

      const newKeyPair = generateKeysFromMnemonic(mnemonic);
      keyPairs.push(newKeyPair);
      const newWallet: Wallet = {
        id: Date.now().toString(),
        idx: wallets.length + 1,
        name: `Wallet ${wallets.length + 1}`,
        publicKey: newKeyPair!.publicKey,
        privateKey: newKeyPair!.privateKey,
      };
      setWallets([...wallets, newWallet]);
      await dbService.saveMnemonicToDB(mnemonic, keyPairs, network);
    }

  };
  const clearWallets = () => {
    setShowClearConfirmation(true)
  }

  const confirmClearWallets = () => {
    dbService.clearWallets(network)
    setWallets([])
    setMnemonic('')
    setShowClearConfirmation(false)
  }

  const removeWallet = (idx: number) => {
    const mnemonic = getMnemonic();
    dbService.removeWalletFromDB(network, mnemonic, idx);

    const newWallets = wallets.filter((wallet) => wallet.idx !== idx);
    setWallets(newWallets);
  }



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start px-4 pt-8">
        <h1 className="text-4xl font-bold mb-8">{title} Wallets</h1>
        <div className="flex space-x-4 mb-8 flex-wrap justify-center align-middle ">
          <Button onClick={generateWallet} variant="default" className='whitespace-nowrap'>
            Generate Wallet
          </Button>
          <Dialog open={showClearConfirmation} onOpenChange={setShowClearConfirmation}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Clear All Wallets</DialogTitle>
                <DialogDescription>
                  Are you sure you want to clear all wallets? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center py-4">
                <AlertTriangle className="h-12 w-12 text-yellow-500" />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowClearConfirmation(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={confirmClearWallets}>
                  Clear All Wallets
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button onClick={clearWallets} disabled={wallets.length == 0 && true} variant="default" className='whitespace-nowrap'>
            Clear Wallets
          </Button>
          <Button
            onClick={() => {
              const url = faucetToNetworks[network];
              window.open(url, '_blank');
            }}
            variant="bright"
            className='whitespace-nowrap mt-4 custom492:m-0'
          >
            Claim {title?.slice(0, 3)} Faucet
          </Button>

        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <p className="mt-4 text-lg">Loading wallets...</p>
          </div>
        ) : wallets.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 bg-gray-800 rounded-lg p-8 w-full max-w-4xl">
            <Wallet className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Wallets Yet</h2>
            <p className="text-gray-400 text-center mb-4">
              Get started by generating your first wallet using the "Generate Wallet" button above.
            </p>
          </div>
        ) : (
          <>
            <AnimatePresence>
              {showMnemonic && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-4xl mb-8 bg-gray-800 p-6 rounded-lg"
                >
                  <MnemonicCard mnemonic={mnemonic?.split(' ') ?? [" "]} title={title} />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mb-4">
              <AnimatePresence>
                {wallets.map((wallet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <WalletCard wallet={wallet} onRemove={() => removeWallet(wallet.idx)} idx={wallet.idx} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div></>

        )}

      </main>

      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
    </div>
  )
}