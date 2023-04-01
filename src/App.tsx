import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer, {AuthPropsType} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserDataTC, logoutTC} from "./redux/authReducer";
import {initializeAppTC} from "./redux/appReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeAppTC()

    }

    render() {
        if(!this.props.initialized){
            return <Preloader isFetching={true}/>
        }
        return (
                <div className="wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route render={() => <Login/>} path='/login'/>
                        <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                        <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                        <Route render={() => <UsersContainer/>} path='/users'/>
                        <Route render={() => <News/>} path='/news'/>
                        <Route render={() => <Music/>} path='/music'/>
                        <Route render={() => <Settings/>} path='/settings'/>
                    </div>

                </div>

        );
    }
}


const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})) (App);

//types
export type AppPropsType = mapDispatchPropsType & mapStatePropsType
type mapDispatchPropsType = {
    initializeAppTC:()=>void
}
type mapStatePropsType = {
    initialized: boolean
}
