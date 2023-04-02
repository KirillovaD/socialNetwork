import React from 'react';
import {PostPropsType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";


type mapStatePropsType = {
    posts: Array<PostPropsType>
}

export type MyPostsPropsType = mapStatePropsType
const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

export const MyPostsContainer = connect(mapStateToProps)(MyPosts)

