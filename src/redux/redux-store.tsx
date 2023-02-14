import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {usersReducer} from "./userReducer";
import {sidebarReducer} from "./sidebarReducer";
import {StoreType} from "./store";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store: StoreType = legacy_createStore(rootReducer)
// @ts-ignore
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
window.store = store;