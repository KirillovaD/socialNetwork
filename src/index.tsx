import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {store} from "./redux/redux-store";
import {Provider} from "react-redux";

const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
            <App store={store}/>,
        document.getElementById('root')
    );
}

export type PostPropsType = {
    id: number
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
