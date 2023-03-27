import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddNewPostFormReduxForm, PostFormDataType} from '../PostForm/AddNewPostForm'



export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id} massage={p.message} likes={p.likesCount}/>)

    const onAddPost = (values:PostFormDataType) => {
        props.addPost(values.newPostText);
    }

    return (

        <div className={s.postblocks}>
            <h3>My posts</h3>
            <AddNewPostFormReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}


