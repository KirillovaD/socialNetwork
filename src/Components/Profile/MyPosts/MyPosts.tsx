import React, {ChangeEvent, RefObject} from 'react';

import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, PostPropsType, updateNewPostTextAC} from "../../../redux/state";
import {text} from "stream/consumers";
import {type} from "os";


type MyPostsPropsType={
    posts: Array<PostPropsType>
    newPostText:string
    dispatch:(action:ActionsType)=>void

}

export const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.posts.map(p=> <Post key={p.id} massage={p.message} likes={p.likesCount} />)

    const addPost = () =>{
       props.dispatch(addPostAC())
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))

    }
    return (

        <div className={s.postblocks}>
            <h3>My posts</h3>
            <div>
               <textarea value={props.newPostText} onChange={onPostChangeHandler}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
}

