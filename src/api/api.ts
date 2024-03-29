import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../types/types";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {})
    }
}
export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status}).then(res => res.data)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthUserType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {

        return instance.post<{ data: string }, AxiosResponse<ResponseType<{ userId: number }>>>('auth/login', {
            email,
            password,
            rememberMe
        })
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }

}


export type ValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
type AuthUserType = {
    id: number
    email: string
    login: string
}
