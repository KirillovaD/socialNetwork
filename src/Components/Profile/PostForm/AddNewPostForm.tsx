import React from "react";
import {useAppDispatch} from "../../../redux/redux-store";
import { Formik, Form, Field } from 'formik';
import {addPostAC} from "../../../redux/profile-reducer";


interface Values {
    newPostText: string;
}

function validateMessage(value:string) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 30) {
        error = 'Your text is too long';
    }
    return error;
}

export const AddNewPostForm = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <Formik
                initialValues={{
                    newPostText: '',
                }}
                onSubmit={(
                    values: Values,
                    { resetForm }
                ) => {
                    dispatch(addPostAC(values.newPostText))
                    resetForm();
                }}
            >
                {({ errors, touched, isValidating }) => (
                    <Form>
                        <Field
                            id="newPostText"
                            name="newPostText"
                            component="textarea"
                            placeholder="Enter your text"
                            validate={validateMessage}
                        />
                        {errors.newPostText && touched.newPostText && <div>{errors.newPostText}</div>}
                        <button type="submit">Add post</button>
                    </Form>)}
            </Formik>
        </div>
    );
};

