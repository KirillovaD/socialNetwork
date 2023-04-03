export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type ContactType = {
    facebook?: string,
    website?: string,
    "vk"?: string,
    "twitter"?: string,
    "instagram"?: string,
    "youtube"?: string,
    "github"?: string,
    "mainLink"?: string
}
export type PhotosType = {
    small?: string
    large?: string
}

export type ProfileType = {
    aboutMe?: string
    contacts?: ContactType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName: string
    userId: number
    photos?: PhotosType
}

export type UserType = {
    id: number
    photos: PhotosType
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
