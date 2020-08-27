import {getAuthStatus} from "./auth-reducer";

const SET_INITIALIZATION = 'SET_INITIALIZATION';

let initialState = {
    initialization: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialization: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: 'SET_INITIALIZATION'});


export const initialize = () => (dispatch) => {
    let promiseAuth = dispatch(getAuthStatus());
    Promise.all([promiseAuth])
        .then(() => {
            dispatch(initializedSuccess())
        });
};

export default appReducer;