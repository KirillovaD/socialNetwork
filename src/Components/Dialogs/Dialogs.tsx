import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";



const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

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
