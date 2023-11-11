import React, {useState,useEffect} from "react";
import Link from 'next/link';
import Image from "next/image";
import noti from '../../public/images/noti.svg'
import user from '../../public/images/user.png'
import logo2 from '../../public/images/logo2.png'



export default function Navbar  (){
    const [countNotification, setCountNotification] = useState(0);
     // State to manage the visibility of the dropdown
     const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const res = fetch("/api/getnumnotification", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                 console.log("datacount = ", data.count)   
                setCountNotification(data.count)
             
                } else {
                  console.log(data)
                 
                }
            }
            );
    


    }, []);

    const setReadStatus = () => {
        const token = localStorage.getItem("token");
        const res = fetch("/api/notification/setstatusnotifications", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                  
                console.log(data.message)
             
                } else {
                  console.log(data)
                 
                }
            }
            );
    };



   

    // Function to toggle the visibility of the dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return(
        <nav>
          <div className="inline-flex mt-4">
            <Link href={"/private"}>
                <div>
                    <Image src={logo2} alt="logo2" width={50} className="ml-4"/>
                </div>
            </Link>
            <Link href={"/notification"} onClick={()=>{setReadStatus()}}>
                <div>
                    <Image src={noti} alt="noti" width={20} className=" mt-3 ml-40"/>
                </div>
            </Link>
            { countNotification !== 0  && (<div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                 {countNotification}
            </div>)}
            <div className="ml-5 relative">
                    <div className="cursor-pointer" onClick={toggleDropdown}>
                        <Image src={user} alt="user" width={50} className="cursor-pointer"/>
                    </div>
                    {/* Dropdown Content */}
                    {isDropdownOpen && (
                        <div className="absolute top-12 bg-white shadow-xl rounded-[0.3rem] border-[1px] border-[#CA8DFF] py-1 mt-3">
                            <Link href={"/profile"}>
                                <div className="inline-block px-2 py-4 text-[#CA8DFF]  hover:bg-[#D8B4F8] hover:text-white">Profile</div>
                            </Link>
                            <Link href={"/launchpage"}>
                                <div className="inline-block px-2 py-4 text-[0.7rem] text-[#CA8DFF] hover:bg-[#D8B4F8] hover:text-white">About us</div>
                            </Link>
                            <Link href={"/logout"}>
                                <div className="inline-block px-2 py-4 text-[0.82rem] text-[#CA8DFF] hover:bg-[#D8B4F8] hover:text-white">Log out</div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}