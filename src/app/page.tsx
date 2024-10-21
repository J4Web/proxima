import { AlertTriangle, ArrowUpRight } from "lucide-react"
import { Button } from "./components/Button"
import Link from "next/link"
import { Navbar } from "./components/Navbar"


export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-6xl font-bold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Proxima
        </h1>

        <p className="text-xl mb-4 text-gray-300">
          **Your Gateway to Testnet Wallet Creation** across various networks! Let's build with fun. 🚀🔥
        </p>


        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/sol" passHref legacyBehavior>
            <Button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Solana <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/eth" passHref legacyBehavior>
            <Button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Ethereum <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Proxima. All rights reserved.
      </footer>

      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
    </div>
  )
}