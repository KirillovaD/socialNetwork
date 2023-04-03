import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./usersReducer";
import {sidebarReducer} from "./sidebarReducer";
import { authReducer} from "./auth-reducer";
import thunkMiddleware, { ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {useDispatch} from "react-redux";




export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type ThunkDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>();



// @ts-ignore
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.store = store;
// console.log(store.getState())//состояние нашего стора

//подписка на изменения данных в сторе
// store.subscribe(()=>{
//     console.log('subscribe',store.getState())
// })
