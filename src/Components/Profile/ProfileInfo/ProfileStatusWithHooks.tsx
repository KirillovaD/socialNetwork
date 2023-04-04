import React, {ChangeEvent, useEffect, useState} from 'react';
import {render} from "react-dom";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "---"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} value={status}
                           autoFocus/>
                </div>
            }
        </div>

    );
}


