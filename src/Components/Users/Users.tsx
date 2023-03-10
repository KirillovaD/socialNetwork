import React from 'react';
import s from "./users.module.css";
import user from "../../assets/images/user.png";
import {UserType} from "../../redux/usersReducer";


type UsersPresentationType ={
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged:(p:number)=>void
}

const Users = (props:UsersPresentationType ) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = [];
    for (let i=1; i <=pagesCount; i++){
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p=>{
                    return <span className={props.currentPage === p?s.selectedPage:s.page} onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            <div>{props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : user} className={s.userFoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
