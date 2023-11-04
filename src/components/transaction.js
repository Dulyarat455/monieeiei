import React,{useState} from "react";
import Image from "next/image";
import Picture from '../../public/images/image.png'
import Transactionmodal from "./transactionmodal";

export default function Transaction() {

    //const [popup, setPopup] = useState(false);

    const [Key, setKey] = useState(false);

    return(
        <button className="w-[313px] h-[105px] mt-2 ml-8 px-3 py-3 bg-white rounded-lg border border-[#D9D9D9] justify-center items-center gap-[3px] inline-flex" onClick={()=> setKey(true)}>
            <div className="justify-start items-center gap-2.5 flex ">
                <div className="justify-start items-start gap-2.5 flex">
                    <div className="w-10 h-10 bg-zinc-300 rounded-full">
                        {/* Need to change if use image full of rounded */}
                        <div className="w-7 h-7" >
                        <Image alt="Picture" src={Picture} className="ml-1.5 mt-1.5"/>
                        </div>
                    </div>
                </div>
                <div className="w-[170px] flex-col justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div style={{fontSize:'14.5px'}} className="text-black text-base font-normal font-rubik">Transaction’s name</div>
                        <div className="justify-end items-end">
                            {/* Check if have member show this */}
                            <div className="w-[32px] h-4 bg-purple-300 rounded-lg text-center text-white text-[8px] font-normal font-['Rubik'] flex items-center justify-center " >5 ppl</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-1 inline-flex">
                        <div className="px-1.5 py-1 bg-cyan-100 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            {/* Query category and Pcocket's name */}
                            {/* If some of this doesn't have show only one */}
                            <div className="text-cyan-700 text-xs font-normal font-rubik">Category</div>
                            </div>
                        <div className="px-1.5 py-1 bg-pink-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-pink-500 text-xs font-normal font-rubik">Pocket’s name</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div style={{fontSize:'11px'}} className="text-neutral-500 text-xs font-normal font-rubik">Created by </div>
                        {/* Query Username that create this transaction */}
                        <div style={{fontSize:'11px'}} className="text-stone-900 text-xs font-normal font-['Rubik']">Username</div>
                    </div>
                </div>
            </div>
            <div className="w-[200px] flex-col justify-start items-end gap-[2px] inline-flex">
                {/* Should have negative */}
                <div className="text-green-700 text-xl font-normal font-['Rubik'] items-end ">+ 100</div>
                <div className="flex-col items-end inline-flex">
                {/* Query time and Date/Month/Year that create this transaction */}
                <div style={{fontSize:'11px'}} className="text-zinc-300 text-xs font-normal font-['Rubik'] items-end ">8.35 PM</div>
                <div style={{fontSize:'11px'}} className="text-zinc-300 text-xs font-normal font-['Rubik'] items-end ">20 Oct 2023</div>
                </div>
            </div>
            <Transactionmodal isVisible={Key} />
        </button>
    
        
    )
}