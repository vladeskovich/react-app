import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                    <textarea ref={newMessage} placeholder='Введите текст...'></textarea>
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