import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo2 from  '../../public/images/logo2.png'
import { Rubik } from 'next/font/google'
import { Input } from "postcss";




export default function RegisterPage() {

return(
   
       <>
       <Image alt="logo2" src={logo2} className="ml-36 pt-16"></Image> 
       <div className=" ml-[8.5rem] mt-2 font-medium font-rubik text-3xl">Sign up</div>
       <div className="ml-[4.5rem] mt-2 font-normal font-rubik text-[#757575]">Creating an account taking your</div>
       <div className="ml-[6.25rem] mt-1 font-normal font-rubik text-[#757575]">time less than 3 minutes</div>
       <div className=" mt-14">
       <form>
        <label for="email" className="ml-14 text-[#A7A7A7] text-xs">EMAIL*</label><br></br>
        <input className="ml-14 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" type="email" id="email" ></input>
       </form>
       </div>
       </>
   

)

}