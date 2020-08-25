import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {submitForm} from "../../redux/auth-reducer";

const Login = (props) => {
    const onSubmit = (DataForm) => {
        console.log('good');
        props.submitForm(DataForm);
    };
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={'input'} placeholder={'Input'}/>
            </div>
            <div>
                <Field name={'password'} component={'input'} placeholder={'Password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

let mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps, {submitForm})(Login);

