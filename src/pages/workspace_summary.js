import React,{useState} from "react";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import Navbar from "../components/navbar";
import { Rubik } from 'next/font/google'
import Navbarbottom from '../components/navbarbottom';
import Link from "next/link";
import Scroll from "@/components/scroll";
import Summary from "@/components/summary";
import Slidebar from "@/components/slidebar";
import Image from "next/image";
import filter from '../../public/images/filter.png'

export default function Workspace_dailyexpense(){
    const [showLine_dailyExpense, setShowLine_dailyExpense] = useState(false);
    const [showLine_Budget, setShowLine_Budget] = useState(false);
    const [showLine_Summary, setShowLine_Summary] = useState(false);
    // Check if have transaction data
    // const [isInformationAvailable, setIsInformationAvailable] = useState(true);
    const handleIconClick = () => {
        // Check is search icon ontop
        console.log('Check button clicked');
    }



    const handleTabClick = (tabName) => {
        if (tabName === "dailyExpense") {
          setShowLine_dailyExpense(true);
          setShowLine_Budget(false);
          setShowLine_Summary(false);
        } else if (tabName === "budgetManagement") {
          setShowLine_dailyExpense(false);
          setShowLine_Budget(true);
          setShowLine_Summary(false);
        } else if (tabName === "summary") {
          setShowLine_dailyExpense(false);
          setShowLine_Budget(false);
          setShowLine_Summary(true);
        }
      };


    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/> {/* Change Navbar to workspace */}
            </div>
            <div className="text-[#1E1E1E] text-[32px] font-medium font-rubik mt-4 ml-8 flex">Workspace</div>
            <div className="ml-8 font-normal font-rubik text-[#A7A7A7]">Manage your workspace finances with</div>
            <div className="ml-8 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">friends and family</div>
            
            <Slidebar/>
            <div style={{width:'screen', justifyContent:'space-between', padding:'0 30px'}} className="flex mt-4 gap-2 justify-center items-center">
                <div className="relative w-screen">
                    <input style={{fontSize:'13px'}} className=" w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] placeholder:font-rubik pl-2 placeholder-text-xs placeholder-font-rubik placeholder-font-normal"
                    placeholder="Search for"
                    type="text"/>
                    <button className="absolute right-1 translate-y-2 items-center" onClick={handleIconClick}>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 32 32" 
                        strokeWidth="1.5" 
                        stroke="#A7A7A7" 
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Calendar */}
            <div style={{width:'screen', justifyContent:'space-between', padding:'0 30px'}} className="flex mt-2 justify-start items-center">
                <div style={{fontSize:'11px',whiteSpace: 'nowrap'}} className="text-neutral-400 text-xs font-normal font-['Rubik'] me-2 ml-1">Filter by:</div>
                <div style={{ marginLeft: '-6px' }} className="relative w-full inline-flex justify-end items-center">
                    <input style={{fontSize:'13px'}} className="w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] pl-2 placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
                    placeholder="MM/DD/YYYY"
                    type="date"/>
                </div>
                    <div className=" text-neutral-400 text-xs font-normal justify-center items-center font-['Rubik'] ml-1 me-6">-</div>
                <div style={{ marginLeft: '-22px',MarginBlockEnd:'2px',width:'screen' }} className="relative w-full inline-flex justify-end items-center ">
                    <input style={{fontSize:'13px'}} className=" w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] pl-2 placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
                    placeholder="MM/DD/YYYY"
                    type="date"/>
                    
                </div>
            </div>
            <Navbarbottom />
            {/*<Scroll/>*/}
            <div className="flex justify-start ml-8 me-8 mt-6">
                <div className="w-full h-[115px] px-[21px] py-5 bg-white rounded-[20px] border border-zinc-300 flex-col justify-start items-start inline-flex">
                    <div className="text-stone-900 text-base font-normal font-['Rubik']">Balance</div>
                    <div className="w-full justify-start items-center inline-flex">
                        <div className="w-full text-stone-900 text-[32px] font-normal font-['Rubik']">THB</div>
                        <div className="text-stone-900 text-[38px] font-normal font-['Rubik']">2000</div>
                    </div>
                </div>
            </div>
            <div className="justify-start ml-8 mt-6 text-stone-900 text-[20px] font-medium font-['Rubik']">Summary</div>
            <div className="mt-4 mb-14">
                <Summary/>
                <Summary/>
                <Summary/>
                <Summary/>
                <Summary/>
            </div>
            
            {/*<div className="flex flex-col items-center justify-center h-full mt-2">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="#D9D9D9" 
                    className="w-28 h-28 mt-12">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[#D9D9D9] text-xs font-normal font-rubik">Do not found the transactions</label>
                    <div className="flex justify-center items-center h-full">
                        <Link href="/dailyexpense">
                            <button type="button" className="bg-[#D8B4F8] mt-4 w-40 h-12 border-bottom-4 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">Add a transaction</button>
                        </Link>
                    </div>
                {/* Use component 
            </div>*/}
            {/*<div className="flex justify-center items-center h-full">
                <Link href="/dailyexpense">
                    <button type="button" className="bg-[#D8B4F8] mt-4 w-40 h-12 border-bottom-4 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">Add a transaction</button>
                </Link>
            </div>*/}
        </div>
    )
}