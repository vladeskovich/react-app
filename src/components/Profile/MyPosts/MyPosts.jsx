import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {MaxLenghtCreator, required} from "../../../utils/validators/FormControls";

const maxLenght10 = MaxLenghtCreator(10);

const PostMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message" component={Textarea} validate={[required, maxLenght10]}/>
            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    )
};

const PostMessageReduxForm = reduxForm({
    form: 'addNewPostMessage'
})(PostMessageForm);

const MyPosts = (props) => {
    const onSubmit = (DataForm) => {
        props.addPost(DataForm.message);
    };

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />);
    return (
        <div>
            MyPosts
            <PostMessageReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts