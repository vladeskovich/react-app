const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Yo Vlad'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Bye'}
    ],
    newMessageText: 'vlad',
    dialogs: [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Vova'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            //let body = state.newMessageText;
            return {
                ...state,
                //newMessageText: '',
                messages: [...state.messages, {id: 4, message: action.message}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message
            }
        default:
            return state;
    }
};

export const addMessageActionCreator = (message) => ({type: 'ADD-MESSAGE', message});
/*export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        message: text
    }
}*/

export default dialogsReducer;