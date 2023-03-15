import React from 'react';
import {Header} from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/authReducer";
import Preloader from "../common/Preloader/Preloader";
import {toggleFetching} from "../../redux/usersReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.toggleFetching(true)
        authAPI.getAuth().then((res) => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                    this.props.toggleFetching(false)
                }
            })
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <Header {...this.props}/>
        </>;
    }
}

type mapStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth:boolean

}
export type AuthPropsType = mapStatePropsType & mapDispatchPropsType
type mapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
    toggleFetching: (isFetching: boolean) => void
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuth:state.auth.isAuth
    }
}


export default connect(mapStateToProps, {setAuthUserData, toggleFetching})(HeaderContainer);

