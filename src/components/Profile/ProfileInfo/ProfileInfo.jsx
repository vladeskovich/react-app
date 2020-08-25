import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./../ProfileInfo/ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
       return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img width='600px' height='300px'
                     src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg"/>
            </div>*/}
            <div>
                <img src={props.profile.photos.large}/>
                ava + desk
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo