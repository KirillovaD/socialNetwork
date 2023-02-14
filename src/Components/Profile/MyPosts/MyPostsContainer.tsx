import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../redux/StoreContext";
import {store} from "../../../redux/redux-store";


// type MyPostsContainerPropsType={
//     store: StoreType
// }

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const updateNewPostText = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return <MyPosts posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                addPost={addPost}
                                updateNewPostText={updateNewPostText}/>
            }

            }
        </StoreContext.Consumer>
    )
}


