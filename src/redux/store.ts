import {message} from "antd";
import {v1} from 'uuid';
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {MessagesActionsType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebarReducer";

//
// export type PostPropsType = {
//     id: string
//     message: string
//     likesCount: number
// }
//
//
// export type ProfilePageType = {
//     posts: Array<PostPropsType>
//     newPostText: string
//
// }
// export type MessageType = {
//     id: number
//     message: string
//
// }
// export type DialogType = {
//     id: number
//     name: string
//     avatar: string
// }
// export type DialogsPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageText: string
// }
//
//
// export type SidebarType = {}
//
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: SidebarType
// }
//
//
// export type StoreType = {
//     _state: RootStateType
//     _onChange: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsType) => void
//
// }
//

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 5},
//                 {id: v1(), message: "It's my first post", likesCount: 1},
//                 {id: v1(), message: "Blabla", likesCount: 0}
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dmitrii', avatar: 'https://s00.yaplakal.com/pics/pics_original/8/3/6/1343638.jpg'},
//                 {
//                     id: 2,
//                     name: 'Kate',
//                     avatar: 'https://illustrators.ru/uploads/illustration/image/1476023/%D0%BA%D0%BE%D1%81%D0%BC%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0.jpg'
//                 },
//                 {id: 3, name: 'Svetlana', avatar: 'https://zamanilka.ru/wp-content/uploads/2022/05/cat-270522-2-edited.jpg'},
//                 {id: 4, name: 'Alex', avatar: 'https://zamanilka.ru/wp-content/uploads/2022/05/cat-270522-2-edited.jpg'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'How are you?'},
//                 {id: 4, message: 'Yo'}
//             ],
//             newMessageText: "",
//         },
//         sidebar: {}
//
//     },
//     _onChange() {
//         console.log('state change');
//     },
//
//     subscribe(observer) {
//         this._onChange = observer;
//     },
//     getState() {
//         return this._state;
//     },

    // dispatch(action) {
    //     this._state.profilePage = profileReducer(this._state.profilePage, action);
    //     this._state.dialogsPage = messagesReducer(this._state.dialogsPage, action);
    //     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    //     this._onChange()
    // }

// }
// type ActionsType = ProfileActionsType | MessagesActionsType




