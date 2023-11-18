import React,{ useState,useEffect } from "react";
import { useRouter } from "next/router";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

const Deletemodal = ({isVisible, onClose}) => {
    const [workspace_id, setWorkspace_id] = useState("");
    const[token, setToken] = useState("");
    const[workspace_name, setWorkspace_name] = useState("");
    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);
    const router = useRouter();
    

   
    useEffect(() => {
        const gettoken = localStorage.getItem("token");
        const workspaceId = localStorage.getItem("workspace_id");
        const workspaceName = localStorage.getItem("workspace_name");
        setToken(gettoken)
        setWorkspace_id(workspaceId)
        setWorkspace_name(workspaceName)

    }, []);   

    if ( !isVisible ) return null;
    
    //const [onClose, set] = useState(false);
    console.log("visiblae = ",isVisible);
    const text_button1 = "I'M SURE";
    const text_button2 = "NO, I AM NOT";

    // function to delete workspace
    const onDelete = () => {

        const res = fetch("/api/setting/deleteworkspace", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify(({workspace_id:workspace_id})),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    console.log(data.success)
                
                    
                    setMessage(data.message)
                    setMessagestatus(true)


                    setTimeout(() => {
                        router.push("/workspace");
                    }, 1000);

                } else {
                  console.log(data)
                  setMessage(data.message)
                  setMessagestatus(false)
                }
            }
            );

    }
    // test workspace's name
    // need to create a function to retrieve the workspace name and workspace_id values.
    

    return(
        // backdrop
        <div className="fixed inset-0 bg-[#757575] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div style={{width: '290px', height: '200px',borderRadius:'1.5rem'}} className="bg-[#FAE392] border border-[#9B7B0C] flex flex-col justify-center items-center">
                <div style={{color: '#9B7B0C', fontSize: 17}} className="w-[333px] text-center text-xl font-medium font-['Rubik'] justify-center items-center">Are you sure to delete</div>
                <div style={{color: '#9B7B0C', fontSize: 17}} className="text-center text-xl font-medium font-['Rubik'] justify-center items-center">{workspace_name}</div>
                <div className="flex justify-center items-center ml-4 mb-4">
                    {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
            </div>
                <div style={{gap: '10px'}} className="justify-center items-center inline-flex">    
                    <button
                    style={{height: '46px',width: '120px'}} 
                    onClick={()=>{onDelete()}}
                    className="p-2 mt-6 bg-[#D8B4F8] hover:bg-[#CA8DFF] text-sm font-medium font-rubik text-white rounded-lg justify-center items-center flex">
                        {text_button1}
                    </button>
                    <button 
                    style={{height: '46px',width: '120px'}} 
                    onClick={() => onClose()}
                    className=" p-2 mt-6 bg-[#D8B4F8] hover:bg-[#CA8DFF] text-sm font-medium font-rubik text-white rounded-lg justify-center items-center flex">
                        {text_button2}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deletemodal;