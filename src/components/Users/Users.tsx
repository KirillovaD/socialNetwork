import React, {FC} from 'react';
import {UserType} from "../../types/types";
import {Pagination} from "antd";
import {User} from "./User/User";


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

const Users:FC<UsersPresentationType> = ({users, followingInProgress, follow, unfollow, isAuth, currentPage,onPageChanged, totalUsersCount, pageSize}) => {
  return (
    <div>
      {/*<Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChanged} />*/}
      <div>
        {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress}
                                    follow={follow} unfollow={unfollow} isAuth={isAuth}/>)}
      </div>
      <Pagination current={currentPage} onChange={onPageChanged} total={totalUsersCount}/>
    </div>
  );
};

export default Users;
