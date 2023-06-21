import {addPostAC, deletePost, InitialState, profileReducer} from "./profile-reducer"
import {PostPropsType, ProfileType} from "types/types";

let startState:InitialState
beforeEach(() => {
    startState = {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 5},
            {id: '2', message: "It's my first post", likesCount: 1},
            {id: '3', message: "Blabla", likesCount: 0}

        ] as Array<PostPropsType>,
        profile: null as ProfileType | null,
        status: ""
    }
})
test('new post should be added', () => {

    let action = addPostAC('new text')
    let endState=profileReducer(startState,action)
    expect(endState.posts.length).toBe(4);
    expect(endState.posts[3].message).toBe('new text');

})

test('post should be deleted', () => {

    let action = deletePost('1')
    let endState=profileReducer(startState,action)
    expect(endState.posts.length).toBe(2);

})

test("couldn't delete post with incorrect id" , () => {

    let action = deletePost('4')
    let endState=profileReducer(startState,action)
    expect(endState.posts.length).toBe(3);

})


