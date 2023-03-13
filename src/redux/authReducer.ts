type ExtraDataForAuth = {
    isFetching: boolean
    isAuth: boolean

}

type UserAuthData = {
    userId: number | null
    email: string | null
    login: string | null
}

type InitialStateType = UserAuthData & ExtraDataForAuth

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false
}
export const authReducer = (state: InitialStateType = initialState, action: AuthACType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data, isAuth: true}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state

    }

}

export type AuthACType = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFetching>


export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: "SET_USER_DATA",
        data: {userId, email, login}
    } as const
}
export const toggleFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}

