import s from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
    const {message} = props
    return (
        <div className={s.message}>{message}</div>
    )
}