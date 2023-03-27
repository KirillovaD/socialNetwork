import React from 'react';
import {Header} from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/authReducer";



class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <>
            {/*<Preloader isFetching={this.props.isFetching}/>*/}
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
    getAuthUserDataTC:()=>void
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


export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer);

