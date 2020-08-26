import React from 'react';
import styles from './FormControls.module.css'


const FormControl = ({meta, ...props}) => {
    const errorForm = meta.touched && meta.error;
    return <div className={styles.formControl + ' ' + (errorForm ? styles.error : '')}>
        <div>
            {props.children}
        </div>
        <div>
            {errorForm && <span>{meta.error}</span>}
        </div>
    </div>
};



export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};
export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};