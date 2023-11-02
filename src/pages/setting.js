import React, { Fragment, useState } from "react";
import Link from 'next/link';
import { Rubik } from 'next/font/google'
import Navbar from "../component/navbar";
import Navbarbottom from "../component/navbarbottom";
import Deletemodal from "../component/deletemodal";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Setting(){
    const [showModal, setShowModal] = useState(false);

    return(
        <Fragment>
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full md:mx-auto"> {/* Add new md:mx-auto */}
            <Navbar/> 
            </div>
                <div style={{fontSize: '32px'}} className="text-[32px] text-black font-medium font-rubik mt-4 ml-10 items-center justify-center">Setting</div>
                <div className="ml-10 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">Manage members on your workspace</div>
                <div className="pt-8 h-full">
                    <div style={{fontSize: '20px'}} className="font-rubik font-medium text-black text-xl items-center justify-center ml-10">Members</div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        {/* User_id */}
                        <label style={{fontSize: '14px'}} className="px-8 font-rubik font-normal text-black text-base flex flex-col ">Uracharittikulsittichai@gmail.com(You)</label>
                    </div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        {/* members */}
                        <label style={{fontSize: '14px'}} className="px-8 font-rubik font-normal text-black text-base">User@gmail.com</label>
                    </div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        {/* members */}
                        <label style={{fontSize: '14px'}} className="px-8 font-rubik font-normal text-black text-base">User@gmail.com</label>
                    </div>
                    <Link href="/addmember">
                    <button type="button" className=" mt-6 ml-12 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" onClick={ ()=>{}}>
                        ADD A MEMBERS
                    </button>
                    </Link>
                    <div style={{fontSize: '20px'}} className="mt-8 font-rubik font-medium text-black text-xl items-center justify-center ml-10">Workspace</div>
                    <button 
                    type="button" 
                    className=" mt-4 ml-12 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" 
                    onClick={ ()=>setShowModal(true)}>
                        DELETE A WORKSPACE 
                    </button>
                    <Navbarbottom/>
                </div>
        </div>
        <Deletemodal isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    )
}