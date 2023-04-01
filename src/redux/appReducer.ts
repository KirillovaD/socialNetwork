
import {getAuthUserDataTC} from "./authReducer";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";



const initialState: InitialStateType = {
    initialized: false
}
export const appReducer = (state: InitialStateType = initialState, action: AppACType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state,  initialized: true}
        default:
            return state

    }
}


//actions
export const setInitializedSuccessAC = () => {
    return {
        type: "INITIALIZED_SUCCESS",
    } as const
}


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
}
export type AppACType = ReturnType<typeof setInitializedSuccessAC>

