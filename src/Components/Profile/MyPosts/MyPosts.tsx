import React from 'react';

import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <Post massage='Hi, how are you?' likes={3} />
                <Post massage="It's my first post" likes={0} />

            </div>

        </div>

    )
}

