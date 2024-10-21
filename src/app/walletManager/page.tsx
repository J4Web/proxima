'use client'

import React, { useEffect, useState, } from 'react'
import { Github, ArrowUpRight, } from 'lucide-react'
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
  const dbService = new DbService();
  const fetchMnemonic = async () => {
    const existingData = await dbService.getMnemonicFromDB();
    if (existingData && Object.keys(existingData).length > 0) {
      const mnemonic = Object.keys(existingData)[0];
      setMnemonic(mnemonic);
      setShowMnemonic(true);
      console.log("first", existingData[mnemonic])
      setWallets(existingData[mnemonic].keyPairs);
    }
  };
  const router = useRouter();
  useEffect(() => {
    fetchMnemonic();
  }, []);




  const generateKeysFromMnemonic = (mnemonic: string) => {
    const seed = bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);

    const idx = wallets.length

    const path = `m/44'/501'/${idx}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    return {
      idx: idx + 1,
      publicKey: keypair.publicKey.toBase58(),
      privateKey: Buffer.from(keypair.secretKey).toString('hex')
    };
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
    let mnemonic = '';
    let keyPairs = [];

    const existingData = await dbService.getMnemonicFromDB();

    console.log(existingData, "existingData");
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
      publicKey: newKeyPair.publicKey,
      privateKey: newKeyPair.privateKey,
    };

    setWallets([...wallets, newWallet]);
    await dbService.saveMnemonicToDB(mnemonic, keyPairs);
  };
  const clearWallets = () => {
    dbService.clearWallets(network);
    setWallets([]);
    setMnemonic('');
  };

  const removeWallet = (idx: number) => {
    const mnemonic = getMnemonic();
    dbService.removeWalletFromDB(network, mnemonic, idx);

    const newWallets = wallets.filter((wallet) => wallet.idx !== idx);
    setWallets(newWallets);
  }

  console.log(wallets, "wtf")


  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="text-xl font-bold">{brandName}</div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <Github className="h-5 w-5" />
          </button>
          <Link href="/" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            home <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start px-4 pt-8">
        <h1 className="text-4xl font-bold mb-8">{title} Wallets</h1>
        <div className="flex space-x-4 mb-8 flex-wrap justify-center align-middle ">
          <Button onClick={generateWallet} variant="default" className='whitespace-nowrap'>
            Generate Wallet
          </Button>
          <Button onClick={clearWallets} variant="default" className='whitespace-nowrap'>
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
            Claim {title.slice(0, 3)} Faucet
          </Button>

        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
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
        </div>
      </main>

      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
    </div>
  )
}