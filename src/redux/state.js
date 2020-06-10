let store = {
    _state: {
        profilePage: {
            posts : [
                {id: 1, message: "How are you?", likesCount:12},
                {id: 2, message: "Second post", likesCount:13},
                {id: 3, message: "Good work", likesCount:0}
            ],
            newPostText : "vlad"
        },
        dialogsPage: {
            messages : [
                {id: 1, message: "Yo Vlad"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Bye"}
            ],
            dialogs : [
                {id: 1, name: "Viktor"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Vova"}
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
        debugger;
        if(action.type === 'ADD-POST')
        {
            let post = {
                id : 4,
                message : this._state.profilePage.newPostText,
                likesCount : 0
            }
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }  else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.message;
            this._callSubscriber(this._state);
        }
}
}
export default store