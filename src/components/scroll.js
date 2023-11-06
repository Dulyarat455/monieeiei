import React,{useEffect} from "react";
import Link from "next/link";

export default function Scroll() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    return(
        <div className="fixed bottom-16 right-0 left-0 flex justify-center items-center gap-2">
                <button className="fixed bottom-16 right-8 w-8 h-8 p-2.5 bg-[#FFDF6E] rounded-full justify-center items-center inline-flex" 
                    onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                     }} 
                >
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth="2" 
                        stroke="currentColor" 
                        className="w-6 h-6 m-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                        </svg>
                    </div>
                </button>
        </div>
    )
}