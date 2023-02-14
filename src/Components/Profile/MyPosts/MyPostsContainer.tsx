import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";



type MyPostsContainerPropsType={
    store: StoreType
}

export const MyPostsContainer = (props:MyPostsContainerPropsType) => {

    const state = props.store.getState()

    const addPost = () =>{
       props.store.dispatch(addPostAC())
    }

    const updateNewPostText = (text:string)=>{
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (<MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>)
}

