import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileDomainType} from "./ProfileContainer";


export const Profile:FC<ProfileDomainType> = ({profile, isFetching, status, updateUserStatus}) => {

    return (
        <>
            <ProfileInfo profile={profile} isFetching={isFetching} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer/>
        </>

    )
}

