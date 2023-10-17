import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo2 from  '../../public/images/logo2.png'
import { Rubik } from 'next/font/google'
import { Input } from "postcss";




export default function RegisterPage() {

return(
   
       <div className="flex flex-col items-center justify-center h-full pt-10 bg-[#FFFEF9]">
       <Image alt="logo2" src={logo2} className="ml-[1rem]"></Image> 
       <div className="  mt-2 font-medium font-rubik text-3xl">Sign up</div>
       <div className=" mt-2 font-normal font-rubik text-[#757575]">Creating an account taking your</div>
       <div className=" mt-1 font-normal font-rubik text-[#757575]">time less than 3 minutes</div>
       <div className=" mt-10">
       <form>
        <label for="email" className="ml-5 text-[#A7A7A7] text-xs">EMAIL*</label><br></br>
        <input className="mb-5 ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="email" id="email" ></input>
        <br></br> <label for="password" className="ml-5 text-[#A7A7A7] text-xs">PASSWORD*</label><br></br>
        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="password" id="password" ></input>
        <div className="ml-5 mt-1 text-[10px] mb-5 font-normal">Must be at least 8 characters</div>
        <label for="cfpassword" className="ml-5 text-[#A7A7A7] text-xs">CONFIRM A PASSWORD*</label><br></br>
        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="password" id="cfpassword" ></input>
       </form>
       <button className="bg-[#D8B4F8] mt-10 ml-20 w-32 h-12 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">CONTINUE</button>
       </div>
       </div>
   

)

}