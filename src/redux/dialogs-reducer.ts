
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

}

export const dialogsReducer = (state: InitialStateType = initialState, action: MessagesActionsType): InitialStateType => {
    switch (action.type) {
        case "dialogs/SEND-MESSAGE":
            let newId= state.messages[state.messages.length-1].id + 1
            let newMessage = {id:newId, message: action.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

//actions
export const sendMessageAC = (newMessageBody:string) => {
    return {
        type: "dialogs/SEND-MESSAGE",
        newMessageBody
    } as const
}

//types

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
export type MessagesActionsType = ReturnType<typeof sendMessageAC>
