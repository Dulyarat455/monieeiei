import React from "react";
import { Rubik } from 'next/font/google'
export default function template ({children}){
    return
    <>
    <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}></div>
    {children}
    </>
}