import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='message' component='textarea' placeholder='Введите текст...'/>
            </div>
            <div>
                <button type='submit'>&#8594;</button>
            </div>
        </form>
    )
};
const MessageReduxForm = reduxForm({
    form: 'dialogMessageForm'
})(MessageForm);

const Dialogs = (props) => {
    const onSubmit = (DataForm) => {
        props.addMessage(DataForm.message);
        debugger
    };

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addMessage = () => {
        props.addMessage();
    };
   /* let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    };*/
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messagesInput}>
                    <MessageReduxForm onSubmit={onSubmit}/>
                    {/* <div>
                        <textarea placeholder='Введите текст...' value={props.newMessageText}
                                  onChange={onMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>&#8594;</button>
                    </div>*/}
                </div>
            </div>
        </div>
    )
};

export default Dialogs