import React from "react";
import s from './FormsControls.module.css'

export const FormControl = ({input, meta,child,...props}: any)=>{
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <props.elementType {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


// export const Textarea = ({input, meta, ...props}: any) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
//             <textarea {...input} {...props}/>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

