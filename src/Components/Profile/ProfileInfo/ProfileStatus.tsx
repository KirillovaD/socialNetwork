import React from 'react';
import {render} from "react-dom";

type ProfileStatusPropsType = {
    status:string
}

class ProfileStatus extends React.Component <ProfileStatusPropsType> {
    state ={
        editMode:false
    }
    activateEditMode = ()=>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = ()=>{
        this.setState({
            editMode:false
        })
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} value={this.props.status} autoFocus/>
                    </div>
                }
            </div>

        );
    }

}

export default ProfileStatus;
