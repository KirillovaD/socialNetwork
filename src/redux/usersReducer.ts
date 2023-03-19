import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


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
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_IN_PROGRESS":
            return {...state, followingInProgress: action.followingInProgress}
        default:
            return state

    }

}


//actions
export const followSuccess = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}
export const unfollowSuccess = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount
    } as const
}
export const toggleFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const toggleFollowingInProgress = (followingInProgress: boolean) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_IN_PROGRESS",
        followingInProgress
    } as const
}

//thunks
export const getUsersTC = (currentPage:number,pageSize:number) => (dispatch: Dispatch<UsersACType>) => {
    dispatch(toggleFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    })
}
export const follow = (userId:number) => (dispatch: Dispatch<UsersACType>) => {
   dispatch(toggleFollowingInProgress(true))
    usersAPI.followUser(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false))
    })
}
export const unfollow = (userId:number) => (dispatch: Dispatch<UsersACType>) => {
   dispatch(toggleFollowingInProgress(true))
    usersAPI.unfollowUser(userId).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
        dispatch(toggleFollowingInProgress(false))
    })
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
export type UserType = {
    id: number
    photos: {
        large: string,
        small: string
    }
    followed: boolean
    name: string
    status: string
    location?: LocationUserType
    uniqueUrlName: null
}
type LocationUserType = {
    city: string
    country: string
}

export type UsersACType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleFollowingInProgress>
