import React from "react";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
import upload from  '../../public/images/upload.svg'
import date from  '../../public/images/date.svg'
import Link from 'next/link';
const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function dailyexpense(){

    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div class=" w-[25rem] h-full bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 text-[32px] font-[500] ml-20">Daily Expense</div>
            <Link href="https://www.youtube.com/watch?v=nlPYear59oQ">
            <Image alt="Icon" src={Icon} className="ml-10 mt-12"></Image> 
            </Link>
            </div>
            <div className=" text-[400] text-[#9B7C0D] text-[20px] ml-24">10 Oct 2023 8.35pm</div> {/*ใส่วันที่*/}
            <div className=" mt-14"></div>
            <form>
            <label htmlFor="name" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400] ">NAME</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30  bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal text-[#9B7C0D] text-[12px] font-[400]" 
        placeholder="Ex. Taxi fee (Supermarket)" 
        type="text" 
        id="name"
        name="name"
        required
         /><br></br>
          <label htmlFor="type" className=" ml-14 text-[#9B7C0D]  mt-2 text-[12px] font-[400]">TYPE OF TRANSACTION</label><br></br>
        <div className=" inline-flex mt-2  ml-10">
        <input className="ml-10"
        type="radio" 
        id="expense"
        name="typeoftran"
        value="expense"
         />
         <label className="text-[#9B7C0D] text-[12px] font-[400] mt-1 ml-2" for="expense">EXPENSE</label><br></br>
          <input className="ml-5 "
        type="radio" 
        id="income"
        name="typeoftran"
        value="income"
         /><label  className="text-[#9B7C0D] text-[12px] font-[400] mt-1 ml-2" for="income">INCOME</label><br></br>
         </div>
         <div className="mt-2">
         <label htmlFor="category" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">CATEGORY OF EXPENSE</label><br></br>
         <select name="category" id="category" className="text-[#9B7C0D] text-[14px] font-[400]  ml-14 pl-4 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]">
        <option className="ml-5" value="" disabled selected>Select category</option>
        <option value="food">Food</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="transport">Transport</option>
        <option value="housing">Housing</option>
        <option value="personal">Personal</option>
        <option value="medical">Medical/Healthcare</option>
        <option value="education">Education</option>
        <option value="technlogy">Technlogy</option>
        <option value="saving">Saving</option>
        <option value="membership">Membership</option>
      </select></div>
     <div className="mt-2">
      <label htmlFor="category" className=" ml-14 text-[#9B7C0D]  text-[12px] font-[400]">POCKET</label><br></br>
         <select name="category" id="category" className="text-[#9B7C0D] text-[14px] font-[400]  ml-14 pl-4 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]">
        <option className="ml-5" value="" disabled selected>Select pocket</option>
        <option value="kbank">Kbank</option>
        <option value="ktb">KTB</option>
        <option value="bbl">BBL</option>
        <option value="krungsri">Krungsri</option>
        <option value="scb">SCB</option>
        <option value="ttb">ttb</option>
        <option value="uob">UOB</option>
        <option value="gsb">GSB</option>
        <option value="kkp">KKP</option>
        <option value="baac">BAAC</option>
        <option value="tisco">Tisco</option>
        <option value="lhbank">LH Bank</option>
        <option value="cash">Cash wallet</option>
     </select><br></br></div>
    <div className="mt-2">
     <label htmlFor="total" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">TOTAL</label><br></br>
        <input className="ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] text-[#9B7C0D] text-[12px] font-[400]  placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal placeholder:pl-48" 
        type="text" 
        id="total"
        name="total"
        placeholder="THB"
        required
         />
      </div>
      <div className="mt-2">
        <label htmlFor="a" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">ATTACH A PHOTO</label><br></br>
        <div className="inline-flex">
        <div className="rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] w-[16rem]  ml-14 h-10"></div>
        <label htmlFor="picture" className="z-1"><Image alt="upload" src={upload} className="mt-3 ml-2 mr-24"></Image></label><br></br></div>
        <input className="mb-5 text-[#9B7C0D] text-[12px] font-[400] invisible hidden " 
        type="file"      
        id="picture"
        name="picture"
        required
         />
       </div>
       <div className="mt-2">
        <label htmlFor="a" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">SET A DATE MANUALLY</label><br></br>
        <div className="inline-flex">
        <div className="rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] w-[16rem]  ml-14 h-10"></div>
        <label htmlFor="dob" className="z-1"><Image alt="date" src={date} className="mt-3 ml-2 mr-24"></Image></label><br></br></div>
        <input className="mb-5 text-[#9B7C0D] text-[12px] font-[400] invisible hidden " 
        type="date"      
        id="dob"
        name="dob"
        required
         />
       </div>
       <div className="mt-2">
      <label htmlFor="category" className=" ml-14 text-[#9B7C0D]  text-[12px] font-[400]">SEND A REQUEST MONEY TO</label><br></br>
         <select name="category" id="category" className="text-[#9B7C0D] text-[14px] font-[400]  ml-14 pl-4 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]">
        <option className="ml-5" value="" disabled selected>Select member</option>
        <option value="mem1">Member1</option>
        <option value="mem2">Member2</option>
        <option value="mem3">Member3</option>
        <option value="mem4">Member4</option>
        <option value="mem5">Member5</option>
     </select><br></br></div>
        </form>
        <div className="inline-flex">
        <button className="bg-[#FFFEF9] mt-10 ml-12 w-32 h-10 rounded-xl text-[#CA8DFF] font-rubik text-sm hover:bg-[#CA8DFF] hover:text-[#FFFFFF]">BACK</button>
        <button className="bg-[#D8B4F8] mt-10 ml-5 mb-10 w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">ADD NOW</button>
        </div>
        </div>
        </div>
        </div>
    )
}
