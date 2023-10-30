import React, {useState} from "react";
import Link from 'next/link';
import Image from "next/image";
import noti from '../../public/images/noti.svg'
import user from '../../public/images/user.png'
import logo2 from '../../public/images/logo2.png'



export default function Navbar  (){

    return(
        <nav>
          <div className="inline-flex mt-3">
            <Link href={"/private"}>
                <div>
                    <Image src={logo2} alt="logo2" width={70} className="ml-5"/>
                </div>
            </Link>
            <Link href={"/workspace"}>
                <div>
                    <Image src={noti} alt="noti" width={30} className="mt-5 ml-40"/>
                </div>
            </Link>
            <Link href={"/account"} className="">     
                <div>
                    <Image src={user} alt="user" width={70} className=" ml-5 mr-5"/>
                </div>
            </Link>
            </div>
        </nav>
    )
}