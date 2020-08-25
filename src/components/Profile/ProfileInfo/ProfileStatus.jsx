import React from 'react';
import s from "./ProfileInfo.module.css"

class ProfileInfo extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    editModeActive = () => {
        this.setState({
            editMode: true
        })
    };

    editModeDisable = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:  this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.editModeActive}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.editModeDisable} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
};

export default ProfileInfo