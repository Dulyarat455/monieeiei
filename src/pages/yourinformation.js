import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo2 from '../../public/images/logo2.png'
import { Rubik } from 'next/font/google'
import { Input } from "postcss";
import nameweb from '../../public/images/nameweb.png'
const inter = Rubik({ subsets: ['latin'], weight: ['400'] })

export default function Yourinformation() {
    return (
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full pt-10">
                <Image alt="logo2" src={logo2} className="ml-[1rem]"></Image>
                <div className="  mt-2 font-medium font-rubik text-3xl">Your</div>
                <div className="  mt-2 font-medium font-rubik text-3xl">Information</div>
                <div className=" mt-2 font-normal font-rubik text-[#757575]">Giving us a little bit more about you</div>
                <div className=" mt-10">
                    <form>
                        <label htmlFor="username" className="ml-5 text-[#A7A7A7] text-xs">USERNAME</label><br></br>
                        <input className="mb-5 ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="text" id="username" />
                        <br></br> <label htmlFor="fname" className="ml-5 text-[#A7A7A7] text-xs">WHAT&apos;S YOUR FIRST NAME?</label><br></br>
                        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="text" id="fname" />
                        <div className="ml-5 mb-5 "></div>
                        <label htmlFor="lname" className="ml-5 text-[#A7A7A7] text-xs">WHAT&apos;S YOUR LAST NAME?</label><br></br>
                        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="text" id="lname" />
                        <div className="ml-5 mb-5 "></div>
                        <label htmlFor="born" className="ml-5 text-[#A7A7A7] text-xs">WHEN WERE YOU BORN?</label><br></br>
                        <input className="ml-5 mb-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="date" id="born" />
                        <div className="ml-5"></div>
                        <label htmlFor="phonenumber" className="ml-5 text-[#A7A7A7] text-xs">WHAT&apos;S YOUR PHONE NUMBER?</label><br></br>
                        <input className="ml-5 mb-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="tel" id="phonenumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </form>
                    <button className="bg-[#D8B4F8] mt-10 mb-10 ml-[3rem] w-48 h-12 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">CREATE AN ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}
