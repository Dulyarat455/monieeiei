import React from "react";
import { format } from 'date-fns';

export default function Transactionmodal(prop) {
    const {isVisible,tran_name,tran_type,bought_date,
    category_name,pocket_name,amount,username_member, onClose} = prop;

    if ( !isVisible ) return null;
    console.log("visiblae = ",isVisible);

    const formatDate = (dateString) => {
        // Parse the date string
        const date = new Date(dateString);

        // Format the date using date-fns
        const formattedDate = format(date, 'dd MMM yyyy');

        return formattedDate;
    }


    const formatMonetaryValue = (value) => {
        if (isNaN(value)) {
            console.error("Invalid number");
            return "";
          }
        
          // Use toLocaleString for formatting with commas
          return value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
    }

    return(
        <div className="fixed inset-0 bg-[#757575] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div style={{position:'relative', width:'315px', height:'auto', paddingBottom:'18px',paddingTop:'18px'}} className="h-full bg-[#FAE392] rounded-3xl border border-[#9B7B0C] flex flex-col justify-center items-center">
                {/* Query Transaction's name */}
                <div className="text-center text-stone-900 text-2xl font-medium font-['Rubik']">{tran_name}</div>
                {/* Query Date/Month/Year Time */}
                <div className="text-yellow-700 text-xl font-normal font-['Rubik']">{formatDate(bought_date)}</div>
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="justify-start items-center gap-2 inline-flex mt-4">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Type of Transaction:</div>
                        </div>
                        <div className="px-2 py-1 bg-white bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            {/* Can be expense or income */}
                        { tran_type === 1 && (
                            <div className="text-stone-900 text-xs font-normal font-['Rubik']">Expense</div>)}
                        { tran_type !== 1 && (
                            <div className="text-stone-900 text-xs font-normal font-['Rubik']">Income</div>)}

                        </div>
                    </div>
                    {/* Show category or pocket or show both */}
                   {category_name && <div className="justify-start items-center gap-2 inline-flex">
                        
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Category of Expense:</div>
                        </div>
                        <div className="px-2 py-1 bg-cyan-100 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-cyan-700 text-xs font-normal font-['Rubik']">{category_name}</div>
                        </div>
                    </div>}
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Pocket:</div>
                        </div>
                        <div className="px-2 py-1 bg-pink-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-pink-500 text-xs font-normal font-['Rubik']">{pocket_name}</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Members:</div>
                        </div>
                        {/* Should be dropdown or other if have many members popup will be too long */}
                        {username_member.length > 0 && <div className="flex-col justify-start items-start gap-2 inline-flex">
                            {/* Query members */}
                           {username_member.map((username,index) => ( 
                            <div key={index}  className="px-2 py-1 bg-purple-300 bg-opacity-75 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="text-violet-800 text-xs font-normal font-['Rubik']">{username}</div>
                            </div>
                            ))}

                            
                        </div>}
                    </div>
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <div className="text-yellow-700 text-xs font-normal font-['Rubik'] uppercase">Total:</div>
                        </div>
                        {/* Query total */}
                      
                       
                        {tran_type === 0 && (<div className="px-2 py-1 bg-green-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-green-700 text-xs font-normal font-['Rubik']">{formatMonetaryValue(amount)} THB</div>
                        </div>)}

                        
                        {tran_type === 1 && ( <div className="px-2 py-1 bg-rose-300 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div className="text-rose-700 text-xs font-normal font-['Rubik']">{formatMonetaryValue(amount)} THB</div>
                        </div>)}
                    </div>
                </div>
                    <button className="justify-start items-start mt-4 inline-flex w-[110px] h-[40px] px-8 py-4 bg-stone-50 rounded-lg border-2 border-purple-400 justify-center items-center gap-2.5 flex text-purple-400 text-sm font-medium font-['Rubik'] uppercase " onClick={() => {onClose()
                        console.log("Hi")}}>
                        Close
                    </button>
            </div>
        </div>
    )
}