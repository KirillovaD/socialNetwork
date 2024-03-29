import React, {ComponentType, Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";


export function withSuspense <T>(Component: ComponentType<T>){
    return (props: any) => {
        return <Suspense fallback={<Preloader isFetching={true}/>}>
        <Component {...props}/>
        </Suspense>
    }
}

