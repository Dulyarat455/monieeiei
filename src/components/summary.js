import React from "react";

export default function Summary() {

    return(
        <div className="flex justify-start ml-8 me-8 mt-4">
        <div className="w-full h-20 px-5 py-4 bg-white rounded-lg border border-zinc-300 justify-start items-center inline-flex">
            <div className="w-full justify-start items-center gap-3 flex">
                <div className="justify-start items-start gap-2.5 flex">
                    <div className="w-9 h-9 bg-zinc-300 rounded-full" />
                </div>
                <div className="text-black text-[16px] font-normal font-['Rubik']">User 1</div>
            </div>
            <div className="w-full flex-col justify-end items-end gap-2 inline-flex">
                <div className="text-black text-xs font-normal font-['Rubik']">Spending</div>
                <div className="text-black text-base font-normal font-['Rubik']">THB 10</div>
            </div>
        </div>
        </div>
    )
}