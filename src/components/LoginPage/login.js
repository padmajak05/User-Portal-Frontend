import React from 'react';
import './style.scss';
import Form from './Form/form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from '../../actionCreators/loginAction'

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
      userLogged: '',
      notAuthenticated:''
    }
  }

  componentDidMount(){
    this.props.actions.fetchData();
  }

  authenticate(res) {
    console.log('#####',res);
    this.setState({notAuthenticated: res})
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
          <Form data={data} btnText={data.formBtnText} loginPage {...this.props} authenticate = {this.authenticate.bind(this)} notAuthenticated = {this.state.notAuthenticated}/>
          <div className="reg">
            <p>New to Login?</p>
            <a href="/register">Create your account</a>
          </div>
          {this.state.notAuthenticated === 'userIncorrect' &&
            <p>
              Username/Password doesn't matches
            </p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginData.loginFormData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginAction, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
