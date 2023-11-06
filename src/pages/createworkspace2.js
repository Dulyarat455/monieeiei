import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from 'next/font/google'

import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function Createworkspace2(){
  const router = useRouter();
  const { data } = router.query;
  const parsedData = data ? JSON.parse(decodeURIComponent(data)) : {};
  const [token, setToken] = useState('');
  const [message, setMessage] = useState("");
  const [messagestatus, setMessagestatus] = useState(false);
  const [member, setMember] = useState({

    member1: "",
    member2: "",
    member3: "",
    member4: "",
    member5: ""
    
  });

  console.log("parsedData = ", parsedData)
  const memberArray = Object.values(member).filter(value => value !== "" && value !== null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
   
  }, []);

  const changeHandler = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
 }

  const moveBack = () => {
    router.push('/createworkspace')
  }

  const submitHandler = () => {

    if(!(member["member1"])){
       
      setMessage("You should add at least 1 person.")
      setMessagestatus(false)
    }
     else if( (member["member1"] || member["member2"] || member["member3"] || member["member4"] || member["member5"]) ){

        const res = fetch("/api/workspace/createworkspace", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "auth-token": token,
          },
          body: JSON.stringify(({workspace_name: parsedData,member_list: memberArray })),
          })
          .then((res) => res.json())
          .then((data) => {
              if (data.success) {

                  console.log(data.success)
                  console.log(data)
              setMessage(data.message);
              setMessagestatus(true);
              setTimeout(() => {
                  router.push("/createworkspace");
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
         // console.log("innnnnnnnn")
        setMessage("You should add at least 1 person.")
        setMessagestatus(false)
       
      }
  }



  

  // if(member["member1"]){
  //   console.log("hello")
  // }

  // console.log("memberarray = ",memberArray);
  // console.log("member = ",member )
  // console.log("check = ",member["member1"])
  


    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div classname=" w-[23.5rem] h-full bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-24 text-5xl">Create a</div>
            <button><Image alt="Icon" src={Icon} className=" ml-16 mt-14"></Image> </button>
            </div>
            <div className="font-rubik text-5xl ml-[4.3rem] mt-3">Workspace</div>
            <div className=" mt-14"></div>
            <div className="flex justify-center items-center ml-12 mb-4">
                    {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
            </div>
            <form>
            <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.1*</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user1@gmail.com" 
        type="email" 
        id="member1"
        name="member1"
        onChange={changeHandler}
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.2</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user2@gmail.com" 
        type="email" 
        id="member2"
        name="member2"
        onChange={changeHandler}
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.3</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user3@gmail.com" 
        type="email" 
        id="member3"
        name="member3"
        onChange={changeHandler}
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.4</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user4@gmail.com" 
        type="email" 
        id="member4"
        name="member4"
        onChange={changeHandler}
        required
         />
          <label htmlFor="email" className=" ml-14 text-[#9B7C0D] text-[20px] font-normal">USER&apos;S EMAIL NO.5</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal" 
        placeholder="Ex. user5@gmail.com" 
        type="email" 
        id="member5"
        name="member5"
        onChange={changeHandler}
        required
         />
            </form>
        <div className="inline-flex">
        <button className="bg-[#FFFEF9] mt-10 ml-12 w-32 h-10 rounded-xl border-2 border-[#CA8DFF] text-[#CA8DFF] font-rubik text-sm hover:bg-[#CA8DFF] hover:text-[#FFFFFF]" onClick={() => {moveBack()}}>BACK</button>
        <button className="bg-[#D8B4F8] mt-10 ml-5 mb-10  w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" onClick={()=>{submitHandler()}}>CREATE NOW</button>
        </div>
        </div>
        </div>
        </div>
    )
}
