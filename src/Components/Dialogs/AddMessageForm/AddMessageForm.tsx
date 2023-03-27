import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const AddMessageForm:React.FC <InjectedFormProps<MessageDataType>> = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div><Field name="message" component="textarea" className="form-textarea" placeholder='Enter your message'/></div>
        <div><button>Add message</button></div>


    </form>
);
export const AddMessageReduxForm = reduxForm<MessageDataType>({form:'dialogAddMessageForm'})(AddMessageForm)
export type MessageDataType ={
    message:string
}
