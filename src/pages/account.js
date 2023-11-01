import React,{useState,useEffect} from "react";
import Avatar from  '../../public/images/userprofile.png'
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../component/navbar';
import Navbarbottom from '../../src/component/navbarbottom';
import Link from 'next/link';
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
// Modified by Uracha 28-10-2003 

export default function account(){

    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);
    const [token, setToken] = useState('');
    const [info, setInfo] = useState({
        user_firstname: "",
        user_lastname: "",
        user_DOB:"",
        user_phonenumber:"",
        user_email:""

      });
      //verify
      const regexmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const regexPhone = /^\d{10}$/;

      useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);

        const res = fetch("/api/getprofile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
           
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    console.log(data.success)
                    console.log(data.getAccount['user_email'])
                    setInfo({ ...info, ["user_email"]: data.getAccount['user_email'],
                    ["user_phonenumber"]: data.getAccount['user_phonenumber'], 
                    ["user_firstname"]: data.getAccount['user_firstname'],
                    ["user_lastname"]: data.getAccount['user_lastname'],
                    ["user_DOB"]: data.getAccount['user_DOB']
                 });

                // setMessage(data.message);
                // setMessagestatus(true);
                // setTimeout(() => {
                //     router.push("/changepassword");
                // }, 1000);

                } else {
                  console.log(data)
                  setMessage(data.message)
                  setMessagestatus(false)
                }
            }
            );


      }, []);

      const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
     }

     const submitHandler = (e) => {
        
        if( (!regexmail.test(info["user_email"])) ){
            setMessage("The email format is wrong.")
            setMessagestatus(false)
        }
        else if((!regexPhone.test(info["user_phonenumber"]))){
            setMessage("The email format is wrong.")
            setMessagestatus(false)
        }
        else if( !info['user_firstname'] || !info['user_lastname'] || !info['user_DOB'] || 
        !info['user_phonenumber'] || !info['user_email']
        ){
            setMessage("You haven't filled in all your information yet..")
            setMessagestatus(false)
        }
        else{
            const res = fetch("/api/editprofile", {
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
                    setMessage(data.message);
                    setMessagestatus(true);
    
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
    
                    } else {
                      console.log(data)
                      setMessage(data.message)
                      setMessagestatus(false)
                    }
                }
                );
        }  

     }
    

      console.log("info = ",info)

    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
                <Navbar/>
                <div className="w-28 h-28 rounded-full bg-[#D8B4F8] flex items-center justify-center">
                <Image alt="Profile" src={Avatar} className="w-24 h-24 rounded-full]"/>
                </div>
                <label htmlFor="user_username" className="text-[#757575] font-normal flex">@ppppppp</label>

                <div className="item-center justify-centerl mt-4">
                    <div className="flex justify-center items-center ml-5">
                        {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
                    </div>
                    <form>
                        <label htmlFor="user_firstname" className="ml-2 text-[#A7A7A7] text-xs">FIRST NAME</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] item-center rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="Johny" 
                        type="text" 
                        id="user_firstname" 
                        name="user_firstname"
                        defaultValue={info['user_firstname']}
                        onChange={changeHandler}
                        >
                        </input>
                        <label htmlFor="user_lastname" className="ml-2 text-[#A7A7A7] text-xs">LAST NAME</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="Gates" 
                        type="text" 
                        id="user_lastname" 
                        name="user_lastname" 
                        defaultValue={info['user_lastname']}
                        onChange={changeHandler}
                        >
                        </input>
                        <label htmlFor="user_DOB" className="ml-2 text-[#A7A7A7] text-xs">MY BIRTHDAY</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="02/01/1996" 
                        type="date" 
                        id="user_DOB" 
                        name="user_DOB"
                        defaultValue={info['user_DOB']}
                        onChange={changeHandler}
                         >
                        </input>
                        <label htmlFor="phonenumber" className="ml-2 text-[#A7A7A7] text-xs">MY PHONE NUMBER</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="0812345678" 
                        type="tel" 
                        id="user_phonenumber" 
                        name="user_phonenumber"
                        defaultValue={info['user_phonenumber']} 
                        onChange={changeHandler}
                        >
                        </input>
                        <label htmlFor="email" className="ml-2 text-[#A7A7A7] text-xs">MY EMAIL</label><br></br>
                        <input className="mb-2 ml-2 h-8 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#A7A7A7] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-light flex" 
                        placeholder="Johny.Gates@gmail.com" 
                        type="email" 
                        id="user_email" 
                        name="user_email"
                        defaultValue={info['user_email']}
                        onChange={changeHandler}
                         >
                        </input>
                        <Link href="/changepassword" className="ml-40 mt-1 text-[10px] mb-2 font-normal flex text-[#9747FF]">Change my password</Link>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="button" className="bg-[#D8B4F8] mx-auto mt-2 ml-18 w-24 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" onClick={()=>{submitHandler()}}>UPDATE</button>
                        </div>
                    </form>
                </div>
                <Navbarbottom/>
            </div>
        </div>
    )
}