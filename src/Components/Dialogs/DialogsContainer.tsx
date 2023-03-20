import React from 'react';
import {InitialStateType, sendMessageAC, updateNewMessageTextAC} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStatePropsType = {
    dialogsPage: InitialStateType
}

type mapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessage: (newMessageText: string) => void
}
export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessage: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText))
        }
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

