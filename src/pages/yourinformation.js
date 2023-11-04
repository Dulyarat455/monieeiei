import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo2 from '../../public/images/logo2.png'
import { Rubik } from 'next/font/google'
import { Input } from "postcss";


import nameweb from '../../public/images/nameweb.png'
const inter = Rubik({ subsets: ['latin'], weight: ['400'] })

export default function Yourinformation() {
    const router = useRouter();
    const { data } = router.query;
    const parsedData = data ? JSON.parse(decodeURIComponent(data)) : {};
    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);
    const [info, setInfo] = useState({

        user_email: parsedData["user_email"] || "",
        user_password: parsedData["user_password"] || "",
        user_username:"",
        user_firstname:"",
        user_lastname:"",
        user_phonenumber:"",
        user_DOB:"",
      });

      const regexPhone = /^\d{10}$/;

  

    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
     }

     const handleDateChange = (e) => {
       
  
        let selectDate
        selectDate = new Date(e.target.value).toISOString().split("T")[0];
        console.log("selectDate = ",selectDate)
        setInfo({ ...info, ["user_DOB"]: selectDate});
        
       
      }; 


      const submitHandler = () => {
        
        if(info["user_password"] && info["user_email"] && info["user_username"] && info["user_firstname"] && 
           info["user_lastname"] && info["user_phonenumber"] &&  info["user_DOB"] &&  regexPhone.test(info["user_phonenumber"]) ){
            console.log("inside")
            const res = fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    console.log(data.success)
                    console.log(data)
                setMessage(data.message);
                setMessagestatus(true);
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
                } else {
                    console.log(data)
                    setMessage(data.message)
                    // alert(data.message)
                //   setMessage(data.message);
                //   setMessagestatus(false)
                }
            }
            );
        }

        else if(info["user_password"] && info["user_email"] && info["user_username"] && info["user_firstname"] && 
        info["user_lastname"] && info["user_phonenumber"] &&  info["user_DOB"] &&  (!regexPhone.test(info["user_phonenumber"]))){
            setMessage("The phone number format is wrong.")
        }
        else{
            setMessage("You haven't filled in all your information yet..")
        }
       
        
      }



      console.log("data = ",parsedData)
      console.log("info = ",info)
    return (
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full pt-10">
                <Image alt="logo2" src={logo2} className="ml-[1rem]"></Image>
                <div className="  mt-2 font-medium font-rubik text-3xl">Your</div>
                <div className="  mt-2 font-medium font-rubik text-3xl">Information</div>
                <div className=" mt-2 font-normal font-rubik text-[#757575]">Giving us a little bit more about you</div>
                <div className=" mt-10">
                    <div className="flex justify-center items-center ">
                        {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
                    </div>
                    <form>
                        <label htmlFor="username" className="ml-5 text-[#A7A7A7] text-xs">USERNAME</label><br></br>
                        <input className="mb-5 ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light
                        focus:outline-none  focus:shadow-md focus:shadow-[#A7A7A7]	focus:ring-2 focus:ring-[#CA8DFF]"
                         placeholder="Create your username" 
                         type="text" 
                         id="user_username"
                         name="user_username" 
                         onChange={changeHandler}
                         required/>
                        <br></br> <label htmlFor="fname" className="ml-5 text-[#A7A7A7] text-xs">WHAT&apos;S YOUR FIRST NAME?</label><br></br>
                        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light
                         focus:outline-none  focus:shadow-md focus:shadow-[#D8B4F8] focus:ring-2 focus:ring-[#CA8DFF]" 
                        placeholder="Ex. Johny" 
                        type="text" 
                        id="user_firstname" 
                        name="user_firstname" 
                        onChange={changeHandler}
                        required/>
                        <div className="ml-5 mb-5 "></div>
                        <label htmlFor="lname" className="ml-5 text-[#A7A7A7] text-xs">WHAT&apos;S YOUR LAST NAME?</label><br></br>
                        <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light
                         focus:outline-none  focus:shadow-md focus:shadow-[#D8B4F8] focus:ring-2 focus:ring-[#CA8DFF]" 
                        placeholder="Ex. Gates" 
                        type="text" 
                        id="user_lastname"
                        name="user_lastname" 
                        onChange={changeHandler}
                        required />
                        <div className="ml-5 mb-5 "></div>
                        <label htmlFor="born" className="ml-5 text-[#A7A7A7] text-xs">WHEN WERE YOU BORN?</label><br></br>
                        <input className="ml-5 mb-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light
                         focus:outline-none  focus:shadow-md focus:shadow-[#D8B4F8] focus:ring-2 focus:ring-[#CA8DFF]" 
                        placeholder="DD/MM/YYYY" 
                        type="date" 
                        id="user_DOB" 
                        name="user_DOB"
                        onChange={handleDateChange}/>
                        <div className="ml-5"></div>
                        <label htmlFor="phonenumber" className="ml-5 text-[#A7A7A7] text-xs">WHAT&apos;S YOUR PHONE NUMBER?</label><br></br>
                        <input className="ml-5 mb-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light
                         focus:outline-none  focus:shadow-md focus:shadow-[#D8B4F8] focus:ring-2 focus:ring-[#CA8DFF]" 
                        placeholder="Ex. 0812345678" 
                        type="tel" 
                        id="user_phonenumber" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="user_phonenumber" 
                        onChange={changeHandler} />
                    </form>
                    <button type="button" className="bg-[#D8B4F8] mt-10 mb-10 ml-[3rem] w-48 h-12 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF] " onClick={()=>{submitHandler()}}>CREATE AN ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}
