import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText"
                   component="textarea"
                   className="form-textarea" />
        </div>
        <div><button>Add post</button></div>
    </form>
}


export const AddNewPostFormReduxForm = reduxForm
    <PostFormDataType>({form: 'profileAddPostForm'})(AddNewPostForm)

export type PostFormDataType = {
            newPostText: string
        }
