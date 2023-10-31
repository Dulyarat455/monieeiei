import React, {useState} from "react";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Workspacename({name})
{
    return(
        <div className="workspace-container">
            <button style={{ width: '300px', height: '80px'}} className="workspace-name-button px-10 py-2 bg-[#FAE392] hover:bg-[#9B7B0C] rounded-md justify-center items-center gap-2.5 inline-flex">
                <div style={{fontSize: 26, color: '#9B7B0C'}} className={`text-lg font-normal font-rubik justify-center items-center ${inter.className}`}>
                    {name ? name : "Workspace’s Name"}
                </div>
            </button>
        </div>
    )
}