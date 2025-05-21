import React, { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";

export default function Header({ onSearch }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
  }, [dark]);

  return (
    <nav id="nav">
      <Menu id="treeicon" />
      <h1 id="logo">QuickTools</h1>
      <input
        id="searchbar"
        type="text"
        placeholder="Search for tools.."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button
        id="themebtn"
        onClick={() => setDark(!dark)}
        style={{ all: "unset", cursor: "pointer" }}
      >
        {dark ? <Sun size={24} color="orange" /> : <Moon size={24} color="black" />}
      </button>
    </nav>
  );
}
