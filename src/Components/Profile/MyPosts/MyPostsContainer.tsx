import React from 'react';
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {PostPropsType} from "../../../types/types";


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

