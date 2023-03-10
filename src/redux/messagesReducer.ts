

export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState
const initialState = {
    dialogs: [
        {id: 1, name: 'Dmitrii', avatar: 'https://s00.yaplakal.com/pics/pics_original/8/3/6/1343638.jpg'},
        {
            id: 2,
            name: 'Kate',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1476023/%D0%BA%D0%BE%D1%81%D0%BC%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0.jpg'
        },
        {id: 3, name: 'Svetlana', avatar: 'https://zamanilka.ru/wp-content/uploads/2022/05/cat-270522-2-edited.jpg'},
        {id: 4, name: 'Alex', avatar: 'https://zamanilka.ru/wp-content/uploads/2022/05/cat-270522-2-edited.jpg'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Yo'}
    ] as Array<MessageType>,
    newMessageText: "",
}

export const messagesReducer = (state: InitialStateType = initialState, action: MessagesActionsType): InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case "SEND-MESSAGE":
            let newMessage = {id: 5, message: state.newMessageText}
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export type MessagesActionsType = ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>


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

