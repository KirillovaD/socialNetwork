import React from 'react';
import {connect, useSelector} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType, useAppDispatch} from "../../redux/store";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'
import {useFormik} from "formik";
import {Button, Input} from 'antd';
import {UserOutlined} from '@ant-design/icons';


const Login = (props: LoginPropsType) => {
  if (props.isAuth) {
    return <Redirect to={`/profile`}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginFormFormik/>
    </div>
  );
}


type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

const LoginFormFormik = () => {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length > 10) {
        errors.password = 'Password should be max 7 symbols'
      }
      return errors
    },
    onSubmit: values => {
      dispatch(loginTC(values.email, values.password, values.rememberMe))
      formik.resetForm()
    },
  })
  
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <label htmlFor="email">Email</label>
        <Input size="large" placeholder="Email" autoComplete="username" {...formik.getFieldProps('email')}/>
        {/*<input autoComplete="username" {...formik.getFieldProps('email')}/>*/}
        {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
        <label htmlFor="password">Password</label>
        <Input size="large" placeholder="Password" type="password" autoComplete="current-password"
               {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password &&
            <div style={{color: 'red'}}>{formik.errors.password}</div>}
        <div className={s.checkbox}>
          <Input size="small" type="checkbox" checked={formik.values.rememberMe}
                 {...formik.getFieldProps('rememberMe')}/>
          <label htmlFor="rememberMe">Remember me</label>
        
        </div>
        
        <Button type='primary' htmlType={'submit'} disabled={!!formik.errors.email || !!formik.errors.password} >
          Login
        </Button>
        {/*type={'submit'}*/}
      
      </form>
    
    </div>
  
  );
}


const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,)(Login)

//types

export type LoginPropsType = mapStatePropsType

type mapStatePropsType = {
  isAuth: boolean
}


