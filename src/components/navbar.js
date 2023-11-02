import React, {useState} from "react";
import Link from 'next/link';
import Image from "next/image";
import noti from '../../public/images/noti.svg'
import user from '../../public/images/user.png'
import logo2 from '../../public/images/logo2.png'



export default function Navbar  (){

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
            <Link href={"/"} className="">     
                <div>
                    <Image src={user} alt="user" width={50} className=" ml-5 mr-5"/>
                </div>
            </Link>
            </div>
        </nav>
    )
}