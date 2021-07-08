/** @format */

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Fragment>
      <nav style={{ padding: '0 2rem' }} className='purple darken-4'>
        <div className='nav-wrapper'>
          <Link to='/' href='#' className='brand-logo'>
            Realtr
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
                  textAlign: 'center',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0'
                }}>
                Login
              </Link>
            </li>
            <li>
              <Link
                to='/signup'
                className='waves-effect waves-light btn-flat white-text purple darken-1 center-align'
                style={{
                  margin: '0',
                  width: '6rem',
                  border: '0.5px solid purple',
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0'
                }}>
                Signup
              </Link>
            </li>
          </ul>
          <Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </Link>
        </div>
      </nav>
      <ul
        id='mobile-demo'
        style={{ padding: '3rem 0', margin: '0 auto', textAlign: 'center' }}
        className='purple darken-4 sidenav'>
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
            className='waves-effect waves-light btn-flat white-text'>
            Login
          </Link>
        </li>
        <li>
          <Link
            to='/signup'
            className='waves-effect waves-light btn-flat white-text purple darken-1'>
            Signup
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
