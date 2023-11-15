import React,{useState,useEffect} from "react";
import jwt from 'jsonwebtoken';


export default function Summary(prop) {
    const {sum , username, memberId} = prop
    const [user_id, setUser_Id] = useState("");  


    useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded =   jwt.decode(token)
        const { user_id } = decoded || {};
        setUser_Id(user_id)

    }, []);     

    return(
        <div className="flex justify-start ml-8 me-8 mt-4">
        <div className="w-full h-20 px-5 py-4 bg-white rounded-lg border border-zinc-300 justify-start items-center inline-flex">
            <div className="w-full justify-start items-center gap-3 flex">
                <div className="justify-start items-start gap-2.5 flex">
                    <div className="w-9 h-9 bg-zinc-300 rounded-full" />
                </div>

               {user_id === memberId && <div className="text-black text-[16px] font-normal font-['Rubik']">You</div>}

               {user_id !== memberId && <div className="text-black text-[16px] font-normal font-['Rubik']">{username}</div>}
            </div>
            <div className="w-full flex-col justify-end items-end gap-2 inline-flex">
                <div className="text-black text-xs font-normal font-['Rubik']">Spending</div>
                <div className="text-black text-base font-normal font-['Rubik']">THB   {sum}</div>
            </div>
        </div>
        </div>
    )
}