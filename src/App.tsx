import React from 'react';
import './App.css';

import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                        <Route render={()=><DialogsContainer />} path='/dialogs/*'/>
                        <Route render={()=><ProfileContainer />} path='/profile' />
                        <Route render={()=><UsersContainer/>} path='/users' />
                        <Route render={()=><News />} path='/news' />
                        <Route render={()=><Music />} path='/music' />
                        <Route render={()=><Settings />} path='/settings' />
                </div>

            </div>
        </BrowserRouter>




    );
}


export default App;
