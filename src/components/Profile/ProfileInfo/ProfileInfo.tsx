import React, {FC} from 'react';
import s from './ProfileInfo.module.css'

import Preloader from "../../common/Preloader/Preloader";
import user from "../../../assets/images/user.png"

import {ProfileType} from "../../../types/types";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType | null
    isFetching: boolean
    status:string
    updateUserStatus:(status:string)=>void
}

const ProfileInfo:FC<ProfileInfoType> = ({profile,isFetching,status,updateUserStatus}) => {
    return !profile ? <Preloader isFetching={isFetching}/> : (
      <>
          <div className={s.profileInfoConatiner}>
              <img className={s.imgLarge}
                   src={profile.photos?.large !== null ? profile.photos?.large : user}/>
              <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
              <div className={s.fullName}>{profile.fullName}</div>
              <div className={s.aboutMe}>{profile.aboutMe}</div>
              <div className={s.contacts}><h5>Контакты:</h5>
                  <span>{profile.contacts?.facebook}</span>
                  <span>{profile.contacts?.vk}</span>
                  <span>{profile.contacts?.github}</span>
                  <span>{profile.contacts?.twitter}</span>
                  <span>{profile.contacts?.instagram}</span>
                  <span>{profile.contacts?.mainLink}</span>
                  <span>{profile.contacts?.website}</span>
                  <span>{profile.contacts?.youtube}</span>
              
              </div>
              <div className={s.jobSearchStatus}>{profile.lookingForAJobDescription}</div>
          </div>
      </>
    );
};

export default ProfileInfo;
