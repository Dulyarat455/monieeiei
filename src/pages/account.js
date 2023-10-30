import React from "react";
import Avatar from  '../../public/images/userprofile.png'
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../component/navbar';
import Navbarbottom from '../../src/component/navbarbottom';
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
// Modified by Uracha 28-10-2003 

export default function account(){



    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
                <Navbar/>
                <div className="w-28 h-28 rounded-full bg-[#D8B4F8] flex items-center justify-center">
                <Image alt="Profile" src={Avatar} className="w-24 h-24 rounded-full]"/>
                </div>
                <label for="user_username" className="text-[#757575] font-normal flex">@ppppppp</label>

                <div className="item-center justify-centerl mt-4">
                    <form>
                        <label for="user_firstname" className="ml-2 text-[#A7A7A7] text-xs">FIRST NAME</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] item-center rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="Johny" 
                        type="text" 
                        id="user_firstname" 
                        name="user_firstname">
                        </input>
                        <label for="user_lastname" className="ml-2 text-[#A7A7A7] text-xs">LAST NAME</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="Gates" 
                        type="text" 
                        id="user_lastname" 
                        name="user_lastname" >
                        </input>
                        <label for="user_DOB" className="ml-2 text-[#A7A7A7] text-xs">MY BIRTHDAY</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="02/01/1996" 
                        type="date" 
                        id="user_DOB" 
                        name="user_DOB" >
                        </input>
                        <label for="phonenumber" className="ml-2 text-[#A7A7A7] text-xs">MY PHONE NUMBER</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="0812345678" 
                        type="tel" 
                        id="user_phonenumber" 
                        name="user_phonenumber" >
                        </input>
                        <label for="email" className="ml-2 text-[#A7A7A7] text-xs">MY PHONE NUMBER</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="Johny.Gates@gmail.com" 
                        type="email" 
                        id="user_email" 
                        name="user_email" >
                        </input>
                        <a href="/change-password" className="ml-40 mt-1 text-[10px] mb-2 font-normal flex text-[#9747FF]">Change my password</a>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="button" className="bg-[#D8B4F8] mx-auto mt-2 ml-18 w-24 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" onClick={()=>{submitHandler()}}>UPDATE</button>
                        </div>
                    </form>
                </div>
            </div>
            <Navbarbottom/>
        </div>
    )
}