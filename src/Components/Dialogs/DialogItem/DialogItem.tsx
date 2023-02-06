import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemPropsType) => {
    const {name, id} = props
    let dialogPath = `/dialogs/${id}`
    return (
        <NavLink to={dialogPath} className={({isActive}) => isActive ? `${s.active}` : ''}>{name}</NavLink>
    )
}