import React, {ComponentType, Suspense} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";
import Preloader from "../components/common/Preloader/Preloader";


export function withSuspense <T>(Component: ComponentType<T>){
    return (props: any) => {
        return <Suspense fallback={<Preloader isFetching={true}/>}>
        <Component {...props}/>
        </Suspense>
    }
}

