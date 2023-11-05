import React,{useEffect} from "react";
import Link from "next/link";

export default function Buttonandscroll() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    return(
        <div className="fixed bottom-16 right-0 left-0 flex justify-center items-center gap-2">
                <Link href="/dailyexpense">
                    <button type="button" className="mt-10 inline-block shadow-lg px-5 py-3 focus:outline-none ring-4 ring-purple-300 ring-opacity-50 bg-[#D8B4F8] mt-4 w-42 h-11 border-bottom-4 rounded-lg text-white font-rubik text-xs hover:bg-[#CA8DFF]">ADD A TRANSACTION</button>
                </Link>
                <button className="fixed bottom-16 right-11 w-8 h-8 p-2.5 bg-[#FFDF6E] rounded-full justify-center items-center inline-flex" 
                    onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                     }} 
                >
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        class="w-6 h-6 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>
                    </div>
                </button>
        </div>
    )
}