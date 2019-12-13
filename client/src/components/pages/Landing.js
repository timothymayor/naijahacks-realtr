/** @format */

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [email, setEmail] = useState('Email Address');

  const onChange = e => {
    setEmail(e.target.value);
  };

  return (
    <Fragment>
      <section className='valign-wrapper' id='showcase'>
        <div className='container left-align white-text'>
          <h1>Everyone can invest</h1>
          <p>Real estate should not be for a few. It should be for all</p>
          <Link
            to='/signup'
            className='btn-flat'
            style={{ border: '2px solid #fff', color: '#fff' }}>
            Create Account
          </Link>
        </div>
      </section>

      <section style={{ height: '100vh', padding: '1.5rem 0' }}>
        <div
          className='row container valign-wrapper'
          style={{ height: '40vh' }}>
          <div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>house</i>
              <h6>
                <strong>Real Estate for all</strong>
              </h6>
              <p>
                Hava access to high end properties developed and managed by
                industry professionals
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>attach_money</i>
              <h6>
                <strong>Affordable Investing</strong>
              </h6>
              <p>
                Invest with as low as #100000 and increase your returns by 200%
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>multiline_chart</i>
              <h6>
                <strong>No loss</strong>
              </h6>
              <p>Your investments are insured to prevent or minimize loss</p>
            </div>
          </div>
        </div>
        <div className='row container' style={{ height: '50vh' }}>
          <div className='video-container col s6'>
            <iframe
              title='youtube'
              width='853'
              height='700'
              src='https://www.youtube.com/watch?v=1gDhl4leEzA'
              frameBorder='0'
              allowFullScreen></iframe>
          </div>
          <div className='col s6'>
            <h4 className='purple-text darken-4'>
              <strong>
                Everyone can now Invest. Real Estate is now all inclusive
              </strong>
            </h4>
            <p>Real Estate should not be for a few, it should be for all</p>
            <Link to='/signup' className='indigo darken-4 btn-flat white-text'>
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <section
        className='purple darken-4 white-text'
        style={{ padding: '1.5rem' }}>
        <div className='container row valign-wrapper'>
          <div className='col s8 l4'>
            <i className='material-icons' style={{ fontSize: '12rem' }}>
              security
            </i>
          </div>
          <div className='col s12 l8'>
            <h3>Insured and Secured</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              dolores quia ipsa architecto magnam, doloribus rem, aliquam aut et
              vero ducimus quos nobis magni quod ex, obcaecati ea tempora
              inventore?
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='row container' style={{ padding: '1.5rem 0' }}>
          <h3 style={{ marginBottom: '3rem' }}>How Realtr works</h3>
          <div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>house</i>
              <h6>
                <strong>Real Estate for all</strong>
              </h6>
              <p>
                Hava access to high end properties developed and managed by
                industry professionals
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>attach_money</i>
              <h6>
                <strong>Affordable Investing</strong>
              </h6>
              <p>
                Invest with as low as #100000 and increase your returns by 200%
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>multiline_chart</i>
              <h6>
                <strong>No loss</strong>
              </h6>
              <p>Your investments are insured to prevent or minimize loss</p>
            </div>
          </div>
          <Link
            to='/signup'
            className='waves-effect waves-light btn-flat center'
            style={{
              border: '1px solid #000',
              marginTop: '4rem',
              width: '15rem',
              display: 'block'
            }}>
            Sign up
          </Link>
        </div>
      </section>

      <section
        className='purple darken-4 white-text'
        style={{ padding: '1.5rem 0' }}>
        <div className='container row '>
          <div className='col l6 valign-wrapper'>
            <div>
              <h5>
                <strong>Join our mailing list</strong>
              </h5>
              <p>Sign up to get info into real estate and new listings</p>
            </div>
          </div>
          <div className='col l6'>
            <div className='valign-wrapper'>
              <form className='input-field col s12 valign-wrapper'>
                <input
                  id='email'
                  type='email'
                  className='validate white-text'
                  value={email}
                  onChange={e => onChange(e)}
                />
                <input
                  type='submit'
                  name='submit'
                  className='btn white black-text'
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline'
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <h3>What people are saying...</h3>
      </section>
    </Fragment>
  );
};

export default Landing;
