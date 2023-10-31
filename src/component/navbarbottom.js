import React, {useState,useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Navbarbottom(){

    const [activeItemPrivate, setActiveItemPrivate] = useState('black');
    const [activeItemWorkspace, setActiveItemWorkspace] = useState('black');
    const [activeItemAccount, setActiveItemAccount] = useState('black');
    const router = useRouter();
    const currentPath = router.asPath;
    console.log(currentPath);

    useEffect(() => {
        if(currentPath === "/private"){
            setActiveItemPrivate('#9747FF')
            setActiveItemWorkspace('black')
            setActiveItemAccount('black')
        }else if(currentPath === "/workspace"){
            setActiveItemWorkspace('#9747FF')
            setActiveItemPrivate('black')
            setActiveItemAccount('black')
        }else if(currentPath === "/account"){
            setActiveItemAccount('#9747FF')
            setActiveItemPrivate('black')
            setActiveItemWorkspace('black')
        }
    }, []);

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
        width: '28px',
        height: '28px',
        flexShrink: 0,
        display: 'flex',
        margin: '0 10px',
      };

      const svgActiveColor = "#9747FF";
      const svgDefaultColor = "black";      
    
    return(
        <nav style={navbarStyles_bottom} className="inline-felx">
            <Link href={"/private"}>
                <div 
                style={iconStyles}
                onClick={() => setActiveItemPrivate("private")}
                data-item="private"
                title="private">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 26 26" 
                stroke-width="1.5" 
                stroke={activeItemPrivate}
                class="w-6 h-6">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
                class="w-6 h-6">
                    <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>

                </div>
            </Link>
            <Link href={"/account"} className="mr-14">     
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
                class="w-6 h-6">
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