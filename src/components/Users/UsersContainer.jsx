import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, getUsersRequest, setPage} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selectors";

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
};


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   isFollowing={this.props.isFollowing}
            />
        </>
    }


}

export default connect(
    mapStateToProps,
    {follow, unfollow, getUsers: getUsersRequest, setPage}
)(UsersContainer);

