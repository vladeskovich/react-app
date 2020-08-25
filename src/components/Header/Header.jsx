import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://avatanplus.com/files/resources/mid/56d295b7a60c71532698d580.png"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
};
export default Header