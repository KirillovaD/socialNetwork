import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";
import {toggleFetching} from "./auth-reducer";
import {PostPropsType, ProfileType} from "types/types";


const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 5},
        {id: v1(), message: "It's my first post", likesCount: 1},
        {id: v1(), message: "Blabla", likesCount: 0}

    ] as Array<PostPropsType>,
    profile: null as ProfileType | null,
    status: ""

}

export const profileReducer = (state: InitialState = initialState, action: ProfileActionsType): InitialState => {
    switch (action.type) {
        case "profile/ADD-POST":
            const newPost: PostPropsType = {id: v1(), message: action.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost]

            }
        case "profile/DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(p=> p.id !== action.postId)

            }
        case "profile/SET-USER-PROFILE":
            return {
                ...state,
                profile: {...action.profile}
            }
        case "profile/SET-USER-STATUS":
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
        type: "profile/ADD-POST",
        newPostText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "profile/SET-USER-PROFILE",
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "profile/SET-USER-STATUS",
        status
    } as const
}

export const deletePost = (postId: string) => {
    return {
        type: "profile/DELETE-POST",
        postId
    } as const
}


//thunks

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    let res = await profileAPI.getUserProfile(userId)
        dispatch(toggleFetching(false))
        dispatch(setUserProfile(res))
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    let res = await profileAPI.getStatus(userId)
        dispatch(toggleFetching(false))
        dispatch(setUserStatus(res))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    dispatch(toggleFetching(true))
    try {
        let res = await profileAPI.updateStatus(status)
            if (res.resultCode === 0) {
                dispatch(toggleFetching(false))
                dispatch(setUserStatus(status))
            }
        }
    catch (err){
        console.log(err)
    }
}
//types


export type InitialState = typeof initialState

export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
