/** @format */

import React, { useState } from 'react';

import Image from '../../assets/images/login.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const { email, password } = formData;
  return (
    <section>
      <div className='row valign-wrapper' style={{height: '90vh', margin:'0'}}>
        <div className='col s6' style={{padding:'0', height:'100%'}}>
          <img
            src={Image}
            alt='shsh'
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div className='col s6 login-form container'>
          <h3>
            <strong>Login!</strong>
          </h3>
          <form style={{ width: '80%' }} onSubmit={e => onSubmit(e)}>
            <div className='input-field col s12'>
              <input
                id='email'
                type='text'
                className='validate'
                value={email}
                onChange={e => onChange(e)}
              />
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className='input-field col s12'>
              <input
                id='password'
                type='password'
                className='validate'
                value={password}
                onChange={e => onChange(e)}
              />
              <label htmlFor='password'>Password</label>
            </div>
            <p>
              <label>
                <input type='checkbox' className='filled-in' />
                <span>Remember me</span>
              </label>
            </p>
            <button className='waves-effect waves-light btn' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
