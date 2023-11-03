import React from "react";
import Image from "next/image";
import Picture from '../../public/images/image.png'

export default function Transaction() {
    return(
        <div className="absolute w-[314px] h-[105px] mt-4 ml-8 px-3.5 py-5 bg-white rounded-lg border border-[#D9D9D9] justify-start items-center gap-[10px] inline-flex">
            <div className="justify-start items-center gap-3 flex">
                <div className="justify-start items-start gap-2.5 flex">
                    <div className="w-12 h-12 bg-zinc-300 rounded-full">
                        {/* Need to change if use image full of rounded */}
                        <div className="w-9 h-9 relative" >
                        <Image alt="Picture" src={Picture} className="ml-1.5 mt-1.5"/>
                        </div>
                    </div>
                </div>
                <div className="w-[180px] flex-col justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div style={{fontSize:'15px'}} className="text-black text-base font-normal font-rubik">Transaction’s name</div>
                            <div className="justify-start items-start flex">
                                <div className="w-4 h-4 bg-zinc-300 rounded-full border border-white" />
                                <div className="w-4 h-4 bg-zinc-300 rounded-full border border-white" />
                            </div>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                        <div className="px-2 py-1 bg-cyan-100 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-cyan-700 text-xs font-normal font-rubik">Category</div>
                        </div>
                        <div className="px-2 py-1 bg-pink-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-pink-500 text-xs font-normal font-rubik">Pocket’s name</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div className="text-black text-xs font-normal font-rubik">Created by </div>
                        <div className="w-4 h-4 bg-zinc-300 rounded-full border border-white" />
                        <div className="text-black text-xs font-normal font-rubik">(You)</div>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-end gap-[2px] inline-flex">
                <div className="text-green-700 text-xl font-normal font-['Rubik']">+ 100</div>
                <div className="text-zinc-300 text-xs font-normal font-['Rubik']">8.35 PM</div>
            </div>
        </div>
    )
}