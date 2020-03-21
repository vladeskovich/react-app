import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                New Post
            </div>
            <div className={s.posts}>
                <Post message = "Hi, vladok"/>
            </div>
        </div>
    )
}

export default MyPosts