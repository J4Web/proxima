import {  ArrowUpRight } from "lucide-react"
import { Button } from "./components/Button"
import Link from "next/link"
import { Navbar } from "./components/Navbar"


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
    <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4 tracking-tighter">Proxima</h1>
        <p className="text-xl mb-8 text-gray-400">
          Your Gateway to Seamless Crypto Management
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/sol" passHref legacyBehavior>
            <Button className="px-6 py-2">
              Solana <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/eth" passHref legacyBehavior>
            <Button className="px-6 py-2">
              Ethereum <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          {/* <Link href="/moi" passHref legacyBehavior>
            <Button className="px-6 py-2">
              MOI <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link> */}
        </div>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © 2024 Proxima. All rights reserved.
      </footer>

      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
    </div>
  )
}
