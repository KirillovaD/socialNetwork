import React, {FC} from 'react';
import userImg from "../../../assets/images/user.png";
import s from "./user.module.css";
import {Link} from "react-router-dom";
import {UserType} from "../../../types/types";


type Props = {
  user: UserType
  followingInProgress: boolean
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  isAuth: boolean
}

export const User: FC<Props> = ({user, followingInProgress, follow, unfollow, isAuth}) => {
  return (
    <div>
      <span>
        <div>
          <Link to={"/profile/" + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userImg} className={s.userFoto}/>
          </Link>
        </div>
        
        {isAuth && <div>
          {user.followed ?
            <button disabled={followingInProgress} onClick={() => {
              unfollow(user.id)
            }}>Unfollow</button> : <button disabled={followingInProgress} onClick={() => {
              follow(user.id)
            }}>Follow</button>}
        </div>}
        
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.location?.country}</div>
          <div>{user.location?.city}</div>
        </span>

      </span>
    </div>)
}

