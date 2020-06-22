const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.message;
            return state;
        }
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
export default profileReducer;