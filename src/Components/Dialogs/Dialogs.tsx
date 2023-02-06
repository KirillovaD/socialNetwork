import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogPageType,
    DialogType,
    MessageType,
    sendMessageAC,
    updateNewMessageTextAC
} from "../../redux/state";


type DialogsPropsType = {
    state: DialogPageType
    newMessageText:string
    dispatch:(action:ActionsType)=>void
}
const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    const addMessageHandler = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessageText= e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(newMessageText))

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
                <textarea placeholder={'Enter your message'} value={props.newMessageText} onChange={onNewMessageChange}></textarea>
                <button onClick={addMessageHandler}>Add message</button>
            </div>

        </div>
    );
};

export default Dialogs;