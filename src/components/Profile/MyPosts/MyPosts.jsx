import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPost = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);

    }
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likes={p.likesCount} />);
    return (
        <div>
            MyPosts
            <div>
                <textarea ref={newPost} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts