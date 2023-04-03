import React from 'react';
import s from "./users.module.css";
import user from "../../assets/images/user.png";
import {Link} from "react-router-dom";
import {UserType} from "../../types/types";
import {Paginator} from "../common/Paginator/Paginator";


type UsersPresentationType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (p: number) => void
    followingInProgress: boolean
    isAuth: boolean
}

const Users = (props: UsersPresentationType) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChanged} />
            {props.isAuth?
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
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
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
            </div>:
                <div>{props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <Link to={"/profile/" + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : user} className={s.userFoto}/>
                        </Link>
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
                </div>}

        </div>
    );
};

export default Users;
