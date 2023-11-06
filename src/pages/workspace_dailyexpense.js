import React,{useState} from "react";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import Navbar from "../components/navbar";
import { Rubik } from 'next/font/google'
import Navbarbottom from '../components/navbarbottom';
import Link from "next/link";
import Transaction from "@/components/transaction";
import Searchandfilter_daily from "@/components/searchandfilter_daily";
import Scroll from "@/components/scroll";
import Button from "@/components/button";

export default function Workspace_dailyexpense(){
    const [showLine_dailyExpense, setShowLine_dailyExpense] = useState(false);
    const [showLine_Budget, setShowLine_Budget] = useState(false);
    const [showLine_Summary, setShowLine_Summary] = useState(false);
    // Check if have transaction data
    // const [isInformationAvailable, setIsInformationAvailable] = useState(true);



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
            
            <nav style={{width:'100%', justifyContent:'space-between',padding:'0 30px'}} className="mt-3 h-[42px] justify-start items-center inline-flex">
                <div className="flex-col justify-center items-center inline-flex" >
                    <button onClick={() => handleTabClick("dailyExpense")}
                    className={`p-1 ms-0 bg-[#FFFDF8] hover:bg-[#FAE392] hover:shadow-md border-2 border-[#FFDF6F] rounded-lg justify-center items-center inline-flex ${
                    showLine_dailyExpense ? "active-tab" : ""
                    }`}>
                        <div style={{fontSize:'11px'}} className="text-[#FFDF6F] hover:text-[#9B7C0D] text-xs font-medium font-rubik uppercase ">Daily Expense</div>
                    </button>
                    { showLine_dailyExpense && (
                    <div style={{content:'" "', width: '85%', height:'4px', background:'#FAE392', bottom:'-2px', left:'20px'}} className="mt-2 rounded-full" ></div>)}
                </div>
                <div>
                    <button onClick={() => handleTabClick("budgetManagement")}
                    className={`p-1 me-0 bg-[#FFFDF8] w-[140px] hover:bg-[#FAE392] hover:shadow-md rounded-lg border-2 border-[#FFDF6F] justify-center items-center gap-2 flex ${
                    showLine_Budget ? "active-tab" : ""
                    }`}>
                        <div style={{fontSize:'11px'}} className="text-[#FFDF6F] hover:text-[#9B7C0D] text-xs font-medium font-rubik uppercase">Budget management</div>
                    </button>
                    {showLine_Budget && (
                    <div style={{content:'" "', width: '90%', height:'4px', background:'#FAE392', bottom:'-2px'}} className="mt-2 ms-2 rounded-full"></div>)}
                </div>
                <div>
                    <button onClick={() => handleTabClick("summary")}
                    className={`p-1 bg-[#FFFDF8] hover:shadow-md hover:bg-[#FAE392] rounded-lg border-2 border-[#FFDF6F] justify-center items-center flex ${
                    showLine_Summary ? "active-tab" : ""
                    }`}>
                        <div style={{fontSize:'11px'}} className="text-[#FFDF6F] hover:text-[#9B7C0D] text-xs font-medium font-rubik uppercase">Summary</div>
                    </button>
                    {showLine_Summary && (
                    <div style={{content:'" "', width: '85%', height:'4px', background:'#FAE392', bottom:'-2px', left:'20px'}} className="mt-2 ms-1.5 rounded-full"></div>)}
                </div>
            </nav>
            <Searchandfilter_daily/>
            <Navbarbottom />
            <Button/>
            <Scroll/>
            <div className="mt-4 mb-14">
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
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