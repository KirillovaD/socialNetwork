import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {UserType} from "../types/types";


const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false

}
export const usersReducer = (state: InitialStateType = initialState, action: UsersACType): InitialStateType => {
    switch (action.type) {
        case "users/FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "users/UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "users/SET_USERS":
            return {...state, users: action.users}
        case "users/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "users/SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "users/TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "users/TOGGLE_IS_FOLLOWING_IN_PROGRESS":
            return {...state, followingInProgress: action.followingInProgress}
        default:
            return state

    }

}


//actions
export const followSuccess = (userID: number) => {
    return {
        type: "users/FOLLOW",
        userID
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: "users/UNFOLLOW",
        userID
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "users/SET_USERS",
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "users/SET_CURRENT_PAGE",
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "users/SET_TOTAL_USERS_COUNT",
        totalUsersCount
    } as const
}
export const toggleFetching = (isFetching: boolean) => {
    return {
        type: "users/TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const toggleFollowingInProgress = (followingInProgress: boolean) => {
    return {
        type: "users/TOGGLE_IS_FOLLOWING_IN_PROGRESS",
        followingInProgress
    } as const
}

//thunks
export const getUsersTC = (currentPage:number,pageSize:number):ThunkAction<void, AppStateType, unknown, UsersACType> => async (dispatch) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
}


export const follow = (userId:number) => async (dispatch: Dispatch<UsersACType>) =>{
   dispatch(toggleFollowingInProgress(true))
    let res = await usersAPI.followUser(userId)
        if (res.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false))
}
export const unfollow = (userId:number) => async(dispatch: Dispatch<UsersACType>) => {
        dispatch(toggleFollowingInProgress(true))
         let res = await usersAPI.unfollowUser(userId)
                 if (res.data.resultCode === 0) {
                     dispatch(unfollowSuccess(userId))
                 }
             dispatch(toggleFollowingInProgress(false))
}

//types


export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean

}



export type UsersACType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleFollowingInProgress>
