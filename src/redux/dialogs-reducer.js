const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (action, state) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let message = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        message: text
    }
}

export default dialogsReducer;