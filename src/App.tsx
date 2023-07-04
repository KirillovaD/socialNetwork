import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {AppStateType} from "./redux/store";
import LoginFormik from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";


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
                        <Route render={() => <LoginFormik/>} path='/login'/>
                        <Route render={() => <DialogsContainer/>} path='/dialogs'/>
                        <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                        <Route render={() => <UsersContainer pageTitle={"Самурай"}/>} path='/users'/>
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
