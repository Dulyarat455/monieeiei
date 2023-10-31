import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";

import logo from  '../../public/images/logo2.png'
import Image from "next/image";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function changepassword(){
    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);
    const [token, setToken] = useState('');
    const [info, setInfo] = useState({
        user_current_password: "",
        user_password: "",
        user_confirm_password:"",
      });
    const router = useRouter();

      useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
       
      }, []);

      const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
     }
     //verify
     const regexPassword = /^.{8,}$/

     const submitHandler = (e) => {


        if( (!regexPassword.test(info["user_password"])) || (!regexPassword.test(info["user_confirm_password"]))){
            setMessage("The password format is wrong.")
            setMessagestatus(false)
        }

       else if(info["user_password"] === info["user_confirm_password"]){
            const res = fetch("/api/changepassword", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
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
                        router.push("/changepassword");
                    }, 1000);
                    } else {
                      console.log(data)
                      setMessage(data.message)
                      setMessagestatus(false)
                    }
                }
                );
        }
        else{
            setMessage("New password and confirm password do not match.")
            setMessagestatus(false)
        }

     }

    



    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full pt-10">
        <Image alt="logo" src={logo} className="ml-[1rem]"></Image> 
        
        <div className="  mt-2 font-medium font-rubik text-3xl">Change</div>
        <div className="  mt-1 font-medium font-rubik text-3xl">My Password</div>
        
        <div className=" mt-10">
            <div className="flex justify-center items-center ">
                    {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
            </div>
            <form>
                <label htmlFor="currentpassword" className="ml-5 text-[#A7A7A7] text-xs">CURRENT PASSWORD*</label><br></br>
                <input className="mb-5 ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" 
                type="email" 
                id="user_current_password" 
                name="user_current_password"
                onChange={changeHandler}
                required
                ></input>
                <br></br> <label htmlFor="newpassword" className="ml-5 text-[#A7A7A7] text-xs">NEW PASSWORD*</label><br></br>
                <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" 
                type="password" 
                id="user_password" 
                name="user_password"
                onChange={changeHandler}
                required
                ></input>
                <div className="ml-5 mt-1 text-[10px] mb-5 font-normal">Must be at least 8 characters</div>
                <label htmlFor="cfpassword" className="ml-5 text-[#A7A7A7] text-xs">CONFIRM NEW PASSWORD*</label><br></br>
                <input className="ml-5 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 border-[#757575] bg-[#FFFEF9] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light" placeholder="Fill the text here" 
                type="password" 
                id="user_confirm_password" 
                name="user_confirm_password"
                onChange={changeHandler}
                required
                ></input>
            </form>
            <button className="bg-[#D8B4F8] mt-10 ml-20 w-32 h-12 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" type="button" onClick={()=>{submitHandler()}} >CONTINUE</button>
        </div>
        </div>
        </div>
    )
}
