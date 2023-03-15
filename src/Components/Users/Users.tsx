import React from 'react';
import s from "./users.module.css";
import user from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";
import {Link} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPresentationType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (p: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean) => void
    followingInProgress:boolean
}

const Users = (props: UsersPresentationType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={props.currentPage === p ? s.selectedPage : s.page}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            <div>{props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <Link to={"/profile/" + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : user} className={s.userFoto}/>
                        </Link>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true)
                                usersAPI.unfollowUser(u.id).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    props.toggleFollowingInProgress(false)
                                    })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress}  onClick={() => {
                                props.toggleFollowingInProgress(true)
                                usersAPI.followUser(u.id).then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    props.toggleFollowingInProgress(false)
                                    })
                            }
                            }
                            >Follow</button>}
                    </div>
                </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location?.country}</div>
                    <div>{u.location?.city}</div>
                </span>

            </span>
            </div>)}
            </div>
        </div>
    );
};

export default Users;
