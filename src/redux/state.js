import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 12},
                {id: 2, message: 'Second post', likesCount: 13},
                {id: 3, message: 'Good work', likesCount: 0}
            ],
            newPostText: 'vlad'
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("vlad");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(action, this._state.profilePage);
        this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
        this._callSubscriber(this._state);
    }
};


export default store