import React from 'react';

import {addPostAC, PostPropsType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

import {AppStateType, store} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStatePropsType = {
    posts: Array<PostPropsType>
    newPostText:string
}

type mapDispatchPropsType = {
    addPost:() => void
    updateNewPostText:(text: string)=> void
}
export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchPropsType => {
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        updateNewPostText:(text: string)=> {
           dispatch(updateNewPostTextAC(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

