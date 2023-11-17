import React,{useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
import Link from 'next/link';
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function Addmember(){
    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);
    const router = useRouter();
    const [email, setEmail] = useState("");

    const regexmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    


    const handleSubmit = () => {
        const token = localStorage.getItem("token");
        const workspaceId = localStorage.getItem("workspace_id");
        const workspaceName = localStorage.getItem("workspace_name");
        
       if(email.length > 0 && regexmail.test(email) ){ 

        const res = fetch("/api/setting/addmember", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify(({workspace_id:workspaceId ,email_member: email, workspace_name:workspaceName })),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                  
                  setMessage(data.message)
                  setMessagestatus(true)

                  setTimeout(() => {
                    router.push("/setting");
                }, 1000);
                    

                } else {

                  console.log(data)

                  setMessage(data.message)
                  setMessagestatus(false)
                }
            }
            );
        
       }

       else if( email.length === 0 && regexmail.test(email)){
        setMessage("Please enter email")
        setMessagestatus(false)
       }    
       else{
        setMessage("The email format is incorrect.")
        setMessagestatus(false)
       }

    }




    

    const changeHandler = (e) =>{
         setEmail(e.target.value)
    }
    

    const moveBack = ()=> {

         router.push('/setting')
    }


    

    console.log("email = ", email)

    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div className=" w-[23.5rem] h-screen bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-24 text-[32px]">Add member</div>
            <button><Image alt="Icon" src={Icon} className=" ml-12 mt-10"></Image></button>
            </div>
            <div className=" mt-14"></div>
            <div className="flex justify-center items-center ml-12 mb-4">
                    {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
            </div>
            <form>
            <label htmlFor="text" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL*</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user@gmail.com" 
        type="text" 
        id="emailmember"
        name="email"
        onChange={changeHandler}
        required
         />
            </form>
        <div className="inline-flex">
        <button className="bg-[#FFFEF9] mt-10 ml-12 w-32 h-10 rounded-xl border-2 border-[#CA8DFF] text-[#CA8DFF] font-rubik text-sm hover:bg-[#CA8DFF] hover:text-[#FFFFFF]" onClick={()=>{moveBack()}}>BACK</button>
        <button className="bg-[#D8B4F8] mt-10 ml-5  w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" onClick={()=>{handleSubmit()}}>ADD NOW</button>
        </div>
        </div>
        </div>
        </div>
    )
}
