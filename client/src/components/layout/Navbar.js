/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '0 2rem' }} className='purple darken-4'>
      <div className='nav-wrapper'>
        <Link to='/' href='#' className='brand-logo'>
          Logo
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/invest'>Invest</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/faqs'>FAQs</Link>
          </li>
          <li>
            <Link
              to='/login'
              className='waves-effect waves-light btn-flat white-text'
              style={{
                margin: '0',
                border: '0.5px solid white',
                width: '6rem',
                textAlign: 'center'
              }}>
              Login
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className='waves-effect waves-light btn-flat white-text purple darken-1'
              style={{ margin: '0', width: '6rem', textAlign: 'center' }}>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
