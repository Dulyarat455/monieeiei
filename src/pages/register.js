import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo2 from  '../../public/images/logo2.png'
import { Rubik } from 'next/font/google'
import { Input } from "postcss";
import nameweb from  '../../public/images/nameweb.png'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })


export default function RegisterPage() {
       const router = useRouter();
       const [info, setInfo] = useState({

              user_email: "",
              user_password: "",
              
            });
       const [confirmPassword, setConfirmPassword] = useState("");
       const [message, setMessage] = useState("");

       const changeHandler = (e) => {
          setInfo({ ...info, [e.target.name]: e.target.value });
       }

       //verify
       const regexmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       const regexPassword = /^.{8,}$/

       


       const movePage = () => {
              if((confirmPassword === info["user_password"]) && regexPassword.test(info["user_password"]) && regexmail.test(info["user_email"])){
                 console.log("pass")
                 router.push(`/yourinformation?data=${encodeURIComponent(JSON.stringify(info))}`);
                          
              }
              else if(!(confirmPassword === info["user_password"]) && regexPassword.test(info["user_password"]) && regexmail.test(info["user_email"])){
                 console.log("not pass")
                 setMessage("Password and confirmation password do not match.")
              }
              else if((!(regexmail.test(info["user_email"]))) && (!(regexPassword.test(info["user_password"])))){
                setMessage("The email format and password format are incorrect.")
              }
              else if((!(regexmail.test(info["user_email"]))) &&  regexPassword.test(info["user_password"])){
                setMessage("The email format is wrong.")
              }
              else if(((regexmail.test(info["user_email"]))) &&  (!(regexPassword.test(info["user_password"])))){
               setMessage("The password format is wrong.")
              }
              
              
       }
      
       console.log(info)
       console.log("test = ",info["user_email"])
       console.log("confirmPassword = ",confirmPassword)
      



return(
       <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
       <div className="flex flex-col items-center justify-center h-full pt-10">
       <Image alt="logo2" src={logo2} className="ml-[1rem]"></Image> 
       <div className="  mt-2 font-medium font-rubik text-3xl">Sign up</div>
       <div className=" mt-2 font-normal font-rubik text-[#757575]">Creating an account taking your</div>
       <div className=" mt-1 font-normal font-rubik text-[#757575]">time less than 3 minutes</div>
       <div className=" mt-10">
         <div className="flex justify-center items-center ">
            <div className={`text-sm text-red-500 ${!message && "hidden"}`}>{message}</div>
         </div>
       <form>
        <label htmlFor="email" className="ml-5 text-[#A7A7A7] text-xs">EMAIL*</label><br></br>
        <input className="mb-5 ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" 
        placeholder="Fill the text here" 
        type="email" 
        id="user_email"
        name="user_email"
        onChange={changeHandler}
        required
         />
        <br></br> <label htmlFor="password" className="ml-5 text-[#A7A7A7] text-xs">PASSWORD*</label><br></br>
        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" 
        placeholder="Fill the text here" 
        type="password" 
        id="user_password"
        name="user_password"
        onChange={changeHandler}
        required
         />
        <div className="ml-5 mt-1 text-[10px] mb-5 font-normal">Must be at least 8 characters</div>
        <label htmlFor="cfpassword" className="ml-5 text-[#A7A7A7] text-xs">CONFIRM A PASSWORD*</label><br></br>
        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light"
         placeholder="Fill the text here" 
         type="password" 
         id="password"
         name="password"
         onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
       </form>
       <button className="bg-[#D8B4F8] mt-10 ml-20 w-32 h-12 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" type="button" onClick={()=>{movePage()}} >CONTINUE</button>
       </div>
       </div>
       </div>
       //hello
   

)

}