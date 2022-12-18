import React from 'react';
import logo from "../../assets/images/iconmonstr-3d-lined.svg";
import s from "./Header.module.css";

export const Header = ()=>{
    return(
        <header className={s.header}>
            <img src={logo} alt="logo"/>
        </header>
    )
}

