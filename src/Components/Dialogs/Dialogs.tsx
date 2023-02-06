import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, DialogType, MessageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogPageType
}
const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

let newMessageElement= React.createRef<HTMLTextAreaElement>()
    const addMessageHandler = () => {
        alert(newMessageElement.current?.value)
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
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessageHandler}>Add message</button>
            </div>

        </div>
    );
};

export default Dialogs;