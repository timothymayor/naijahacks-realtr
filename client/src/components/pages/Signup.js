/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

// Custom Import
import Image from '../../assets/images/login.png';

const Signup = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'red');
    } else {
      signup({ name, email, password });
    }
  };

  const { name, email, password, password2 } = formData;

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='row valign-wrapper' style={{ height: '90vh', margin: '0' }}>
      <div
        className='col m6  l6 hide-on-small-only'
        style={{ padding: '0', height: '100%' }}>
        <img src={Image} alt='shsh' style={{ height: '100%', width: '100%' }} />
      </div>
      <div
        className='col s12 m6 l6  login-form container'
        style={{ padding: '0 3rem' }}>
        <h3>
          <strong>Signup!</strong>
        </h3>
        <form style={{ width: '80%' }} onSubmit={e => onSubmit(e)}>
          <div className='input-field col s12'>
            <input
              name='name'
              type='text'
              className='validate'
              value={name}
              required
              onChange={e => onChange(e)}
            />
            <label htmlFor='name'>Full Name</label>
          </div>
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
          <div className='input-field col s12'>
            <input
              name='password2'
              type='password'
              className='validate'
              value={password2}
              required
              onChange={e => onChange(e)}
            />
            <label htmlFor='password'>Confirm Password</label>
          </div>
          <button type='submit' className='btn-flat black white-text'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup, setAlert })(Signup);
