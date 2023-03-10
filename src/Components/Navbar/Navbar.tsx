import React from 'react';
import s from "./Navbar.module.css"
import {Link} from "react-router-dom";


export const Navbar = ()=>{
    return(
        <nav className={s.nav}>
            <Link to="/profile" >Profile</Link>
            <Link to="/dialogs">Messages</Link>
            <Link to="/users">Users</Link>
            <Link to="/news">News</Link>
            <Link to="/music">Music</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    )
}

