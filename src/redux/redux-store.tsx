import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {usersReducer} from "./usersReducer";
import {sidebarReducer} from "./sidebarReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'



export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.store = store;
// console.log(store.getState())//состояние нашего стора

//подписка на изменения данных в сторе
// store.subscribe(()=>{
//     console.log('subscribe',store.getState())
// })
