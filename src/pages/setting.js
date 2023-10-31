import React from "react";
import Link from 'next/link';
import { Rubik } from 'next/font/google'
import Navbar from "../component/navbar";
import Navbarbottom from '../../src/component/navbarbottom';
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Setting(){

    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/> 
            </div>
                <div style={{fontSize: '32px'}} className="text-[32px] text-black font-medium font-rubik mt-4 ml-10 items-center justify-center">Setting</div>
                <div className="ml-10 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">Manage members on your workspace</div>
                <div className="pt-10">
                    <div style={{fontSize: '20px'}} className="font-rubik font-medium text-black text-xl items-center justify-center ml-10">Members</div>
                    {/* Query member from database */}
                    <button type="Add" className=" mt-8 ml-14 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" onClick={ ()=>{}}>
                        ADD A MEMBERS {/* Not link page in this button yet */}
                    </button>
                    <div style={{fontSize: '20px'}} className="mt-8 font-rubik font-medium text-black text-xl items-center justify-center ml-10">Workspace</div>
                    <button  type="delete" className=" mt-4 ml-14 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" onClick={ ()=>{}}>
                        DELETE A WORKSPACE {/* Use component popup */}
                    </button>
                </div>
            <Navbarbottom/>
        </div>
    )
}