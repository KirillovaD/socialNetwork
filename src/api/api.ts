import axios from "axios";

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
    followUser(id: number){
        return instance.post(`follow/${id}`, {})
    }
}
export const profileAPI = {
    getUserProfile(userId: string){
        return instance.get(`profile/` + userId).then(res=>res.data)
    },
    getStatus(userId:string){
        return instance.get(`profile/status/` + userId).then(res=>res.data)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`,{status:status}).then(res=>res.data)
    }
}

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`)
    }
}

