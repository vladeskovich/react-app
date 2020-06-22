import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messagesInput}>
                    <div>
                        <textarea placeholder='Введите текст...' value={props.dialogsPage.newMessageText}
                        onChange={onMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>&#8594;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs