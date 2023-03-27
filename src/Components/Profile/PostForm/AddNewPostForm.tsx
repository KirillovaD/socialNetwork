import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsContrlos";


const maxLength =maxLengthCreator(30)

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText"
                   component={FormControl}
                   className="form-textarea"
                   validate={[required,maxLength]}
                   elementType={'textarea'}
            />
        </div>
        <div><button>Add post</button></div>
    </form>
}


export const AddNewPostFormReduxForm = reduxForm
    <PostFormDataType>({form: 'profileAddPostForm'})(AddNewPostForm)

export type PostFormDataType = {
            newPostText: string
        }
