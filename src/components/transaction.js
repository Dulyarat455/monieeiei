import React,{useState,useEffect} from "react";
import jwt from 'jsonwebtoken';
import { format } from 'date-fns';

import Image from "next/image";
import Picture from '../../public/images/image.png'
import Transactionmodal from "./transactionmodal";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import { Rubik } from 'next/font/google'

export default function Transaction( prop ) {
    const { tran_name,tran_type, username_member,count_member
        ,pocket_name,category_name,amount,bought_date ,photo,owner_name
        ,owner_id} = prop
    const [user_id, setUser_Id] = useState(0);    

    // Popup
    const [Key, setKey] = useState(false);
    const [zoom, setZoom] = useState(false);
    const closeTransactionModal = () => {
        setKey(false);
        console.log("function")
    };

      useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded =   jwt.decode(token)
        const { user_id } = decoded || {};
        setUser_Id(user_id)
    }, []);

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

    const formatDate = (dateString) => {
        // Parse the date string
        const date = new Date(dateString);

        // Format the date using date-fns
        const formattedDate = format(date, 'dd MMM yyyy');

        return formattedDate;
    }
    
    // Check number characters of transaction name
    const splitText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + "…";
        }
        return text;
    };

    
    console.log(zoom)
    return(
        <div className="flex justify-start ml-8 me-8" >
            {zoom === true && (
                <div className="fixed inset-0 bg-[#757575] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="relative justify-center items-center">
                        <Image id="Image" src={photo} alt="Base64 Image" width={300} height={200} onClick={() => {setZoom(false) 
                        console.log("Zoom")}}/>
                    </div>
                </div>)}
        <div className="w-full h-[105px] mt-2 px-3 py-3 bg-white rounded-lg border border-[#D9D9D9] justify-center items-center gap-[3px] inline-flex" onClick={(e)=> { 
            
            if (!e.target.id || e.target.id !== "Image" ) {
                setKey(true);
            }
            
            }}>
            <div className="w-full justify-start items-center gap-3 flex">
                <div className="justify-start items-start gap-2.5 flex">
                    <div id="Image" className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center">
                        {photo ? ( // Check if have upload image or not
                        // <Image alt="Default Picture" src={Avatar} className="w-10 h-10 rounded-full" />
                        <Image id="Image" src={photo} alt="Base64 Image" className="w-10 h-10 rounded-full " width={300} height={200} onClick={()=> {setZoom(true) 
                            console.log("hellophoto")}}/>
                        ) : (
                        /* Display a image icon if no user-uploaded image */
                        <Image id="Image" alt="Picture" src={Picture} className="w-7 h-7 rounded-full" />
                        )}
                    </div>
                    
                </div>
            
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div className="text-black text-base font-normal font-rubik">{splitText(tran_name, 12)}</div>
                        <div className="justify-end items-end">
                            {/* Check if have member show this */}
                            <div className="w-[32px] h-4 bg-purple-300 rounded-lg text-center text-white text-[8px] font-normal font-['Rubik'] flex items-center justify-center " >{count_member}ppl</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-1 inline-flex">
                        { category_name.length > 0 && (<div className=" px-1.5 py-1 bg-cyan-100 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            {/* Query category and Pcocket's name */}
                            {/* If some of this doesn't have show only one */}
                            
                            <div style={{fontSize:'11px'}} className="text-cyan-700 text-xs font-normal font-rubik">{category_name}</div>
                            </div>)}
                        <div className="px-1.5 py-1 bg-pink-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div style={{fontSize:'11px'}} className="text-pink-500 text-xs font-normal font-rubik">{pocket_name}</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div style={{fontSize:'11px'}} className="text-neutral-500 text-xs font-normal font-rubik">Created by </div>
                        {/* Query Username that create this transaction */}
                        { user_id === owner_id && (
                        <div style={{fontSize:'11px'}} className="text-stone-900 text-xs font-normal font-['Rubik']">You</div>)}
                        { user_id !== owner_id && (
                        <div style={{fontSize:'11px'}} className="text-stone-900 text-xs font-normal font-['Rubik']">{owner_name}</div>)}
                    </div>
                </div>
            </div>
            <div className="w-[85px] flex-col justify-start items-end gap-[2px] inline-flex">
                <div className={`text-${tran_type === 0 ? 'green-700' : 'rose-700'} text-xl font-normal`}>
                    {tran_type === 0 ? `+${formatMonetaryValue(amount)}` : `-${formatMonetaryValue(Math.abs(amount))}`}
                </div>
                <div className="flex-col items-end inline-flex">
                {/* Query time and Date/Month/Year that create this transaction */}
                
                <div style={{fontSize:'11px'}} className="text-zinc-300 text-xs font-normal font-['Rubik'] items-end ">{formatDate(bought_date)}</div>
                </div>
            </div>
        </div>
        <Transactionmodal isVisible={Key} tran_name = {tran_name} tran_type = {tran_type} bought_date = {bought_date} 
        category_name = {category_name} pocket_name = {pocket_name} amount = {amount}
        username_member = {username_member} onClose={closeTransactionModal} />
        </div>
    )
}