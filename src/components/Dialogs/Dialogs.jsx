import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {MaxLenghtCreator, required} from "../../utils/validators/FormControls";

const maxLenght50 = MaxLenghtCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='message' component={Textarea} placeholder='Введите текст...'
                       validate={[required, maxLenght50]}/>
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
    };

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    //if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messagesInput}>
                    <MessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
};

export default Dialogs