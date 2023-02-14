import React from 'react';

import {connect} from "react-redux";

// type MapStatePropsType = {
//     usersPage:
// }
//
// const mapStateToProps= (state: AppStateType)=>{
//     return{
//         usersPage: state.users
//     }
// }
//
// const mapDispatchToProps = (dispatch:any)=>{
//     return{
//         follow: (userID: number)=>{
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID: number)=>{
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users:Array<FindUsersPage>)=>{
//             dispatch(setUsersAC(users))
//         }
//     }
// }
//
// export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)