import React from "react";
import { Rubik } from 'next/font/google'
import Image from "next/image";
import Launchimage from '../../public/images/launchpage.jpg'
import Uracha from '../../public/images/uracha.jpg'
import Nichapat from '../../public/images/Nichapat.jpg'
import Navbar from "../components/navbar";
const inter = Rubik({ subsets: ['latin'],weight:['400'] })


export default function Launchpage() {
    return(

        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
            <div className="justify-center items-center flex flex-col h-full">
                <Navbar/>
                <div style={{width:'100%', padding:'0 30px'}} className="flex flex-col justify-center items-center">
                    <Image alt="Launchimage" src={Launchimage} className="mt-4"></Image>  
                    <div className="w-full text-purple-300 text-rubik font-normal mt-2">
                        <span style={{fontSize:'44px'}}>Manage</span>
                        <span style={{fontSize:'32px'}} className="ml-4">Your</span>
                        <span style={{fontSize:'54px'}} className="flex">Finances</span>
                        <span style={{fontSize:'44px'}} >Easily</span>
                        <span style={{fontSize:'32px'}} className="ml-4">with</span>
                        <span style={{fontSize:'54px'}} className="flex">MONIE EIEI</span>
                    </div>
                    <div className="w-full mt-2 text-neutral-400 text-base font-normal font-['Rubik'] leading-relaxed">This expense tracker app will help you and your friend control your spending and saving in one place.</div>
                    <button  type="submit" className=" h-[49px] mt-6 p-2 pl-6 pr-5 bg-[#D8B4F8] text-white rounded-lg hover:bg-[#CA8DFF] uppercase">Let’s Explore</button>
                    <div className="mt-16 text-purple-300 text-[32px] font-medium font-['Rubik']">Our Team Member</div>
                    <div className="justify-center items-center flex flex-col text-center mt-4">
                        <span className="text-black text-base font-normal font-['Rubik']">Nichapat Peasri</span>
                        <span className="text-black text-base font-normal font-['Rubik']">-</span>
                        <span className="text-purple-300 text-base font-normal font-['Rubik']">Design</span>
                        <div className="mt-2 w-40 h-40 bg-zinc-300 rounded-full relative" >
                            <Image alt="Nichapat" src={Nichapat} className="absolute w-full h-full rounded-full object-cover"></Image>
                        </div>
                    </div>
                    <div className="justify-center items-center flex flex-col text-center mt-4">
                        <span className="text-black text-base font-normal font-['Rubik']">Uracha Rittikulsittichai</span>
                        <span className="text-black text-base font-normal font-['Rubik']">-</span>
                        <span className="text-purple-300 text-base font-normal font-['Rubik']">Frontend</span>
                        <div className="mt-2 w-40 h-40 bg-zinc-300 rounded-full relative" >
                            <Image alt="Uracha" src={Uracha} className="absolute w-full h-full rounded-full object-cover"></Image>
                        </div>
                    </div>
                    <div className="justify-center items-center flex flex-col text-center mt-4">
                        <span className="text-black text-base font-normal font-['Rubik']">Dulyarat Tovijit</span>
                        <span className="text-black text-base font-normal font-['Rubik']">-</span>
                        <span className="text-purple-300 text-base font-normal font-['Rubik']">Backend</span>
                        <div className="mt-2 w-40 h-40 bg-zinc-300 rounded-full" >
                            
                        </div>
                    </div>
                    <div className="justify-center items-center flex flex-col text-center mt-4 mb-8">
                        <span className="text-black text-base font-normal font-['Rubik']">Nithikon Komonsutthi</span>
                        <span className="text-black text-base font-normal font-['Rubik']">-</span>
                        <span className="text-purple-300 text-base font-normal font-['Rubik']">Frontend</span>
                        <div className="mt-2 w-40 h-40 bg-zinc-300 rounded-full" >
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}