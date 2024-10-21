
import { notFound } from 'next/navigation'
import WalletManager from '../walletManager/page'



export default function NetworkWallet({ params }: { params: { network: string } }) {
  const validNetworks = ['sol', 'eth', 'moi']
  const network = params.network.toLowerCase()

  if (!validNetworks.includes(network)) {
    notFound()
  }

  const networkNames = {
    sol: 'Solana',
    eth: 'Ethereum',
    moi: 'MOI'
  }

  return (
    <WalletManager
      title={networkNames[network as keyof typeof networkNames]}
      brandName="Proxima"
      network={network}
    />
  )
}