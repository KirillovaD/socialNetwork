import React from 'react';
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {
    store:StoreType
}
export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const state = props.store.getState().dialogsPage

    const addMessageHandler = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (newMessageText:string)=>{
        props.store.dispatch(updateNewMessageTextAC(newMessageText))

    }
    return (<Dialogs dialogsPage={state} sendMessage={addMessageHandler} updateNewMessage={onNewMessageChange}/>);
};
