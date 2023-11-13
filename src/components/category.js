import React from "react";

export default function Category(prop) {
    const {category_name,budget,actual,remaining } = prop;

    return(
        <div className="flex justify-start ml-8 me-8 mt-6">
        <div className="w-full h-[109px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="text-black text-xl font-normal font-['Rubik'] ">{category_name}</div>
            <div className="self-stretch px-5 py-4 bg-white rounded-lg border border-zinc-300 justify-start items-start gap-[30px] inline-flex">
                <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-black text-xs font-normal font-['Rubik']">Budget</div>
                    <div style={{fontSize:'14px'}} className="text-black text-base font-normal font-['Rubik']">{budget}</div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-black text-xs font-normal font-['Rubik']">Actual</div>
                    <div style={{fontSize:'14px'}} className="text-black text-base font-normal font-['Rubik']">{actual}</div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-black text-xs font-normal font-['Rubik']">Remaining</div>
                    <div style={{fontSize:'14px'}} className="text-black text-base font-normal font-['Rubik']">{remaining}</div>
                </div>
            </div>
        </div>
        </div>
    )
}