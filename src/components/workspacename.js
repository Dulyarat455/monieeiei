import React, {useState} from "react";
import { useRouter } from "next/router";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Workspacename({workspace_name, workspace_id})
{
    const [workspaceName, setWorkspaceName] = useState(""); // Store the workspace name
    const router = useRouter();

    console.log("in componet = ", workspace_name,workspace_id)

    return(
        <div className="workspace-container mt-4">
            <button style={{ width: '300px', height: '80px'}} className="bg-[#FAE392] hover:bg-[#FFDF6F] rounded-md justify-center items-center gap-2.5 inline-flex">
                <div style={{fontSize: 26}} className={`text-lg text-[#9B7C0D] hover:text-[#9B7C0D] font-normal font-rubik justify-center items-center ${inter.className}`}>
                    {workspace_name ? workspace_name : "Workspace’s Name"}
                </div>
            </button>
        </div>
    )
}