import React from 'react';
import {InitialStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type mapStatePropsType = {
    dialogsPage: InitialStateType
}

export type DialogsPropsType = mapStatePropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs)

