import {authAPI} from "../api/api";

const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_STATUS :
            debugger
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export const setUserData = (login, id, email, isAuth) => ({type: 'SET_USER_STATUS', data: {id, email, login, isAuth}});


export const getAuthStatus = (isAuth) => {
    return (dispatch) => {
        authAPI.checkLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, id, email} = data.data;
                    dispatch(setUserData(login, id, email, isAuth));
                }
            });
    }
};
export const login = (DataForm) => {
    return (dispatch) => {
        const {email, password, rememberMe} = DataForm;
        authAPI.logIn(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(getAuthStatus(true));
                } else {
                    dispatch('login', {_error: 'some error'})
                }
            })
    }
};
export const logOut = () => {
    return (dispatch) => {
        authAPI.logOut()
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setUserData(null, null, null, false));
                }
            })
    }
};

export default authReducer;