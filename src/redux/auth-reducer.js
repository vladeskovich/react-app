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
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setUserData = (login, id, email) => ({type: 'SET_USER_STATUS', data: {id, email, login}});


export const getAuthStatus = () => {
    return (dispatch) => {
        authAPI.checkLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, id, email} = data.data;
                    dispatch(setUserData(login, id, email));
                }
            });
    }
};
export const submitForm = (DataForm) => {
    //let {email, password,rememberMe} = DataForm;
    debugger;
    return (dispatch) => {
        authAPI.logIn(DataForm)
            .then(data => {
                if(data.resultCode === 0){
                    alert('good');
                }
            })
    }
}

export default authReducer;