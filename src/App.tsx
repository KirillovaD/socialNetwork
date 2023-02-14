import React from 'react';
import './App.css';

import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";



type AppPropsType = {
    store:StoreType
}
const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route element={<DialogsContainer store={props.store}/>} path='/dialogs/*'/>
                        <Route element={<Profile store={props.store} />} path='/profile' />
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
