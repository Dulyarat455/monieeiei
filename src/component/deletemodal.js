import React from "react";
import { Rubik } from 'next/font/google'
const inter = Rubik({ subsets: ['latin'],weight:['400'] })

const Deletemodal = ({isVisible, onClose}) => {
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    
    //const [onClose, set] = useState(false);
    console.log("visiblae = ",isVisible);

    // function to delete workspace
    //const onDelete = () => {
    //}
    // test workspace's name
    // need to create a function to retrieve the workspace name and workspace_id values.
    const workspaceName = 'My japan trip';

    return(
        // backdrop
        <div className="ml-10 mt-16 fixed inset-0 bg-[#757575] bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div style={{width: '290px', height: '200px'}} className="bg-[#FAE392] rounded-[36px] border border-[#9B7B0C] flex flex-col justify-center items-center">
                <div style={{color: '#9B7B0C', fontSize: 17}} className="w-[333px] text-center text-xl font-medium font-['Rubik'] justify-center items-center">Are you sure to delete</div>
                <div style={{color: '#9B7B0C', fontSize: 17}} className="text-center text-xl font-medium font-['Rubik'] justify-center items-center">&ldquo;{workspaceName}&rdquo;?</div>
                <div className="justify-center items-center gap-6 inline-flex">    
                    <button
                    style={{height: '49px',width: '120px'}} 
                    //onClick={onDelete}
                    className="p-2 mt-6 bg-[#D8B4F8] hover:bg-[#CA8DFF] text-sm font-medium font-rubik text-white rounded-lg justify-center items-center flex">
                        I'm sure
                    </button>
                    <button 
                    style={{height: '49px',width: '120px'}} 
                    onClick={() => onClose()}
                    className=" p-2 mt-6 bg-[#D8B4F8] hover:bg-[#CA8DFF] text-sm font-medium font-rubik text-white rounded-lg justify-center items-center flex">
                        No, I am not
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deletemodal;