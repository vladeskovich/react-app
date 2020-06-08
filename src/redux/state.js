let renderEntireTree = () => {
    console.log("vlad");
}

let state = {
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
}

export const addPost = () => {
    let post = {
        id : 4,
        message : state.profilePage.newPostText,
        likesCount : 0
    }
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const updateNewPostText = (value) => {
    state.profilePage.newPostText = value;
    renderEntireTree();
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state