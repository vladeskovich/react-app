import React from 'react';
import Header from "./Header";
import {getAuthStatus, setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthStatus();
    }

    render() {
        return <Header {...this.props} />
    }
};
export default connect(mapStateToProps, {setUserData, getAuthStatus})(HeaderContainer)