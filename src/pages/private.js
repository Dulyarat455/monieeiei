import React from "react";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import Navbar from '../component/navbar';
import { Rubik } from 'next/font/google'
import alertcircle from '../../public/images/alertcircle.png'
import Navbar from '../component/navbar';
import Navbarbottom from '../../src/component/navbarbottom';

export default function Private(){

    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/>
            </div>
            <div className="text-[#1E1E1E] text-[32px] font-medium font-rubik mt-4 ml-12 flex">Private</div>
            <div className="ml-12 font-normal font-rubik text-[#A7A7A7]">Manage your personal finances easily</div>
            {/* Slide bar */}
            <div className="flex flex-col items-center justify-center h-full pt-12">
                <Image src={alertcircle} alt="alertcircle" className="w-[154px] h-[154px] relative"/>
                <label className="text-[#D9D9D9] text-xs font-normal font-rubik">Do not found the transactions</label>
                <button type="button" className="bg-[#D8B4F8] mt-2 w-40 h-12 rounded-xl text-white text-xs font-rubik text-sm hover:bg-[#CA8DFF]">ADD A TRANSACTION</button>
            </div>
            <Navbarbottom/> {/* Change to toggle */}
        </div>
    )
}