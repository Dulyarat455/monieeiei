import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from '../../public/images/Icon.svg'
import Link from 'next/link';
const inter = Rubik({ subsets: ['latin'], weight: ['400'] })
export default function Setproportion() {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [messagestatus, setMessagestatus] = useState(false);
    const [info, setInfo] = useState({

    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const workspaceId = localStorage.getItem("workspace_id");

        const res = fetch("/api/budget/getrate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,
            },
            body: JSON.stringify(({ workspace_id: workspaceId })),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {

                    console.log(data.success)
                    // setInfo(data.getrate)

                    setInfo({
                        ...info, ["workspace_id"]: workspaceId, ["budget_value"]: data.getrate.budget_value
                        , ["percent0"]: data.getrate.percent0, ["percent1"]: data.getrate.percent1, ["percent2"]: data.getrate.percent2
                        , ["percent3"]: data.getrate.percent3, ["percent4"]: data.getrate.percent4, ["percent5"]: data.getrate.percent5
                        , ["percent6"]: data.getrate.percent6, ["percent7"]: data.getrate.percent7, ["percent8"]: data.getrate.percent8
                        , ["percent9"]: data.getrate.percent9

                    });



                } else {
                    console.log(data)
                    // setMessage(data.message)
                    // setMessagestatus(false)
                }
            }
            );


    }, []);


    const changeHandler = (e) => {
        setInfo({ ...info, [e.target.name]: (parseFloat(e.target.value) || 0) });

    }

    const handleSubmit = () => {
        if (((info["percent0"] + info["percent1"] + info["percent2"] + info["percent3"] + info["percent4"]
            + info["percent5"] + info["percent6"] + info["percent7"] + info["percent8"] + info["percent9"]) === 100) && info["budget_value"] > 0

        ) {
            const token = localStorage.getItem("token");

            const res = fetch("/api/budget/updatebudget", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify((info)),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {

                        console.log(data.success)
                        setMessage(data.message)
                        setMessagestatus(true)
                        setTimeout(() => {
                            router.push("/workspace_budget")
                        }, 1000);

                    } else {
                        console.log(data)
                        setMessage(data.message)
                        setMessagestatus(false)
                    }
                }
                );
        }
        else if (info["budget_value"] < 0 || info["budget_value"] === 0) {
            setMessage("please enter budget value")
            setMessagestatus(false)
        }
        else {
            setMessage("The sum rate of each category is not equal to 100% .")
            setMessagestatus(false)
        }

    }



    console.log("setprop = ", info)
    const categoryitems = ["Food", "Utilities", "Entertainment", "Transport", "Housing", "Personal", "Medical/Healthcare", "Education", "Technology", "Saving"]
    const percent_items = [info.percent0,info.percent1,info.percent2,info.percent3,info.percent4,info.percent5,info.percent6,info.percent7,info.percent8,info.percent9]
    const elems = []

    let idx = 0
    for (const category of categoryitems) {
        
        // elems.push(
        //     <div>
        //     <div className=" flex ">
        //         <div className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal">{category}</div>
        //         <div className=" flex ml-[10.4rem] mt-5 items-center">
        //             <input type="number" id="food" name="percent0"
        //                 defaultValue={percent_items[idx]}
        //                 onChange={changeHandler}
        //                 dir="rtl" className=" pr-2 border-[1px] w-[50px] h-[38px] rounded-lg border-[#9B7C0D]  text-[#9B7C0D] text-[16px] font-normal"></input>
        //             <div className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute">%</div>
        //         </div>
        //     </div>
        //     <div className=" inline-flex  ml-[16.5rem] ">
        //         <div className="  text-[#9B7C0D] text-[16px] font-normal">{info.budget_value * percent_items[idx] / 100}</div>
        //         <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">THB</div>
        //     </div>
        // </div>
        // )

        elems.push(
            <div className="w-screen flex flex-col px-8 gap-4 h-max">
                <div className="flex w-full h-max text-[#9B7C0D] text-[24px] font-normal">
                    <div className=" mr-auto h-max flex flex-wrap w-4/5 break-words  px-2">
                        <div className="w-full h-max">{category}</div>
                    </div>
                    <div className="flex w-1/3 ml-auto gap-2">
                        <input type="number" id={category.toLowerCase()} name={"percent"+idx}
                            defaultValue={percent_items[idx]}
                            onChange={changeHandler}
                            dir="rtl" className=" rounded-lg border-[#9B7C0D] text-[#9B7C0D] text-[16px] font-normal w-4/5 h-[2rem] "/>
                        <div className="  text-[#9B7C0D] text-[24px] font-normal">%</div>
                    </div>
                </div>
                <div className="flex ml-auto text-[#9B7C0D] text-[16px] font-normal gap-4">
                    <div >{info.budget_value * percent_items[idx] / 100}</div>
                    <div >THB</div>
                </div>
            </div>
        )
        
        idx++                      
    }
    
    return (

        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="flex flex-col items-center justify-center h-full ">
                <Navbar></Navbar>
                <div className=" w-screen h-full bg-[#FAE392] rounded-t-[36px] mt-10 flex flex-col gap-4">
                    <div className=" inline-flex">
                        <div className="font-rubik mt-10 mb-5 ml-28 text-[32px] text-[500]">Propotion</div>
                        <button>  <Image alt="Icon" src={Icon} className=" ml-16 mt-14"></Image></button>
                    </div>
                    <div className="w-screen flex flex-col px-8 gap-4">
                <div className="flex w-full  h-max text-[#9B7C0D] text-[24px]  font-normal">
                    <div className=" mr-auto ml-1 w-full h-max flex flex-wrap">
                       Our budget
                    </div>
                    <div className="flex w-4/5 ml-auto gap-2">
                        <input type="number" id="budget" name="budger_value"
                            defaultValue={info.budget_value}
                            onChange={changeHandler}
                            dir="rtl" className=" rounded-lg border-[#9B7C0D] text-[#9B7C0D] text-[16px] font-normal w-4/5 "/>
                        <div className="  text-[#9B7C0D] text-[16px] self-end font-normal">THB</div>
                    </div>
                </div>
                <div className="flex ml-auto text-[#9B7C0D] text-[16px] font-normal gap-4">
                    <div >100</div>
                    <div >%</div>
                </div>
            </div>
                    {
                        elems
                    }
                    

                    {(message && messagestatus === false) && <div className="flex justify-center items-center ml-5 mt-4">
                        <p className={`${messagestatus ? "text-green-400" : "text-red-500"} w-full text-left text-sm`}>{message}</p>
                    </div>}
                    {(message && messagestatus === true) && <div className="flex justify-center items-center ml-24 mt-4 ">
                        <p className={`${messagestatus ? "text-green-400" : "text-red-500"} w-full text-left text-sm`}>{message}</p>
                    </div>}
                    <div className="inline-flex mb-10">
                        <button className="bg-[#FFFEF9] mt-10 ml-12 w-32 h-10 rounded-xl border-2 border-[#CA8DFF] text-[#CA8DFF] font-rubik text-sm hover:bg-[#CA8DFF] hover:text-[#FFFFFF]" onClick={() => { router.push("/workspace_budget") }}>BACK</button>
                        <button className="bg-[#D8B4F8] mt-10 ml-5  w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" onClick={() => { handleSubmit() }}>SET NOW</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
