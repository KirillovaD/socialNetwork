import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/FormsControls/FormsContrlos";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength =maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<MessageDataType>> = (props) => (

    <form onSubmit={props.handleSubmit}>
        <div><Field name="message"
                    component={FormControl}
                    placeholder='Enter your message'
                    validate={[required,maxLength]}
                    elementType={'textarea'}
        />
        </div>
        <div>
            <button>Add message</button>
        </div>


    </form>
);
export const AddMessageReduxForm = reduxForm<MessageDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
export type MessageDataType = {
    message: string
}
