/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

import Image from '../../assets/images/login.png';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  const { email, password } = formData;

  // Redirect if Logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section>
      <div
        className='row valign-wrapper'
        style={{ height: '90vh', margin: '0' }}>
        <div
          className='col m6  l6 hide-on-small-only'
          style={{ padding: '0', height: '100%' }}>
          <img
            src={Image}
            alt='shsh'
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div
          className='col s12 m6 l6 login-form container'
          style={{ padding: '0 3rem' }}>
          <h3>
            <strong>Login!</strong>
          </h3>
          <div className='row'>
            <form className='col s12' onSubmit={e => onSubmit(e)}>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    name='email'
                    type='text'
                    className='validate'
                    value={email}
                    required
                    onChange={e => onChange(e)}
                  />
                  <label htmlFor='email'>Email Address</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    name='password'
                    type='password'
                    className='validate'
                    value={password}
                    required
                    onChange={e => onChange(e)}
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <button type='submit' className='btn-flat black white-text'>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
