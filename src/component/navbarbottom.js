import React, {useState} from "react";
import Home from '../../public/images/navbar_homeicon.png'
import Workspace from '../../public/images/navbar_workspace.png'
import Setting from '../../public/images/settings.png'
import Link from 'next/link';
import Image from "next/image";


export default function Navbarbottom(){

    const navbarStyles_bottom = {
        position: 'absolute',
        width: '100%', 
        height: '45px',
        background: 'rgba(216, 180, 248, 0.25)',
        boxShadow: '0px -2px 5px 2px rgba(217, 217, 217, 0.24)',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'rgba(216, 180, 248, 0.25)' ,
        padding: '0 80px'
      };
    
      const iconStyles = {
        width: '30px',
        height: '30px',
        flexShrink: 0,
        display: 'flex',
        margin: '0 10px'
      };

    return(
        <nav style={navbarStyles_bottom} className="inline-felx">
            <Link href={"/private"}>
                <div style={iconStyles}>
                    <Image src={Home} alt="Home" className="items-center "/>
                </div>
            </Link>
            <Link href={"/workspace"}>
                <div style={iconStyles}>
                    <Image src={Workspace} alt="Workspace" />
                </div>
            </Link>
            <Link href={"/account"} className="mr-14">     
                <div style={iconStyles}>
                    <Image src={Setting} alt="Settings" className="items-center mr-14"/>
                </div>
            </Link>
        </nav>
    )
}