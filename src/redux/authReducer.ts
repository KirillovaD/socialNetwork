import {authAPI, AuthUserType} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}
export const authReducer = (state: InitialStateType = initialState, action: AuthACType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data, isAuth: true}
        case 'SET-IS-AUTH':
            return {...state, isAuth: action.value}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state

    }
}


//actions
export const setAuthUserData = (id:null| number, email: null|string, login: null|string) => {
    return {
        type: "SET_USER_DATA",
        data: {id, email, login}
    } as const
}

export const setIsAuthAC = (value: boolean) =>
    ({type: 'SET-IS-AUTH', value} as const)


export const toggleFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
//thunks
export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    return authAPI.me().then((res) => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setAuthUserData(id, email, login))
            dispatch(toggleFetching(false))
        }
    })
}

export const loginTC = (email:string, password:string, rememberMe:boolean) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    authAPI.login(email, password, rememberMe).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(toggleFetching(false))
            dispatch(setIsAuthAC(true))

        } else {
            let message = res.data.messages.length ? res.data.messages[0]: 'Some error'
            dispatch(stopSubmit('login', {_error:message}))
        }
    }).finally(()=>{
        dispatch(toggleFetching(false))
    })

}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    authAPI.logout().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(toggleFetching(false))
            dispatch(setIsAuthAC(false))
        }
    })
}

//types
type ExtraDataForAuth = {
    isFetching: boolean
    isAuth: boolean

}

type InitialStateType = AuthUserType & ExtraDataForAuth
export type AuthACType = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setIsAuthAC>
    | ReturnType<typeof toggleFetching>
