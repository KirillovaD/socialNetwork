import React from 'react';
import s from './ProfileInfo.module.css'
import contentImg from "../../../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.profile_img} src={contentImg} alt="content image"/>
            </div>
            <div>
                ava+desc
            </div>
        </>
    )
};

export default ProfileInfo;