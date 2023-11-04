import React from "react";

export default function Transactionmodal({isVisible, onClose}) {
    if ( !isVisible ) return null;

    return(
        <div className="fixed inset-0 bg-[#757575] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div style={{width: '315px', height: '400px',borderRadius:'1.5rem'}} className="h-full bg-[#FAE392] border border-[#9B7B0C] flex flex-col justify-center items-center">
                {/* Query Transaction's name */}
                <div style={{fontSize: '22px'}} className="text-center text-stone-900 text-2xl font-medium font-['Rubik']">Transaction’s name</div>
                {/* Query Date/Month/Year Time */}
                <div style={{fontSize: '20px'}} className="text-yellow-700 text-xl font-normal font-['Rubik']">10 Oct 2023 8.35 PM</div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-center gap-2 inline-flex mt-4">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Type of Transaction:</div>
                        </div>
                        <div className="px-2 py-1 bg-white bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            {/* Can be expense or income */}
                            <div className="text-stone-900 text-xs font-normal font-['Rubik']">Expense</div>
                        </div>
                    </div>
                    {/* Show category or pocket or show both */}
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Category of Expense:</div>
                        </div>
                        <div className="px-2 py-1 bg-cyan-100 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-cyan-700 text-xs font-normal font-['Rubik']">Category</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Pocket:</div>
                        </div>
                        <div className="px-2 py-1 bg-pink-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-pink-500 text-xs font-normal font-['Rubik']">Pocket’s name</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Members:</div>
                        </div>
                        {/* Should be dropdown or other if have many members popup will be too long */}
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            {/* Query members */}
                            <div className="px-2 py-1 bg-purple-300 bg-opacity-75 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-violet-800 text-xs font-normal font-['Rubik']">Username1</div>
                            </div>
                            <div className="px-2 py-1 bg-purple-300 bg-opacity-75 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-violet-800 text-xs font-normal font-['Rubik']">Username1</div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Total:</div>
                        </div>
                        {/* Query total */}
                        {/* If income use green */}
                        <div className="px-2 py-1 bg-green-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-green-700 text-xs font-normal font-['Rubik']">100 THB</div>
                        </div>
                        {/* If expense use red */}
                        <div className="px-2 py-1 bg-rose-300 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-rose-700 text-xs font-normal font-['Rubik']">100 THB</div>
                        </div>
                    </div>
                </div>
                <div className="justify-start items-start mt-6 inline-flex" >
                    <button className="h-[40px] px-8 py-4 bg-stone-50 rounded-lg border-2 border-purple-400 justify-center items-center gap-2.5 flex text-purple-400 text-sm font-medium font-['Rubik'] uppercase " >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}