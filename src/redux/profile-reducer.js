import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const GET_STATUS = 'GET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 12},
        {id: 2, message: 'Second post', likesCount: 13},
        {id: 3, message: 'Good work', likesCount: 0}
    ],
    newPostText: 'vlad',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4, message: post, likesCount: 0}]
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.message
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case GET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        message: text
    }
};
export const setUsersProfile = (profile) => ({type: 'SET_USERS_PROFILE', profile});
export const setStatusProfile = (status) => ({type: 'GET_STATUS', status});
export const getUsersProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            })
    }
};
export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusProfile(response));
            })
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatusProfile(status))
                }
            })
    }
};

export default profileReducer;