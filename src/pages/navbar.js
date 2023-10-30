// components/Navbar.js
import Link from 'next/link';
import Image from "next/image";
import logo2 from  '../../public/images/logo2.png'
import noti from  '../../public/images/noti.svg'
import avatar1 from  '../../public/images/avatar1.svg'

const Navbar = () => {
  return (
    <nav className='mt-5 ml-5 inline-flex'> 
    <div>
    <a>
    <Image alt="logo2" src={logo2} className="w-12 mt-4"></Image> 
    </a>
    </div>
    <div className=' ml-44 mt-7'>
    <a>
    <Image alt="noti" src={noti} className=""></Image> 
    </a>
    </div>
    <a>
    <div className='mt-4 ml-3'><Image alt="avatar1" src={avatar1} className=" w-11 h-11"></Image> </div>
    </a>  
    </nav>
  );
};

export default Navbar;
