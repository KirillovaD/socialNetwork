import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {sidebarReducer} from "./sidebar-reducer";
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


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
export const useAppDispatch = () => useDispatch<ThunkDispatchType>();


export type AppStateType = ReturnType<typeof rootReducer>
export type ThunkDispatchType = ThunkDispatch<AppStateType, any, AnyAction>


// @ts-ignore
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.store = store;
// console.log(store.getState())//состояние нашего стора

//подписка на изменения данных в сторе
// store.subscribe(()=>{
//     console.log('subscribe',store.getState())
// })
