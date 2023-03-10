export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
export type UserType = {
    id: number
    photos: {
        large:string,
        small:string
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

const initialState: InitialStateType ={
    users:[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1

}
export const usersReducer = (state: InitialStateType = initialState, action: UsersACType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, users:action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage:action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount:action.totalUsersCount}
        default:
            return state

    }

}

export type UsersACType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
}
export const setTotalUsersCountAC=(totalUsersCount:number) => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount
    } as const
}

