import React, {useState,useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Navbarbottom(){

    const [activeItemAccount, setActiveItemAccount] = useState('black');
    const [activeItemWorkspace, setActiveItemWorkspace] = useState('black');
    const router = useRouter();
    const currentPath = router.asPath;
    console.log(currentPath);

    useEffect(() => {
        if(currentPath === "/account"){
            setActiveItemAccount('#9747FF')
            setActiveItemWorkspace('black')
        }else if(currentPath === "/workspace"){
            setActiveItemWorkspace('#9747FF')
            setActiveItemAccount('black')
        }else if(currentPath === "/workspace_dailyexpense"){
            setActiveItemWorkspace('#9747FF')
            setActiveItemAccount('black')
        }else if(currentPath === "/setting"){
            setActiveItemWorkspace('#9747FF')
            setActiveItemAccount('black')
        }else if(currentPath === "/workspace_budget"){
            setActiveItemAccount('#9747FF')
            setActiveItemWorkspace('black')
        }else if(currentPath === "/workspace_summary"){
            setActiveItemWorkspace('#9747FF')
            setActiveItemAccount('black')
        }
    }, [currentPath]);

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
        padding: '0 80px',
      };
    
      const iconStyles = {
        width: '40px',
        height: '40px',
        flexShrink: 0,
        display: 'flex',
        margin: '0 10px',
        alignItems: 'center',
        justifyContent: 'center',
      };    
    
    return(
        <nav style={navbarStyles_bottom} className="inline-felx">
            <Link href={"/workspace"}>
                <div
                style={iconStyles}
                //onClick={() => setActiveItemWorkspace("workspace")}
                data-item="workspace"
                title="workspace">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 26 26" 
                strokeWidth="1.5" 
                stroke={activeItemWorkspace}
                className="w-8 h-8">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>

                </div>
            </Link>
            <Link href={"/account"}>
                <div 
                style={iconStyles}
                //onClick={() => setActiveItemAccount("account")}
                data-item="account"
                title="account">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 26 26" 
                strokeWidth="1.5" 
                stroke={activeItemAccount}
                className="w-8 h-8">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                </div>
            </Link>
        </nav>
    )
}