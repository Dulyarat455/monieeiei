
import Link from "next/link";
import Image from "next/image";
import whitecircle from  '../../public/images/whitecircle.svg'
export default function Listnoti1({username,workspacename,time,date,status}) {

    return(
        <div className=" inline-flex mb-3">
               <Image alt="whitecircle" src={whitecircle} className="mb-10"></Image>
               <div className="ml-3 w-[15rem]">
               <div className=" text-[16px] text-[400]">{time} AM / {date}</div>
               {/* <p className=" text-[16px] text-[400] text-[#0d9b2e] whitespace-normal">Username sent a request form Monie eiei’s workspace to you for a sec.</p> */}
               <p className=" text-[16px] text-[400] text-[#9b0d0d] whitespace-normal">Username sent a request form Monie eiei’s workspace to you for a sec.</p>  
               </div>
        </div>
    )
}