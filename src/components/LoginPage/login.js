import React from 'react';
import './style.scss';
import Form from './Form/form';

const data = {
  loginTitle: 'Login',
  registerTitle: 'Register',
  username: 'User Name',
  password: 'Password',
  formBtnText: 'Login',
  registerBtnText: 'Register',
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged: ''
    }
  }

  render() {
    const btnText = this.props.id === 'login' ? data.formBtnText : data.registerBtnText;
    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">
              {data.loginTitle}
            </h2>
          </div>
          <Form data={data} btnText={data.formBtnText} loginPage {...this.props} userLogged />
          <div className="reg">
            <p>New to Login?</p>
            <a href="/register">Create your account</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
