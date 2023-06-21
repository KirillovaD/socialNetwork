import React from 'react';
import {MyPosts} from "./MyPosts";
import {AppStateType} from "redux/store";
import {connect} from "react-redux";
import {PostPropsType} from "types/types";
import {deletePost} from "redux/profile-reducer";


type mapStatePropsType = {
    posts: Array<PostPropsType>
}
type mapDispatchToPropsType = {
    deletePost: (postId: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}


export const MyPostsContainer = connect(mapStateToProps,{deletePost})(MyPosts)

