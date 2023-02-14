import React from 'react';
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../redux/StoreContext';


//
// type DialogsContainerPropsType = {
//     store:StoreType
// }
export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store: StoreType) => {
                const state = store.getState().dialogsPage

                const addMessageHandler = () => {
                    store.dispatch(sendMessageAC())
                }
                const onNewMessageChange = (newMessageText: string) => {
                    store.dispatch(updateNewMessageTextAC(newMessageText))

                }
                return <Dialogs dialogsPage={state}
                                sendMessage={addMessageHandler}
                                updateNewMessage={onNewMessageChange}/>
            }
            }
        </StoreContext.Consumer>
    )
};
