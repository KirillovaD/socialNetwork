
import {v1} from "uuid";

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}

export type InitialState = typeof initialState
const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 5},
        {id: v1(), message: "It's my first post", likesCount: 1},
        {id: v1(), message: "Blabla", likesCount: 0}

    ] as Array<PostPropsType>,
    newPostText: ""
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
        default:
            return state
    }
}

export type ProfileActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

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
