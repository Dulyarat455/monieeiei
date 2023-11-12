import React,{useState,useEffect} from "react";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import Navbar from "../components/navbar";
import { Rubik } from 'next/font/google'
import Navbarbottom from '../components/navbarbottom';
import Link from "next/link";
import Transaction from "@/components/transaction";
import Scroll from "@/components/scroll";
import Button from "@/components/button";
import Slidebar from "@/components/slidebar";
import Image from "next/image";
import filter from '../../public/images/filter.png'
import Workspacesetting from "@/components/workspacesetting";

export default function Workspace_dailyexpense(){

    const [info, setInfo] = useState([]);
 

    useEffect(() => {
        const token = localStorage.getItem("token");
        const workspaceId = localStorage.getItem("workspace_id");
        const res = fetch("/api/workspace/gettransactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
                 body: JSON.stringify(({workspace_id:workspaceId})),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                 console.log(data)
                 console.log("length = ", data.gettransactions.length)
                 let arraytran = []
                 for ( let i=0 ; i< data.gettransactions.length; i++){
                    const transaction = data.gettransactions[i];

                        // Create a new object for each transaction
                        const newTransaction = {
                            tran_name: transaction.tran_name,
                            tran_type: transaction.tran_type,
                            username_member: transaction.username_member,
                            count_member: transaction.count_member,
                            pocket_name: transaction.pocket_name,
                            category_name: transaction.category_name,
                            amount: transaction.amount,
                            bought_date: transaction.bought_date,
                            photo: transaction.photo,
                            owner_name: transaction.owner_name,
                            owner_id: transaction.user_id
                        };

                        
                        arraytran.push(newTransaction)
                        
                       
                 }
                setInfo(arraytran)
                 


                } else {
                  console.log(data)
                 
                }
            }
            );
    


    }, []);





      const handleIconClick = () => {
        // Check is search icon ontop
        console.log('Check button clicked');
    }

    console.log("info = ",info)


    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/> {/* Change Navbar to workspace */}
            </div>
            <div className="text-[#1E1E1E] text-[32px] font-medium font-rubik mt-4 ml-8 flex">Workspace</div>
            <div className="ml-8 font-normal font-rubik text-[#A7A7A7]">Manage your workspace finances with</div>
            <div className="ml-8 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">friends and family</div>
            
            <Slidebar/>
            {/* Search */}
            <div style={{width:'screen', justifyContent:'space-between', padding:'0 30px'}} className="flex mt-4 gap-2 justify-center items-center">
                <div className="relative w-screen inline-flex gap-1">
                    <input style={{fontSize:'13px'}} className=" w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] placeholder:font-rubik pl-2 placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
                    placeholder="Search for"
                    type="text"/>
                    <button className="absolute right-11 translate-y-2 items-center" onClick={handleIconClick}>
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
                    <Workspacesetting/>
                </div>
            </div>
            {/* Calendar */}
            <div style={{width:'100%', justifyContent:'space-between',padding:'0 30px'}} className="sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full flex mt-2 justify-start items-center">
                <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full inline-flex justify-start items-center">
                    <div style={{fontSize:'13px',whiteSpace: 'nowrap'}} className="text-neutral-400 text-xs font-normal font-['Rubik'] me-2 ml-2">Filter by:</div>
                    <input style={{fontSize:'13px'}} className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] pl-2 placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
                    placeholder="MM/DD/YYYY"
                    type="date"/>
                    <div className="text-neutral-400 text-xs font-normal justify-center items-center font-['Rubik'] ml-2 me-2">-</div>
                    <input style={{fontSize:'13px'}} className="justify-end w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] pl-2 placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
                    placeholder="MM/DD/YYYY"
                    type="date"/>
                </div>
            </div>
            
            <Navbarbottom />
            <Button/>
            <Scroll/>
            <div className="mt-4 mb-24">
            {info.map((tran,index) => ( 
                
                <Transaction key={index} tran_name = {tran.tran_name}  tran_type = {tran.tran_type} 
                username_member = {tran.username_member} count_member = {tran.count_member} 
                pocket_name = {tran.pocket_name} category_name = {tran.category_name} amount = {tran.amount} 
                bought_date = {tran.bought_date} photo = {tran.photo} owner_name = {tran.owner_name} 
                owner_id = {tran.owner_id} />
                
            ))}

                {/* <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/> */}
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