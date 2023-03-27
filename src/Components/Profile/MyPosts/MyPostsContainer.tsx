import React from 'react';

import {addPostAC, PostPropsType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStatePropsType = {
    posts: Array<PostPropsType>
}

type mapDispatchPropsType = {
    addPost:(newPostText:string) => void

}
export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType
const mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchPropsType => {
    return {
        addPost:(newPostText:string)=>{
            dispatch(addPostAC(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

