import React,{useEffect,useState} from "react";
import Navbar from "../component/navbar";
import { Rubik } from 'next/font/google'
import Navbarbottom from '../../src/component/navbarbottom';
import Link from 'next/link';
import Workspacename from "../../src/component/workspacename";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Workspace() {
    const [workspaceData, setWorkspaceData] = useState([]);
    
    {/*useEffect(() => {
        // Fetch user's workspace data from the database and replace it with actual data
        async function fetchWorkspaceData() {
            try {
                const response = await fetch('API_URL');
                if (response.ok) {
                    const data = await response.json();
                    setWorkspaceData(data);
                } else {
                    console.error('Failed to fetch workspace data');
                }
            } catch (error) {
                console.error('Error while fetching workspace data', error);
            }
        }

        fetchWorkspaceData();
    }, []);*/}
    
    return(
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
            <Navbar/> 
            </div>
                <div className="text-[#1E1E1E] text-[32px] font-medium font-rubik mt-4 ml-10 items-center justify-center">Workspace</div>
                <div className="ml-10 font-normal text-sm font-rubik text-[#A7A7A7] items-center justify-center">Manage your workspace finances with friends</div>
                <div className="ml-10 font-normal font-xxs font-rubik text-[#A7A7A7] items-center justify-center">and family</div>
                <div className="flex flex-col items-center justify-center h-full pt-8">
                    <Workspacename />
                    {/* Map workspace's name */}
                    {workspaceData.length > 0 ? (
                        workspaceData.map((workspaceName, index) => (
                            <Workspacename key={index} name={workspaceName} />
                    ))
                    ) : (
                    <div className="flex flex-col items-center justify-center mt-4">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="#D9D9D9" 
                    class="w-28 h-28 mt-12">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[#D9D9D9] text-xs font-normal font-rubik">Do not have the workspace for you</label>
                    <Link href="/createworkspace">
                    <button type="button" className="bg-[#D8B4F8] mt-4 w-40 h-12 rounded-xl text-white text-xs font-rubik text-sm hover:bg-[#CA8DFF]">CREATE A WORKSPACE</button>
                    </Link>
                    </div>
                    )}
                </div>
            <Navbarbottom/>
        </div>
    )
}