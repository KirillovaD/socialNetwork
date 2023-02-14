import React from 'react';
import contentImg from "../../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../redux/redux-store";

//stateProfilePage={state.profilePage} dispatch={props.store.dispatch}

type ProfilePropsType = {
    store:any
    // stateProfilePage: ProfilePageType

}

export const Profile = (props:ProfilePropsType) => {


    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </>

    )
}

