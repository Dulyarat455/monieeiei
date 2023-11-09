import React,{useState,useEffect} from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Slidebar() {
    const [activeDaily, setActiveDaily] = useState(false);
    const [activeBudget, setActiveBudget] = useState(false);
    const [activeSummary, setActiveSummary] = useState(false);
    const router = useRouter();
    const currentPath = router.asPath;
    console.log(currentPath);

    useEffect(() => {
        if(currentPath === "/workspace_dailyexpense"){
            setActiveDaily(true)
            setActiveBudget(false)
            setActiveSummary(false)
            console.log("workspace_dailyexpense")
        }else if(currentPath === "/workspace_budget"){
            setActiveBudget(true)
            setActiveDaily(false)
            setActiveSummary(false)
            console.log("workspace_budget")
        }else if(currentPath === "/workspace_summary"){
            setActiveSummary(true)
            setActiveBudget(false)
            setActiveDaily(false)
            console.log("workspace_summary")
        }
    }, [currentPath]);
    //hover:bg-[#FAE392] hover:shadow-md
    //hover:text-[#9B7C0D]
    //{`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}
    return(
        <nav style={{width:'100%', justifyContent:'space-between',padding:'0 30px'}} className="mt-3 h-[42px] justify-start items-center inline-flex">
                <div className="flex-col justify-center items-center inline-flex">
                    <Link href="/workspace_dailyexpense" >
                    <button className={`p-1 ms-0   ${activeDaily  ? "bg-[#FAE392] shadow-md": "bg-[#FFFDF8]"} border-2 border-[#FFDF6F] rounded-lg justify-center items-center inline-flex `}>
                        <div style={{fontSize:'11px'}} className={` ${activeDaily  ? "text-[#9B7C0D]": "text-[#FFDF6F]"}      text-xs font-medium font-rubik uppercase `}>Daily Expense</div>
                    </button>
                    { activeDaily === true && (
                    <div style={{content:'" "', width: '87%', height:'4px', background:'#FAE392', bottom:'-2px'}} className="ms-1.5 mt-2 rounded-full"></div> )}
                    </Link>
                </div>
                <Link href="/workspace_budget">
                    <button href="/workspace_budget" className={`p-1 me-0  w-[140px]    ${activeBudget  ? "bg-[#FAE392] shadow-md": "bg-[#FFFDF8]"}   rounded-lg border-2 border-[#FFDF6F] justify-center items-center gap-2 flex `}>
                        <div style={{fontSize:'11px'}} className={`${activeBudget  ? "text-[#9B7C0D]": "text-[#FFDF6F]"} text-xs font-medium font-rubik uppercase`}>Budget management</div>
                    </button>
                    { activeBudget === true &&
                    (<div style={{content:'" "', width: '85%', height:'4px', background:'#FAE392', bottom:'-2px'}} className="mt-2 ms-2.5 rounded-full"></div>)}
                </Link>
                <Link href="/workspace_summary">
                    <button href="/workspace_summary" className={`p-1  ${activeSummary  ? "bg-[#FAE392] shadow-md": "bg-[#FFFDF8]"} rounded-lg border-2 border-[#FFDF6F] justify-center items-center flex`}>
                        <div style={{fontSize:'11px'}} className={`${activeSummary  ? "text-[#9B7C0D]": "text-[#FFDF6F]"} text-xs font-medium font-rubik uppercase`}>Summary</div>
                    </button>
                    { activeSummary === true && (
                    <div style={{content:'" "', width: '85%', height:'4px', background:'#FAE392', bottom:'-2px', left:'20px'}} className="mt-2 ms-1.5 rounded-full"></div> )}
                </Link>
        </nav>
    )
}