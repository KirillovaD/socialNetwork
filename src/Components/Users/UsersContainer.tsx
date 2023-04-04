import React from 'react';
import {AppStateType} from "../../redux/store";
import {
    follow,
    getUsersTC,
    setCurrentPage,
    toggleFollowingInProgress, unfollow,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {UserType} from "../../types/types";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";



class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            <Preloader isFetching={this.props.isFetching}/>
            <h2>{this.props.pageTitle}</h2>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                isAuth = {this.props.isAuth}


            />
        </>
    }
}

type mapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
    isAuth: boolean

}

type mapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (followingInProgress: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

type OwnUserPropsType={
    pageTitle:string
}
export type UsersPropsType = mapStatePropsType & mapDispatchPropsType &  OwnUserPropsType


const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default connect<mapStatePropsType,mapDispatchPropsType,OwnUserPropsType,AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsersTC
    }
)(UsersContainer)
