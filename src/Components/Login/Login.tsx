import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsContrlos";
import {required} from "../../utils/validators/validators";


export function Login() {
    const onSubmit = (formData: FormDataType)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm:React.FC <InjectedFormProps<FormDataType>> = (props)=> {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field component={FormControl}
                            elementType={'input'}
                            name={'login'}
                            placeholder={'Login'}
                            validate={[required]}
                /></div>
                <div><Field component={FormControl}
                            elementType={'input'}
                            name={'password'}
                            placeholder={'Password'}
                            validate={[required]}
                /></div>
                <div><Field component={FormControl}
                            elementType={'input'}
                            name={'rememberMe'}
                            type={'checkbox'}
                /> remember me</div>
                <div><button>Login</button></div>
            </form>
    );
}
const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)

//types
type FormDataType ={
    login:string
    password:string
    rememberMe:boolean
}
