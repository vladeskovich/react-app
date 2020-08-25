import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/usersPhoto.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
        //pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                              className={style.photo}/></NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.isFollowing.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }
                            }>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id);
                            }
                            }>Follow</button>}
                        </div>
                            </span>
                    <span>
                            <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                            </span>
                            </span>
                </div>
            )
        }
    </div>
}
export default Users;