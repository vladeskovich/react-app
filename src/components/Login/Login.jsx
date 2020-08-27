import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/FormControls";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (DataForm) => {
        props.login(DataForm);
    };
    if (props.isAuth) return <Redirect to={'/profile'}/>;
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input} placeholder={'Login'} validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'} validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
            {props.error && <div>{props.error}</div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};
export default connect(mapStateToProps, {login})(Login);

