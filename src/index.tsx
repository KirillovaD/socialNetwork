import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {store} from "./redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} dispatch = {store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
