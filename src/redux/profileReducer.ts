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
    newPostText: "",
    profile: {
        fullName: "Daria",
        userId: 11111,
    }
}

export const profileReducer = (state: InitialState = initialState, action: ProfileActionsType): InitialState => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostPropsType = {id: v1(), message: state.newPostText, likesCount: 0};
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]

            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile:action.profile
            }

        default:
            return state
    }
}


//actions
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

//thunks

export const getUserProfile =(userId: string)=> (dispatch:Dispatch) => {
    dispatch(toggleFetching(true))
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(toggleFetching(false))
        dispatch(setUserProfile(data))
    })
}

//types
export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}

export type InitialState = typeof initialState

export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
