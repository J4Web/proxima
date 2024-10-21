'use client'

import React, { useState, } from 'react'
import { Github, ArrowUpRight, } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'


import { WalletCard } from '../components/WalletCard'
import { Button } from '../components/Button'
import MnemonicCard from '../components/MnemonicCard'
import { Toast, ToastProvider, useToast } from '../components/Toast'

interface Wallet {
  id: string
  name: string
  publicKey: string
  privateKey: string
}

interface WalletManagerProps {
  title: string
  brandName: string
  network: string
}

const faucetToNetworks : Record<string, string>=  {
  'moi': 'https://voyage.moi.technology/faucet/',
  'sol': 'https://solfaucet.com/',
  'eth': 'https://cloud.google.com/application/web3/faucet/ethereum/sepolia',

}

const randomWords = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
  "watermelon", "xigua", "yam", "zucchini", "apricot", "blackberry", "cantaloupe", "dragonfruit", "eggplant", "feijoa",
  "guava", "huckleberry", "imbe", "jackfruit", "kumquat", "lime", "mulberry", "nutmeg", "olive", "pomegranate",
  "quandong", "rambutan", "soursop", "tamarind", "ugni", "voavanga", "wolfberry", "ximenia", "yuzu", "ziziphus"
];

const getMnemonic = () => {
  const seedPhrase = [];
  for (let i = 0; i < 12; i++) {
    seedPhrase.push(randomWords[Math.floor(Math.random() * randomWords.length)]);
  }
  return seedPhrase;
}

export default function WalletManager({ title, brandName, network }: WalletManagerProps) {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const [showMnemonic, setShowMnemonic] = useState(false);


  const router = useRouter();

  const generateWallet = () => {
    if (wallets.length === 0) {
      setMnemonic(getMnemonic());
      setShowMnemonic(true);
    }
    const newWallet: Wallet = {
      id: Date.now().toString(),
      name: `Wallet ${wallets.length + 1}`,
      publicKey: `Public Key ${Math.random().toString(36).substring(2, 15)}`,
      privateKey: `Private Key ${Math.random().toString(36).substring(2, 15)}`,
    }
    setWallets([...wallets, newWallet]);

  }

  const clearWallets = () => {

  };

  const removeWallet = (id: string) => {
    setWallets(wallets.filter(wallet => wallet.id !== id));
  }



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
             <MnemonicCard mnemonic={mnemonic} title={title} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <AnimatePresence>
            {wallets.map(wallet => (
              <motion.div
                key={wallet.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <WalletCard wallet={wallet} onRemove={removeWallet} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
    </div>
  )
}