import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
import Link from 'next/link';
import { format } from 'date-fns';

import Listnoti1 from "@/components/listnoti1";
import Listnoti2 from "@/components/listnoti2";
import Transactionmodal from "@/components/transactionmodal";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function Notification(){
    const [info , setInfo] = useState([])

    //set formatdate
    const tzOffset = 7; // Offset for Indochina Time (GMT+7)
    const dateNow = new Date(Date.now() + tzOffset * 3600000).toISOString().split('T')[0];


      const formatDate = (dateString) => {
                // Parse the date string
                const date = new Date(dateString);
        
                // Format the date using date-fns
                const formattedDate = format(date, 'dd MMM yyyy');
        
                return formattedDate;
               }

    useEffect(() => {

        const token = localStorage.getItem("token");
        const res = fetch("/api/notification/getall", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                  
                console.log(data.message)
                let arraynoti = []
                 for ( let i=0 ; i< data.getall.length; i++){
                    const notificationall = data.getall[i];

                        // Create a new object for each transaction
                        const newnotificationall = {
                            user_id: notificationall.user_id,
                            notification_type: notificationall.notification_type,
                            description: notificationall.description,
                            time_stamp: notificationall.time_stamp,
                            date: notificationall.date,
                            
                           
                            
                        };

                        
                        arraynoti.push(newnotificationall)
                        
                       
                 }
                setInfo(arraynoti)
             
                } else {
                  console.log(data)
                 
                }
            }
            );


    }, []);

    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full">
        <Navbar></Navbar>
        <div className="min-h-screen w-screen  bg-[#FAE392] rounded-t-[36px] mt-10 ">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-16 text-[500] text-[32px]">Last Notification</div>
            <button><Image alt="Icon" src={Icon} className=" ml-5 mt-10"></Image></button>
            </div>

       
       <div className=" text-[500] text-[20px] ml-10 mt-10">Today</div>
       <div className="ml-10 mt-5"> 
       { info.map((noti,index) => ( 
             ( noti.date === dateNow &&
            <Listnoti1 key={index} time={noti.time_stamp} date={formatDate(noti.date)}  description = {noti.description}  status={noti.notification_type}></Listnoti1>
            
       )
       ))}
       
       {/* <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1>
       <Listnoti1  time={"10:00 am"} date={"2020202"}  description = {"111111"}  status={0}></Listnoti1> */}

       
       </div>
       <div className=" text-[500] text-[20px] ml-10 mt-5">Day ago</div>
       <div className="ml-10 mt-5"> 
       { info.map((noti,index) => ( 
           ( noti.date < dateNow && <Listnoti2 key={index} time={noti.time_stamp} date={formatDate(noti.date)}  description = {noti.description}  status={noti.notification_type}></Listnoti2>)
       
        ))}
         </div>
        

        </div>
        </div>
        </div>
    )
}
