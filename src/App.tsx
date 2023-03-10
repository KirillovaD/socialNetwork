import React from 'react';
import './App.css';

import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";



const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route element={<DialogsContainer />} path='/dialogs/*'/>
                        <Route element={<Profile />} path='/profile' />
                        <Route element={<UsersContainer/>} path='/users' />
                        <Route element={<News />} path='/news' />
                        <Route element={<Music />} path='/music' />
                        <Route element={<Settings />} path='/settings' />
                    </Routes>

                </div>

            </div>
        </BrowserRouter>




    );
}


export default App;
