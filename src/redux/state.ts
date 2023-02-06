import {message} from "antd";
import {v1} from 'uuid';


export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string

}
export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string

}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void

}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 5},
                {id: v1(), message: "It's my first post", likesCount: 1},
                {id: v1(), message: "Blabla", likesCount: 0}

            ],
            newPostText: ""
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dmitrii'},
                {id: 2, name: 'Kate'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Alex'},
                {id: 5, name: 'Nick'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Yo'}
            ],
            newMessageText: "",
        },
        sidebar: {}

    },
    _onChange() {
        console.log('state change');
    },

    subscribe(observer) {
        this._onChange = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostPropsType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._onChange()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogPage.newMessageText = action.newMessage
            this._onChange()
        } else if (action.type === "SEND-MESSAGE") {
            let newMessage = {id: 6, message: this._state.dialogPage.newMessageText}
            this._state.dialogPage.messages.push(newMessage)
            this._state.dialogPage.newMessageText=''
            this._onChange()
        }

    }

}
export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>

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
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}



