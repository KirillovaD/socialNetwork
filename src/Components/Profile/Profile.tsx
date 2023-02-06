import React from 'react';
import contentImg from "../../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";



type ProfilePropsType = {
    stateProfilePage: ProfilePageType
    dispatch:(action:ActionsType)=>void

}

export const Profile = (props:ProfilePropsType) => {


    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts} newPostText={props.stateProfilePage.newPostText} dispatch={props.dispatch} />
        </>

    )
}

