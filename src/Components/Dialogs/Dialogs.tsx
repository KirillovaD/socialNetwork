import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsPageType,
} from "../../redux/store";



type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage:()=>void
    updateNewMessage:(newMessageText:string)=>void
}
const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage
    let dialogsElements = state.dialogs.map((d,index) => <DialogItem key={index} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m,index) => <Message key={index} message={m.message}/>)

    const addMessageHandler = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessageText= e.currentTarget.value
        props.updateNewMessage(newMessageText)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder={'Enter your message'} value={state.newMessageText} onChange={onNewMessageChange}></textarea>
                <button onClick={addMessageHandler}>Add message</button>
            </div>

        </div>
    );
};

export default Dialogs;