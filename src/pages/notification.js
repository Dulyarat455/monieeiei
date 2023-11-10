import React,{useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
import Link from 'next/link';
import Listnoti1 from "@/components/listnoti1";
import Listnoti2 from "@/components/listnoti2";
import Transactionmodal from "@/components/transactionmodal";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function Notification(){
   

    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div className=" w-[23.5rem] h-full bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-16 text-[500] text-[32px]">Last Notification</div>
            <button><Image alt="Icon" src={Icon} className=" ml-5 mt-10"></Image></button>
            </div>
            <div className=" text-[500] text-[20px] ml-10 mt-10">Today</div>
       <div className="ml-10 mt-5"> 
            <Listnoti1 time={"09:11"} date={"10 oct 2022"} status={0}></Listnoti1>
            <Listnoti1 time={"09:11"} date={"10 oct 2022"} status={0}></Listnoti1>
            <Listnoti1 time={"09:11"} date={"10 oct 2022"} status={0}></Listnoti1>
            <Listnoti1 time={"09:11"} date={"10 oct 2022"} status={0}></Listnoti1>
            <Listnoti1 time={"09:11"} date={"10 oct 2022"} status={0}></Listnoti1>
       </div>
       <div className=" text-[500] text-[20px] ml-10 mt-5">Day ago</div>
       <div className="ml-10 mt-5"> 
            <Listnoti2 time={"12.23"} date={"10 oct 2022"} status={1}></Listnoti2>
            <Listnoti2 time={"12.23"} date={"10 oct 2022"} status={1}></Listnoti2>
            <Listnoti2 time={"12.23"} date={"10 oct 2022"} status={1}></Listnoti2>
            <Listnoti2 time={"12.23"} date={"10 oct 2022"} status={1}></Listnoti2>
            <Listnoti2 time={"12.23"} date={"10 oct 2022"} status={1}></Listnoti2>
       </div>
        </div>
        </div>
        </div>
    )
}
