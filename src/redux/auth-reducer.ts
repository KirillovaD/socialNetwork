import {authAPI} from "../api/api";
import {AnyAction, Dispatch} from "redux";

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {setAppErrorAC} from "./app-reducer";


const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}
export const authReducer = (state: InitialStateType = initialState, action: AuthACType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data}
        // case 'SET-IS-AUTH':
        //     return {...state, isAuth: action.value}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state

    }
}


//actions
export const setAuthUserData = (userId: number |null, email: string|null, login: string|null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        data: {userId, email, login, isAuth}
    } as const
}

// export const setIsAuthAC = (value: boolean) =>
//     ({type: 'SET-IS-AUTH', value} as const)


export const toggleFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
//thunks
export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleFetching(false))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, AnyAction> => async (dispatch) => {
    dispatch(toggleFetching(true))
    try {
        let res = await authAPI.login(email, password, rememberMe)
        dispatch(toggleFetching(false))
        // dispatch(setIsAuthAC(true))
        // dispatch(getUserProfile((res.data.data.userId)))
        dispatch(getAuthUserDataTC())
        if (res.data.messages.length){
            dispatch(setAppErrorAC(res.data.messages[0]))
        }

    } catch (err) {
        console.warn(err)

    } finally {
        dispatch(toggleFetching(false))
    }

}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    authAPI.logout().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(toggleFetching(false))
            dispatch(setAuthUserData(null,null,null,false))
        }
    })
}

//types
type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean

}


export type AuthACType = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFetching>
