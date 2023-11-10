import React, {useState,useEffect} from "react";
import Link from 'next/link';
import Image from "next/image";
import noti from '../../public/images/noti.svg'
import user from '../../public/images/user.png'
import logo2 from '../../public/images/logo2.png'



export default function Navbar  (){
    const [countNotification, setCountNotification] = useState(0);
    

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


    return(
        <nav>
          <div className="inline-flex mt-4">
            <Link href={"/private"}>
                <div>
                    <Image src={logo2} alt="logo2" width={50} className="ml-4"/>
                </div>
            </Link>
            <Link href={"/notification"}>
                <div>
                    <Image src={noti} alt="noti" width={20} className=" mt-3 ml-40"/>
                </div>
            </Link>
            { countNotification !== 0  && (<div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                 {countNotification}
            </div>)}
            <Link href={"/"}>     
                <div>
                    <Image src={user} alt="user" width={50} className=" ml-5 mr-5"/>
                </div>
            </Link>
            </div>
        </nav>
    )
}