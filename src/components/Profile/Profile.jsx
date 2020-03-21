import React from 'react';
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" />
      </div>
      <div>
        ava + desk
      </div>
        <MyPosts/>
     </div>
  )
}
export default Profile