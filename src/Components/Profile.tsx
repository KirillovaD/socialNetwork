import React from 'react';
import contentImg from "../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";
import s from "./Profile.module.css"

export const Profile = ()=>{
    return(
        <div className={s.content}>
            <div>
                <img src={contentImg} alt="content image"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>

                </div>

            </div>

        </div>

    )
}

