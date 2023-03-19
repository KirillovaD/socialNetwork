import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, PostPropsType} from "../../redux/profileReducer";
import {toggleFetching} from "../../redux/usersReducer";
import {withRouter,RouteComponentProps} from "react-router";
import {Redirect} from "react-router-dom";



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
    fullName: string,
    userId: number,
    photos?: PhotosType
}

type mapStatePropsType = {
    profile: ProfileType
    posts: Array<PostPropsType>
    newPostText: string
    isFetching: boolean
    isAuth:boolean

}

type mapDispatchPropsType = {
    getUserProfile:(userId: string)=>void
}

export type ProfileDomainType = mapStatePropsType & mapDispatchPropsType

type PathParamsType= {
    userId:string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileDomainType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} />

            </div>
        );
    }
}



const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isFetching: state.usersPage.isFetching,
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile, toggleFetching})(WithUrlDataContainerComponent);
