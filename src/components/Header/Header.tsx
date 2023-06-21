import React from 'react';
import logo from "../../assets/images/iconmonstr-3d-lined.svg";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutTC:()=>void
}
export const Header = (props: HeaderPropsType)=>{
    return(
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                <button onClick={props.logoutTC}>Log out</button>
                </div>
                    : <NavLink to={'/login'}>Log in</NavLink>}
            </div>
        </header>
    )
}

