import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsContrlos";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'


const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={FormControl}
                        elementType={'input'}
                        name={'email'}
                        placeholder={'Email'}
                        validate={[required]}
                        autoComplete={"current-password"}
            /></div>
            <div><Field component={FormControl}
                        elementType={'input'}
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                        validate={[required]}
                        autoComplete={"current-password"}
            /></div>
            <div><Field component={FormControl}
                        elementType={'input'}
                        name={'rememberMe'}
                        type={'checkbox'}
            /> remember me
            </div>
            {props.error && <div className={s.formSummeryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login)

//types
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export type LoginPropsType = mapStatePropsType & mapDispatchPropsType

type mapStatePropsType = {
    isAuth: boolean

}
type mapDispatchPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

