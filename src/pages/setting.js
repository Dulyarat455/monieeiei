import React, { Fragment, useState } from "react";
import Link from 'next/link';
import { Rubik } from 'next/font/google'
import Navbar from "../component/navbar";
import Navbarbottom from "../component/navbarbottom";
import Deletemodal from "../component/deletemodal";
import { useRouter } from "next/router";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Setting() {
    
    const [Key, setKey] = useState(false);
    return (
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full md:mx-auto"> 
            <Navbar/> 
            </div>
                <div className="text-[32px] text-black font-medium font-rubik mt-4 ml-10 items-center justify-center">Setting</div>
                <div className="ml-10 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">Manage members on your workspace</div>
                <Deletemodal isVisible={Key} />
                <div className="pt-8 h-full justify-center items-center md:mx-auto">
                <div className="text-[20px] font-rubik font-medium text-black text-xl ml-10">Members</div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        <label className="text-[14px] px-8 font-rubik font-normal text-black text-base flex flex-col ">Uracharittikulsittichai@gmail.comYou</label>
                    </div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        <label className="text-[14px] px-8 font-rubik font-normal text-black text-base">User@gmail.com</label>
                    </div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        <label className="text-[14px] px-8 font-rubik font-normal text-black text-base">User@gmail.com</label>
                    </div>
                    <Link href="/addmember">
                    <button type="button" className=" mt-6 ml-12 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" >
                        ADD A MEMBERS
                    </button>
                    </Link>
                    <div className="text-[20px] mt-8 font-rubik font-medium text-black text-xl items-center justify-center ml-10">Workspace</div>
                    <button 
                    type="button" 
                    className=" mt-4 ml-12 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" 
                    onClick={()=> setKey(true)}>
                        DELETE A WORKSPACE 
                    </button>
                    <Navbarbottom/>
                </div>
        </div>

    )
}