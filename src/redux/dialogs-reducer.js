const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Yo Vlad'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Bye'}
    ],
    dialogs: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Vova'}
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.message}]
            }
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = (message) => ({type: 'ADD-MESSAGE', message});


export default dialogsReducer;