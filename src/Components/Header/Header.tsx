import React from 'react';
import logo from "../../assets/images/iconmonstr-3d-lined.svg";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    login: string | null
    isAuth: boolean
}
export const Header = (props: HeaderPropsType)=>{
    return(
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props. login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

