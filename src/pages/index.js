import Image from 'next/image'
import { Rubik } from 'next/font/google'
import logo from  '../../public/images/logo.png'
import nameweb from  '../../public/images/nameweb.png'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Home() {
  return (
//     <div
//       className={`flex min-h-screen flex-col items-center justify-between   bg-fffef9 ${inter.className}`}
//     >


// <div className="flex min-h-screen flex-col items-center justify-center ">
//   <Image
//     src={logo}
//     alt="logo"
//     width={280}
//     height={280}
//     priority
//   />
  
//   <Image
//     src={nameweb}
//     alt="nameweb"
//     width={430}
//     height={116}
//     priority
//   />
//   <p className="mt-4 text-lg">Want to stay in touch</p>
// </div>

//       {/* <p  >hello</p> */}
//       {/* <Image src={logo} alt="logo" priority /> */}
     
       
      



//     </div>




<div className={`min-h-screen bg-fffef9 ${inter.className}`}>
      <div className="flex flex-col items-center justify-center h-full pt-10">
        <Image src={logo} alt="logo" width={280} height={280} priority />
        <Image src={nameweb} alt="nameweb" width={430} height={116} priority />
        <p className="mt-4 text-lg">Want to stay in touch</p>
      </div>
    </div>
  )
}
