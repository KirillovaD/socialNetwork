import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Button, ConfigProvider} from "antd";


ReactDOM.render(
    <BrowserRouter>
        <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#4193ff',
                  borderRadius:3,
                  colorInfo:'#4193ff',
                  colorTextBase:'#0a182a',
                  fontFamily:'Lato',
              },
            components:{
                Button:{
                  fontFamily:'Lato, 700'
                }
            }
          }}
        >
        <Provider store={store}>
            <App/>
        </Provider>
        </ConfigProvider>
    </BrowserRouter>,
    document.getElementById('root')
);


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



