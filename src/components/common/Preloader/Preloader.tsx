import React from 'react';
import s from "../../Users/users.module.css";
import loader from "../../../assets/images/Spinner-1s-200px.svg";


type PreloaderType ={
    isFetching:boolean
}
const Preloader = (props:PreloaderType) => {
    return  <div>
        {props.isFetching ? <img className={s.loaderImg} src={loader}/> : null}
    </div>
};

export default Preloader;
