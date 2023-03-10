import React, {ChangeEvent} from 'react';

import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.posts.map(p=> <Post key={p.id} massage={p.message} likes={p.likesCount} />)

    const onAddPost = () =>{
        props.addPost();
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let text = e.currentTarget.value
        props.updateNewPostText(text)

    }
    return (

        <div className={s.postblocks}>
            <h3>My posts</h3>
            <div>
               <textarea value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
}

