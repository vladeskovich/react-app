import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatusProfile, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        debugger
        this.props.getUsersProfile(userId);
        this.props.getStatusProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}


export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatusProfile, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
