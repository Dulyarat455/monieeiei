import React from "react";
import logo from  '../../public/images/logo2.png'
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from "./navbar";
import icon from  '../../public/images/icon.svg'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function createworkspace2(){

    return(
        
        <div className={`min-h-screen bg-[#f9f9ff] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div class=" w-[23.5rem] h-full bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-24 text-5xl">Create a</div>
            <a href="https://www.youtube.com/watch?v=nlPYear59oQ">
            <Image alt="icon" src={icon} className="ml-10 mt-10"></Image> 
            </a>
            </div>
            <div className="font-rubik text-5xl ml-[4.3rem] mt-3">Workspace</div>
            <div className=" mt-14"></div>
            <form>
            <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.1*</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user1@gmail.com" 
        type="email" 
        id="user_email"
        name="user_email"
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.2</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user2@gmail.com" 
        type="email" 
        id="user_email"
        name="user_email"
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.3</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user3@gmail.com" 
        type="email" 
        id="user_email"
        name="user_email"
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.4</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user4@gmail.com" 
        type="email" 
        id="user_email"
        name="user_email"
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.5</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user5@gmail.com" 
        type="email" 
        id="user_email"
        name="user_email"
        required
         />
            </form>
        <div className="inline-flex">
        <button className="bg-[#D8B4F8] mt-10 ml-12 mb-10 w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">BACK</button>
        <button className="bg-[#D8B4F8] mt-10 ml-5 mb-10  w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">CREATE NOW</button>
        </div>
        </div>
        </div>
        </div>
    )
}
