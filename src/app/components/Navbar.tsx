import Link from 'next/link'
import { Github, ArrowUpRight } from "lucide-react"
import { Button } from '../components/Button'

export function Navbar() {
  return (
    <header className="p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Proxima
      </Link>
      <nav className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" >
          <Link href="https://github.com/your-repo-url" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="default" className="text-sm flex" >
          <Link href="/" className='flex justify-center align-middle'>
            Home <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </nav>
    </header>
  )
}