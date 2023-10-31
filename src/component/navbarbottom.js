import React, {useState,useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Navbarbottom(){

    const [activeItemAccount, setActiveItemAccount] = useState('black');
    const [activeItemWorkspace, setActiveItemWorkspace] = useState('black');
    const [activeItemSetting, setActiveItemSetting] = useState('black');
    const router = useRouter();
    const currentPath = router.asPath;
    console.log(currentPath);

    useEffect(() => {
        if(currentPath === "/account"){
            setActiveItemAccount('#9747FF')
            setActiveItemWorkspace('black')
            setActiveItemSetting('black')
        }else if(currentPath === "/workspace"){
            setActiveItemWorkspace('#9747FF')
            setActiveItemAccount('black')
            setActiveItemSetting('black')
        }else if(currentPath === "/setting"){
            setActiveItemSetting('#9747FF')
            setActiveItemAccount('black')
            setActiveItemWorkspace('black')
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
        padding: '0 80px'
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
            <Link href={"/account"}>
                <div 
                style={iconStyles}
                onClick={() => setActiveItemAccount("account")}
                data-item="account"
                title="account">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 26 26" 
                stroke-width="1.5" 
                stroke={activeItemAccount}
                class="w-8 h-8">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                </div>
            </Link>
            <Link href={"/workspace"}>
                <div
                style={iconStyles}
                onClick={() => setActiveItemWorkspace("workspace")}
                data-item="workspace"
                title="workspace">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 26 26" 
                stroke-width="1.5" 
                stroke={activeItemWorkspace}
                class="w-8 h-8">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>

                </div>
            </Link>
            <Link href={"/setting"} className="mr-14">     
                <div 
                style={iconStyles}
                onClick={() => setActiveItemSetting("setting")}
                data-item="setting"
                title="setting">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 26 26" 
                stroke-width="1.5" 
                stroke={activeItemSetting}
                class="w-8 h-8">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </div>
            </Link>
        </nav>
    )
}