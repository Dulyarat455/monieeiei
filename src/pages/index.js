import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Image from 'next/image'
import { Rubik } from 'next/font/google'
import logo from  '../../public/images/logo.png'
import nameweb from  '../../public/images/nameweb.png'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })



export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      router.push("/workspace");
    }
  }, []);

  const  moveRegister  =  (e) => {
      router.push("/register");
  };

  const  moveLogin  =  (e) => {
      router.push("/login");
  };



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




<div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
      <div className="flex flex-col items-center justify-center h-full pt-10">
        <Image src={logo} alt="logo" width={280} height={280} priority />
        <Image src={nameweb} alt="nameweb" width={430} height={116} priority />
        {/* <p className="mt-4 text-lg">Welcome</p> */}
        <br/>
        <br/>
        <br/>
        <button  type="submit" className=" mt-4 p-2 pl-6 pr-5 bg-[#D8B4F8] text-white rounded hover:bg-[#CA8DFF]" onClick={ ()=>{
                moveRegister()
               
             }}>
               SIGN UP WITH EMAIL
             </button>
        <button  type="submit" className=" mt-4 p-2 pl-6 pr-5 border-2 border-CA8DFF text-CA8DFF rounded-md hover:bg-[#CA8DFF] hover:text-white" onClick={ ()=>{
                  moveLogin()
               
              }}>
                SIGN IN
        </button>

      </div>
    </div>
  )
}
