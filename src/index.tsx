import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {store} from "./redux/redux-store";
import StoreContext from "./redux/StoreContext";
import {RootStateType} from "./redux/store";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string

}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state)
})
