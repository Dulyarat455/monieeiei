import React from "react";
import Image from "next/image";
import filter from '../../public/images/filter.png'

export default function Searchandfilter() {
    const handleIconClick = () => {
        // Check is search icon ontop
        console.log('Check button clicked');
    }
    return(
        <div className="relative">
        <nav className="flex gap-2 mt-2">
            <div className="absolute inset-y-0 left-28 pl-40 flex items-center">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 32 32" 
            stroke-width="1.5" 
            stroke="#A7A7A7" 
            className="w-6 h-6 mt-2"
            onClick={handleIconClick}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </div>
            <input style={{fontSize:'13px'}} className="w-[272px] h-[32px] ml-8 p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] placeholder-[#A6A6A6] placeholder:font-rubik pl-2 placeholder-text-xs placeholder-font-rubik placeholder-font-normal"
            placeholder="Search for"
            type="text"/>

            <button className="w-[34px] h-[32px] bg-[#FFFEF9] rounded-lg border border-[#D9D9D9]">
                <Image alt="filter" src={filter} className="ml-1 w-6 h-6 relative"/>
            </button>
        </nav>
        </div>
    )
}