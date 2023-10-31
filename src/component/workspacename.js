import React, {useState} from "react";
import { useRouter } from "next/router";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

export default function Workspacename({user_id, workspace_id})
{
    const [workspaceName, setWorkspaceName] = useState(""); // Store the workspace name
    const router = useRouter();

    useEffect(() => {
        // Fetch workspace name based on user_id and workspace_id
        async function fetchWorkspaceName() {
            try {
                const response = await fetch(`mongodb+srv://Monie:1234@cluster0.jl8dvxy.mongodb.net/?retryWrites=true&w=majority/${user_id}/${workspace_id}`);
                if (response.ok) {
                    const data = await response.json();
                    setWorkspaceName(data.workspaceName);
                } else {
                    console.error('Failed to fetch workspace name');
                }
            } catch (error) {
                console.error('Error while fetching workspace name', error);
            }
        }

        fetchWorkspaceName();
    }, [user_id, workspace_id]);

    return(
        <div className="workspace-container">
            <button style={{ width: '300px', height: '80px'}} className="workspace-name-button px-10 py-2 bg-[#FAE392] hover:bg-[#9B7B0C] rounded-md justify-center items-center gap-2.5 inline-flex">
                <div style={{fontSize: 26, color: '#9B7B0C'}} className={`text-lg font-normal font-rubik justify-center items-center ${inter.className}`}>
                    {workspaceName ? workspaceName : "Workspace’s Name"}
                </div>
            </button>
        </div>
    )
}