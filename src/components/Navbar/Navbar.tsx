import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


export const Navbar = ()=>{
    return(
        <nav className={s.nav}>
            <NavLink to="/profile" >Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    )
}

