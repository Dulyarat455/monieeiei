import React,{useEffect,useState} from "react";
import Navbar from "../component/navbar";
import { Rubik } from 'next/font/google'
import Navbarbottom from '../../src/component/navbarbottom';
import Link from 'next/link';
import Workspacename from "../../src/component/workspacename";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Workspace() {
    const [workspaceOwners, setWorkspaceOwners] = useState([]); // Store user_id and workspace_id data
    const [user_id, setUser_id] = useState(""); // replace with actual user ID

    useEffect(() => {
        // Fetch user's workspace owners list from the database or API
        // Replace 'API_URL' with the actual endpoint for fetching workspace owners data
        // fetch("mongodb+srv://Monie:1234@cluster0.jl8dvxy.mongodb.net/?retryWrites=true&w=majority")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setWorkspaceOwners(data);
        //     })
        //     .catch((error) => {
        //         console.error("Error while fetching workspace owners data", error);
        //     });
    }, []);
    
    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/> 
            </div>
                <div style={{fontSize: '32px', color: '#1E1E1E'}} className="text-[#1E1E1E] font-medium font-rubik mt-4 ml-10 items-center justify-center">Workspace</div>
                <div className="ml-10 font-normal text-base font-rubik text-[#A6A6A6] items-center justify-center">Manage your workspace finances with</div>
                <div className="ml-10 font-normal text-sm font-rubik text-[#A6A6A6] items-center justify-center">friends and family</div>
                <div className="flex flex-col items-center justify-center h-full pt-4">
                    
                    {/* Check data, if have show component */}
                    {workspaceOwners.some((owner) => owner.user_id === user_id) ? (
                        <Workspacename user_id={user_id} />
                    ) : (
                    <div className="flex flex-col items-center justify-center mt-6">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="#D9D9D9" 
                    class="w-28 h-28 mt-12">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[#D9D9D9] text-xs font-normal font-rubik">Do not have the workspace for you</label>
                    </div>
                    )}
                    <div className="flex flex-col justify-center items-center h-full">
                        <Link href="/createworkspace">
                            <button type="button" className="bg-[#D8B4F8] mt-6 w-40 h-12 border-bottom-4 rounded-xl text-white text-xs font-rubik text-sm hover:bg-[#CA8DFF]">CREATE A WORKSPACE</button>
                        </Link>
                    </div>
                </div>
                <div className="mt-12"> 
                    <Navbarbottom/>
                    </div>
        </div>
    )
}