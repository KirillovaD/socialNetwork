import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddNewPostForm} from "../PostForm/AddNewPostForm";



export const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post key={p.id} id={p.id} massage={p.message} likes={p.likesCount} deletePost={props.deletePost}/>)


    return (

        <div className={s.postblocks}>
            <h3>My posts</h3>
            <AddNewPostForm/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
})


