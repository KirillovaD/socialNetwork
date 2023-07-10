import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {AppStateType} from "./redux/store";
import LoginFormik from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer'))
const Music = React.lazy(()=>import('./components/Music/Music'))
const Settings = React.lazy(()=>import('./components/Settings/Settings'))
const News= React.lazy(()=>import('./components/News/News'))



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
                        <Route render={withSuspense(DialogsContainer)} path='/dialogs'/>
                        <Route render={() => <ProfileContainer/>} path='/profile/:userId?'/>
                        <Route render={() => <UsersContainer pageTitle={"Самурай"}/>} path='/users'/>
                        <Route render={withSuspense(News)} path='/news'/>
                        <Route render={withSuspense(Music)} path='/music'/>
                        <Route render={withSuspense(Settings)} path='/settings'/>
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
