import React, { useState,useEffect } from "react";
import Link from 'next/link';
import { Rubik } from 'next/font/google'
import Navbar from "../components/navbar";
import Navbarbottom from "../components/navbarbottom";
import Deletemodal from "../components/deletemodal";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';

const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Setting() {
    const router = useRouter();
    const [Key, setKey] = useState(false);
    const [info,setInfo] = useState([])
    const [user_id, setUser_Id] = useState("");  

    



    useEffect(() => {
        const token = localStorage.getItem("token");
        const workspaceId = localStorage.getItem("workspace_id");

        
        const decoded =   jwt.decode(token)
        const { user_id } = decoded || {};
        setUser_Id(user_id)

        const res = fetch("/api/setting/getmember", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify(({workspace_id:workspaceId})),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    console.log(data.success)
                    // setInfo(data.getrate)
                    let arraymember = []
                        for ( let i=0 ; i< data.getworkspacemember.length; i++){
                            const workspacemember = data.getworkspacemember[i];

                                // Create a new object for each transaction
                                const newWorkspaceMember = {
                                    user_id: workspacemember.user_id,
                                    user_username: workspacemember.user.user_username
                                    
                                };

                                
                                arraymember.push(newWorkspaceMember)
                                
                            
                        }
                        setInfo(arraymember)
                    


                } else {
                  console.log(data)
                  // setMessage(data.message)
                  // setMessagestatus(false)
                }
            }
            );

    }, []);



    const closeModal = () => {
        setKey(false);
    };

    console.log("setting info = ",info)

    return (
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full md:mx-auto"> 
            <Navbar/> 
            </div>
                <div className="text-[32px] text-black font-medium font-rubik mt-4 ml-10 items-center justify-center">Setting</div>
                <div className="ml-10 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">Manage members on your workspace</div>
                <div className="pt-8 justify-center items-center">
                <div style={{fontSize: '20px'}} className="font-rubik font-medium text-black text-xl ml-10">Members</div>


                    { info.map((member,index) => (  
                        <div className="inline-flex mt-2 w-full" key={index} >
                      
                        <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-0 rounded-full "> </div>
                        {user_id === member.user_id  && <label style={{fontSize: '14px'}} className=" px-8  font-rubik font-normal text-black text-base ">{member.user_username} {"(You)"}</label>}
                        {user_id !== member.user_id  && <label style={{fontSize: '14px'}} className=" px-8  font-rubik font-normal text-black text-base ">{member.user_username}</label>}
                        </div>
                    ))}

                    {/* <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        <label style={{fontSize: '14px'}} className="px-8 font-rubik font-normal text-black text-base">User@gmail.com</label>
                    </div>
                    <div className="w-6 h-6 bg-[#D8B4F8] ml-12 mt-2 rounded-full">
                        <label style={{fontSize: '14px'}} className="px-8 font-rubik font-normal text-black text-base">User@gmail.com</label>
                    </div> */}
                    <Link href="/addmember">
                    <button 
                    type="button" 
                    className=" mt-6 ml-12 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" >
                        ADD A MEMBERS
                    </button>
                    </Link>
                    <div style={{fontSize: '20px'}} className="mt-8 font-rubik font-medium text-black text-xl items-center justify-center ml-10">Workspace</div>
                    <button 
                    type="button" 
                    className="mb-14 mt-4 ml-12 p-2 pl-6 pr-5 border-2 border-CA8DFF text-[#C98DFF] text-sm font-medium rounded-md hover:bg-[#CA8DFF] hover:text-white" 
                    onClick={()=> setKey(true)}>
                        DELETE A WORKSPACE 
                    </button>
                    <Navbarbottom/>
                </div>
                <Deletemodal isVisible={Key} onClose={closeModal} />
        </div>

    )
}