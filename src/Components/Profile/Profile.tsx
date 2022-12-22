import React from 'react';
import contentImg from "../../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = ()=>{
    return(
        <>
            <div>
                <img className={s.profile_img} src={contentImg} alt="content image"/>
            </div>
            <div>
                ava+desc
            </div>
           <MyPosts/>
        </>

    )
}

