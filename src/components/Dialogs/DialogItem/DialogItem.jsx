import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>

            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}><img src="https://download-cs.net/steam/avatars/3374.jpg" alt="ava"/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem