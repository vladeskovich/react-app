import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const PostMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message" component="textarea"/>
            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    )
};

const PostMessageReduxForm = reduxForm({
    form: 'postMessage'
})(PostMessageForm);

const MyPosts = (props) => {
    //let newPost = React.createRef();
    const onSubmit = (DataForm) => {
        props.addPost(DataForm.message);
        debugger
    };
    /*let addPost = () => {
        props.addPost();
    };*/
    /*let onPostChange = () => {
        let text = newPost.current.value;
        props.onPostChange(text);

    }*/
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />);
    return (
        <div>
            MyPosts
            <PostMessageReduxForm onSubmit={onSubmit}/>
            {/*<div>
                <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>*/}
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts