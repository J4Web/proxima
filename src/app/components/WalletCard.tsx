import { Trash2, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Button } from './Button'

interface Wallet {
  id: string
  name: string
  publicKey: string
  privateKey: string
  keyPairs?: { index: number, publicKey: string, privateKey: string }[],
}
interface IProps {
  wallet: Wallet
  onRemove: (id: string) => void
  idx: number
}


export function WalletCard({ wallet, onRemove, idx }: IProps) {
  console.log("WalletCard", wallet)

  const [showPrivateKey, setShowPrivateKey] = useState(false)

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{`Wallet ${idx}`}</h3>
        <Button variant="ghost" size="sm" disabled={idx == 0} onClick={() => onRemove(wallet.id)} className="text-red-500 hover:text-red-400">
          <Trash2 size={16} />
        </Button>
      </div>
      <p className="text-sm mb-2 truncate">
        <span className="font-medium">Public Key:</span> {wallet.publicKey}
      </p>
      <div className="flex items-center text-sm">
        <span className="font-medium mr-2 whitespace-nowrap">Private Key:</span>
        <span className="flex-grow truncate whitespace-nowrap">
          {showPrivateKey ? wallet.privateKey : '••••••••••••••••'}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowPrivateKey(!showPrivateKey)}
          className="ml-2 text-gray-400"
        >
          {showPrivateKey ? <EyeOff size={16} /> : <Eye size={16} />}
        </Button>
      </div>
    </div>
  )
}