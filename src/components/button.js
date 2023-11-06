import React,{useEffect} from "react";
import Link from "next/link";

export default function Button() {

    return(
        <div className="fixed bottom-16 right-0 left-0 flex justify-center items-center gap-2">
                <Link href="/dailyexpense">
                    <button type="button" className="mt-10 inline-block shadow-lg px-5 py-3 focus:outline-none ring-4 ring-purple-300 ring-opacity-50 bg-[#D8B4F8] mt-4 w-42 h-11 border-bottom-4 rounded-lg text-white font-rubik text-xs hover:bg-[#CA8DFF]">ADD A TRANSACTION</button>
                </Link>
        </div>
    )
}