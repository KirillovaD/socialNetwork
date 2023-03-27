import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageReduxForm, MessageDataType} from "./AddMessageForm/AddMessageForm";


const Dialogs = (props: DialogsPropsType) => {
    const state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values:MessageDataType) => {
        props.sendMessage(values.message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>

        </div>
    );
};

export default Dialogs;


