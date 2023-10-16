import Image from 'next/image'
import { Rubik } from 'next/font/google'

const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-fffef9 ${inter.className}`}
    >
      <p  >hello</p>
    </div>
  )
}
