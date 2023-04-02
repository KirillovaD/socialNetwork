import React from "react";
import { Formik, Form, Field } from 'formik';
import {sendMessageAC} from "../../../redux/messagesReducer";
import {useAppDispatch} from "../../../redux/redux-store";

interface Values {
    message: string;
}

function validateMessage(value:string) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 50) {
        error = 'Your message is too long';
    }
    return error;
}

export const AddMessageForm = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <Formik
                initialValues={{
                    message: '',
                }}
                onSubmit={(
                    values: Values,
                    { resetForm }
                ) => {
                    dispatch(sendMessageAC(values.message))
                    resetForm();
                }}
            >
                {({ errors, touched, isValidating }) => (
                <Form>
                    <Field
                        id="message"
                        name="message"
                        component="textarea"
                        placeholder="Enter your message"
                        validate={validateMessage}
                    />
                    {errors.message && touched.message && <div>{errors.message}</div>}
                    <button type="submit">Add message</button>
                </Form>)}
            </Formik>
        </div>
    );
};

