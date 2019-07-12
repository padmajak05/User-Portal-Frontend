import React from 'react';
import './style.scss';
import Form from './Form/form';
let value;
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
      result: ''
    }
  }

  onSuccess(res) {
    this.setState({result: res})
  }

  render() {
    if(this.state.result === true) {
      value = 'Registered Succesully';
    } else if (this.state.result === 'userExists') {
      value = 'User Alredy Exists';
    } else if (this.state.result === true) {
        value = 'Server Error';
    }
    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">
              {data.registerTitle}
            </h2>
          </div>
          <Form 
            data={data} 
            btnText={data.registerBtnText} 
            registerPage 
            onSuccessValue = {this.onSuccess.bind(this)} 
            result = {this.state.result}
          />
          {this.state.result &&
            <p>{value}
              <br />
              <span><br/>Go to </span>
              <a href="/login">Login Page</a>
            </p>}
        </div>
      </div>
    )
  }
}

export default Login;
