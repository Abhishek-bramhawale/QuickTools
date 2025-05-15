import React, {useState, useEffect} from "react";

import { Menu, Sun,Moon } from "lucide-react";

export default function Header(){

   const[dark, setDark]= useState(false);
   useEffect(()=>{
    document.body.className=dark? "dark-theme":"light-theme";
   },[dark]);
    return (
        <>
          <nav id="nav">
            <Menu id="treeicon" />
            <h1 id="logo">QuickTools</h1>
            <input id="searchbar" type="text" placeholder="search for tools.."></input>
            <button id="themebtn" onClick={()=>setDark(!dark)} style={{all:'unset', cursor:'pointer'}}>
                {dark? <Sun size={24} color="orange"/>: <Moon size={24} color="black"/>}
            </button>

          </nav>
        </>
    )
}