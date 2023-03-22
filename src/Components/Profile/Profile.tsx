import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDomainType} from "./ProfileContainer";


export const Profile = (props: ProfileDomainType) => {

    return (
        <>
            <ProfileInfo profile={props.profile} isFetching={props.isFetching} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </>

    )
}

