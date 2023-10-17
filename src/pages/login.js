import React from "react";
import logo from  '../../public/images/logo2.png'
import Image from "next/image";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function login(){
    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className= "flex flex-col items-center justify-center h-full pt-10">
            <div className='profile flex justify-center py-7'>
                <Image src={logo} alt="logo" />
            </div>

            <div className="title flex flex-col items-center">
                <h4 className='text-3xl font-medium font-rubik mt-2'>Login</h4>
                <label className='mt-2 font-normal font-rubik text-[#757575] w-2/3 text-center text-gray-400'>Welcome back! Please enter your details.</label>
            </div>


            <div className="mt-14 items-center justify-center ">
                <div>
                    <label className=" text-[#A7A7A7] text-xs flex">Email</label>
                    <input
                        className="flex flex-col items-center justify-center mt-1 bg-[#FFFEF9] border-[1px] h-8 w-[16rem] rounded-lg border-opacity-30 border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light"
                        placeholder="Fill the text here"
                    />
                </div>
                <div className="items-center justify-center">
                    <label className="mt-4 text-[#A7A7A7] text-xs flex">Password</label>
                    <input
                        className="mt-1 bg-[#FFFEF9] border-[1px] h-8 w-[16rem] rounded-lg border-opacity-30 border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light"
                        placeholder="Fill the text here"
                    />
                    <div className="flex flex-col items-center justify-center bg-[#D8B4F8] mt-20 ml-16 mr-20 p-2 pl-4 pr-5 w-32 h-12 text-white text-sm rounded-xl font-rubik hover:bg-[#CA8DFF]" onClick={ ()=>{}}>
                        <button >LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}