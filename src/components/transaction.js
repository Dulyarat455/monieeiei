import React,{useState,useEffect} from "react";
import Image from "next/image";
import Picture from '../../public/images/image.png'
import Avatar from '../../public/images/avatar.jpg'
import Transactionmodal from "./transactionmodal";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
import { Rubik } from 'next/font/google'

export default function Transaction() {

    const [Key, setKey] = useState(false);
    const [transactionImage, setTransactionImage] = useState(null);
    useEffect(() => {
        const uploadedImageUrl = "../../public/images/avatar.jpg"; // Replace with base64?
        handleImageUpload(uploadedImageUrl);
      }, []); 
    
      const handleImageUpload = (uploadedImageUrl) => {
        setTransactionImage(uploadedImageUrl);
      };
    

    // Check number characters of transaction name
    const splitText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + "…";
        }
        return text;
    };
    const transactionName = "Share food with others in restaurant";
    const transactionValue = -100;
    
    return(
        <div className="flex justify-start ml-8 me-8">
        <div className="w-full h-[105px] mt-2 px-3 py-3 bg-white rounded-lg border border-[#D9D9D9] justify-center items-center gap-[3px] inline-flex" onClick={()=> setKey(true)}>
            <div className="w-full justify-start items-center gap-3 flex">
                <div className="justify-start items-start gap-2.5 flex">
                    <div className="w-10 h-10 bg-zinc-300 rounded-full flex items-center justify-center">
                        {transactionImage ? ( // Check if have upload image or not
                        <Image alt="Default Picture" src={Avatar} className="w-10 h-10 rounded-full" />
                        ) : (
                        /* Display a image icon if no user-uploaded image */
                        <Image alt="Picture" src={Picture} className="w-7 h-7 rounded-full" />
                        )}
                    </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div style={{fontSize:'14px'}} className="text-black text-base font-normal font-rubik">{splitText(transactionName, 12)}</div>
                        <div className="justify-end items-end">
                            {/* Check if have member show this */}
                            <div className="w-[32px] h-4 bg-purple-300 rounded-lg text-center text-white text-[8px] font-normal font-['Rubik'] flex items-center justify-center " >5 ppl</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-1 inline-flex">
                        <div className=" px-1.5 py-1 bg-cyan-100 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            {/* Query category and Pcocket's name */}
                            {/* If some of this doesn't have show only one */}
                            <div style={{fontSize:'11px'}} className="text-cyan-700 text-xs font-normal font-rubik">Category</div>
                            </div>
                        <div className="px-1.5 py-1 bg-pink-200 bg-opacity-75 rounded justify-center items-center gap-2.5 flex">
                            <div style={{fontSize:'11px'}} className="text-pink-500 text-xs font-normal font-rubik">Pocket’s name</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex">
                        <div style={{fontSize:'11px'}} className="text-neutral-500 text-xs font-normal font-rubik">Created by </div>
                        {/* Query Username that create this transaction */}
                        <div style={{fontSize:'11px'}} className="text-stone-900 text-xs font-normal font-['Rubik']">Username</div>
                    </div>
                </div>
            </div>
            <div className="w-[85px] flex-col justify-start items-end gap-[2px] inline-flex">
                <div className={`text-${transactionValue >= 0 ? 'green-700' : 'rose-700'} text-xl font-normal`}>
                    {transactionValue >= 0 ? `+ ${transactionValue}` : `- ${Math.abs(transactionValue)}`}
                </div>
                <div className="flex-col items-end inline-flex">
                {/* Query time and Date/Month/Year that create this transaction */}
                <div style={{fontSize:'11px'}} className="text-zinc-300 text-xs font-normal font-['Rubik'] items-end ">8.35 PM</div>
                <div style={{fontSize:'11px'}} className="text-zinc-300 text-xs font-normal font-['Rubik'] items-end ">20 Oct 2023</div>
                </div>
            </div>
            <Transactionmodal isVisible={Key} />
        </div>
        </div>
    )
}