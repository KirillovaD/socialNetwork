import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, PostPropsType, updateUserStatus} from "../../redux/profileReducer";
import {toggleFetching} from "../../redux/usersReducer";
import {withRouter, RouteComponentProps} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PropsType = RouteComponentProps<PathParamsType> & ProfileDomainType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authirizedUserId !== null) {
            userId = this.props.authirizedUserId.toString()
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>

            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        authirizedUserId: state.auth.id,
        isFetching: state.usersPage.isFetching,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth

    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         setUserProfile: (userID: number) => {
//             dispatch(setUserProfile(userID))
//         },
//         toggleFetching: (isFetching: boolean) => {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//
//     }
// }


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, toggleFetching, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


//types
type ContactType = {
    facebook?: string,
    website?: string,
    "vk"?: string,
    "twitter"?: string,
    "instagram"?: string,
    "youtube"?: string,
    "github"?: string,
    "mainLink"?: string
}
type PhotosType = {
    small?: string,
    large?: string,
}
export type ProfileType = {
    aboutMe?: string,
    contacts?: ContactType,
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    fullName: string | null,
    userId: number | null,
    photos?: PhotosType
}
type mapStatePropsType = {
    profile: ProfileType
    posts: Array<PostPropsType>
    authirizedUserId: number | null
    isFetching: boolean
    status: string
    isAuth: boolean

}
type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}
export type ProfileDomainType = mapStatePropsType & mapDispatchPropsType
type PathParamsType = {
    userId: string
}
