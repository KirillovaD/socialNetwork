import React from 'react';
import s from "./Post.module.css"
import postImage from "../../../../assets/images/v1027-091-a.jpg"

type PostPropsType = {
    id:string
    massage:string
    likes:number
    deletePost:(postId: string) => void
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={postImage} alt="post image"/>
            {props.massage}
            <div>
                <span>{props.likes}</span>
                <span onClick={()=>props.deletePost(props.id)}>X</span>
            </div>
        </div>

    )
}

