import React from "react";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import Navbar from "../components/navbar";
import { Rubik } from 'next/font/google'
import Navbarbottom from '../components/navbarbottom';
import Slidebar from '../components/slidebar';
import Link from "next/link";

export default function Workspace_dailyexpense(){

    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/> {/* Change Navbar to workspace */}
            </div>
            <div className="text-[#1E1E1E] text-[32px] font-medium font-rubik mt-4 ml-10 flex">Workspace</div>
            <div className="ml-10 font-normal font-rubik text-[#A7A7A7]">Manage your workspace finances with</div>
            <div className="ml-10 font-normal text-sm font-rubik text-[#A6A6A6] items-center justify-center">friends and family</div>
            <Slidebar/>
            <div className="flex flex-col items-center justify-center h-full mt-6">
                {/* Search and filter */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="#D9D9D9" 
                    class="w-28 h-28 mt-12">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[#D9D9D9] text-xs font-normal font-rubik">Do not found the transactions</label>
                {/* Use component  */}
            </div>
            <div className="flex flex-col justify-center items-center h-full">
                <Link href="/workspace_dailyexpense_form">
                    <button type="button" className="bg-[#D8B4F8] mt-4 w-40 h-12 border-bottom-4 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">Add a transaction</button>
                </Link>
            </div>
            <Navbarbottom/>
        </div>
    )
}