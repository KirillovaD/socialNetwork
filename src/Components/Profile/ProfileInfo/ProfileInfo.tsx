import React from 'react';
import s from './ProfileInfo.module.css'
import contentImg from "../../../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import user from "../../../assets/images/user.png"
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType
    isFetching: boolean
    status:string
    updateUserStatus:(status:string)=>void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader isFetching={props.isFetching}/>
    }
    return (
        <>
            {/*<div>*/}
            {/*    <img className={s.profile_img} src={contentImg} alt="content image"/>*/}

            {/*</div>*/}
            <div className={s.profileInfoConatiner}>
                <img className={s.imgLarge} src={props.profile.photos?.large !==null? props.profile.photos?.large: user}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div className={s.fullName}>{props.profile.fullName}</div>
                <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                <div className={s.contacts}> <h5>Контакты:</h5>
                    <span>{props.profile.contacts?.facebook}</span>
                    <span>{props.profile.contacts?.vk}</span>
                    <span>{props.profile.contacts?.github}</span>
                    <span>{props.profile.contacts?.twitter}</span>
                    <span>{props.profile.contacts?.instagram}</span>
                    <span>{props.profile.contacts?.mainLink}</span>
                    <span>{props.profile.contacts?.website}</span>
                    <span>{props.profile.contacts?.youtube}</span>

                </div>
                <div className={s.jobSearchStatus}>{props.profile.lookingForAJobDescription}</div>
            </div>
        </>
    )
};

export default ProfileInfo;
