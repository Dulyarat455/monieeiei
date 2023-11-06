import React from "react";
import Image from "next/image";
import filter from '../../public/images/filter.png'
import Calender from "./calender";

export default function Searchandfilter_budget() {
    const handleIconClick = () => {
        // Check is search icon ontop
        console.log('Check button clicked');
    }
    return(
        /* Change width of search and proportion button */
        <div style={{width:'screen', justifyContent:'space-between', padding:'0 30px'}} className="flex mt-4 gap-2 justify-center items-center">
        <div className="relative w-screen">
            <input style={{fontSize:'13px'}} className=" w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] placeholder:font-rubik pl-2 placeholder-text-xs placeholder-font-rubik placeholder-font-normal"
            placeholder="Search for"
            type="text"/>
            <button className="absolute right-1 translate-y-2 items-cente inline-flexr" onClick={handleIconClick}>
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

            {/* Add calender */}
            <button className="w-[60px] h-[32px] bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] flex justify-center items-center">
                {/*<Calender/>*/}
                <Image alt="filter" src={filter} className="w-6 h-6 relative"/>
            </button>
            <button className="px-3 py-2.5 bg-purple-300 hover:bg-purple-400 rounded-lg justify-center items-center gap-2.5 inline-flex text-white text-xs font-normal font-['Rubik']">
                Proportion
            </button>
        </div>
    )
}