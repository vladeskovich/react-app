import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Sanya
                </div>
                <div className={s.dialog}>
                    Vovan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Your</div>
                <div className={s.message}>Fuc</div>
            </div>
        </div>
    )
}
export default Dialogs