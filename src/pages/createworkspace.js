import React from "react";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
import Link from 'next/link';
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function createworkspace(){

    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div class=" w-[23.5rem] h-screen bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-24 text-5xl">Create&nbsp;a</div>
            <Link href="https://www.youtube.com/watch?v=nlPYear59oQ">
            <Image alt="Icon" src={Icon} className="ml-10 mt-10"></Image> 
            </Link>
            </div>
            <div className="font-rubik text-5xl ml-[4.3rem] mt-3">Workspace</div>
            <div className=" mt-14"></div>
            <form>
            <label htmlFor="text" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">WORKSPACE&apos;S NAME*</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Enter your workspace's name" 
        type="text" 
        id="workspacename"
        name="workspacename"
        required
         />
            </form>
        <div className="inline-flex">
        <button className="bg-[#D8B4F8] mt-10 ml-12 w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">BACK</button>
        <button className="bg-[#D8B4F8] mt-10 ml-5  w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">NEXT STEP</button>
        </div>
        </div>
        </div>
        </div>
    )
}
