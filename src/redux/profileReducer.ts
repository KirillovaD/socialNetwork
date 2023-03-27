import {v1} from "uuid";
import {ProfileType} from "../Components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {toggleFetching} from "./authReducer";


const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 5},
        {id: v1(), message: "It's my first post", likesCount: 1},
        {id: v1(), message: "Blabla", likesCount: 0}

    ] as Array<PostPropsType>,
    profile: {
        fullName: "Daria",
        userId: 11111
    },
    status: ""

}

export const profileReducer = (state: InitialState = initialState, action: ProfileActionsType): InitialState => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {id: v1(), message: action.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost]

            }

        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: {...action.profile}
            }
        case "SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}


//actions
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}

//thunks

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(toggleFetching(false))
        dispatch(setUserProfile(data))
    })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    profileAPI.getStatus(userId).then(data => {
        dispatch(toggleFetching(false))
        dispatch(setUserStatus(data))
    })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleFetching(false))
            dispatch(setUserStatus(status))
        }

    })
}
//types
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}

export type InitialState = typeof initialState

export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
