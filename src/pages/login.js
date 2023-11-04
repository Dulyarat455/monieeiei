import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

import logo from  '../../public/images/logo2.png'
import Image from "next/image";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function Login(){

    const router = useRouter();
    const [info, setInfo] = useState({
        user_email: "",
        user_password: "",
      });

    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const res = fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setMessage(data.message);
              setMessagestatus(true);
              // set token to local storage
              localStorage.setItem("token", data?.token);
              // wait 2 seconds and redirect to home
              setTimeout(() => {
                router.push("/");
              }, 2000);
            } else {
              setMessage(data.message);
            }
          });
      };

      const  changeHandler  =  (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
        console.log(info)
      };






    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className= "flex flex-col items-center justify-center h-full pt-10">
                <Image src={logo} alt="logo" priority/>
                <h4 className='text-3xl font-medium font-rubik mt-2 text-center'>Login</h4>
                <div className=" mt-2 font-normal font-rubik text-[#757575]">Welcome back!</div>
                <div className=" font-normal font-rubik text-[#757575]">Please enter your details.</div>
                <div className="flex justify-center items-center ">
                    {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
                </div>
            <div className="mt-14">
                <form onSubmit={submitHandler} >
                    <label className=" text-[#A7A7A7] text-xs flex font-rubik">EMAIL</label>
                    <input
                        className="flex flex-col items-center justify-center mt-1 bg-[#FFFEF9] border-[1px] h-8 w-[16rem] rounded-lg border-opacity-30 border-[#757575] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light"
                        placeholder="Enter your email"
                        type="email" 
                        id="user_email"
                        name="user_email"
                        required
                        autoComplete="email"
                        onChange={changeHandler}
                    />
                    <label className="mt-4 text-[#A7A7A7] text-xs flex font-rubik">PASSWORD</label>
                    <input
                        className="mt-1 bg-[#FFFEF9] border-[1px] h-8 w-[16rem] rounded-lg border-opacity-30 border-[#757575] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light"
                        placeholder="Enter your password"
                        type="password" 
                        id="user_password"
                        name="user_password"
                        required
                        autoComplete="current-password"
                        onChange={changeHandler}
                    />
                    <div className="flex flex-col items-center justify-center bg-[#D8B4F8] mt-20 ml-16 mr-20 p-2 pl-4 pr-5 w-32 h-12 text-white text-sm rounded-xl font-rubik hover:bg-[#CA8DFF]"  >
                        <button type="submit">LOG IN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}