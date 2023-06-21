import {getAuthUserDataTC} from "./auth-reducer";
import {AppStateType} from "./store";
import {ThunkAction} from "redux-thunk";

const initialState: InitialStateType = {
    initialized: false,
    error: null as null|string
}
export const appReducer = (state: InitialStateType = initialState, action: AppACType): InitialStateType => {
    switch (action.type) {
        case "app/INITIALIZED_SUCCESS":
            return {...state,  initialized: true}
        case 'app/SET-ERROR':
            return {...state,error: action.error}
        default:
            return state
    }
}


//actions
export const setInitializedSuccessAC = () => ({type: "app/INITIALIZED_SUCCESS"} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'app/SET-ERROR', error} as const)

//thunks

export const initializeAppTC = ():ThunkAction<void, AppStateType, unknown, AppACType> => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise])
        .then(()=>{
            dispatch(setInitializedSuccessAC())
        })

}

//types
type InitialStateType = {
    initialized: boolean
    error: string | null
}
export type AppACType = ReturnType<typeof setInitializedSuccessAC>
    |ReturnType<typeof setAppErrorAC>

