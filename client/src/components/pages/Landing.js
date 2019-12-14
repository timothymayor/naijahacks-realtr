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
          <h6>Real estate should not be for a few. It should be for all</h6>
          <Link
            to='/signup'
            className='btn-flat'
            style={{
              border: '2px solid #fff',
              color: '#fff',
              marginTop: '2rem'
            }}>
            Create Account
          </Link>
        </div>
      </section>

      <section style={{ margin: '2rem 0', padding: '2rem 0' }}>
        <div className='row container valign-wrapper'>
          <div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>house</i>
              <h5>Real Estate for all</h5>
              <p>
                Have access to high end properties developed and managed by
                industry professionals
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>attach_money</i>
              <h5>Affordable Investing</h5>
              <p>
                Invest with as low as #100000 and increase your returns by 200%
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>multiline_chart</i>
              <h5>No loss</h5>
              <p>Your investments are insured to prevent or minimize loss</p>
            </div>
          </div>
        </div>
      </section>

      <section className='row container' style={{ paddingBottom: '3rem' }}>
        <div className='video-container col s12 l6'>
          <iframe
            title='youtube'
            width='853'
            height='700'
            src='https://www.youtube.com/watch?v=1gDhl4leEzA'
            frameBorder='0'
            allowFullScreen></iframe>
        </div>
        <div className='col s12 l6'>
          <h4 className='purple-text darken-4'>
            Everyone can now Invest. Real Estate is now all inclusive
          </h4>
          <p>Real Estate should not be for a few, it should be for all</p>
          <Link to='/signup' className='indigo darken-4 btn-flat white-text'>
            Create Account
          </Link>
        </div>
      </section>

      <section
        className='purple darken-4 white-text'
        style={{ padding: '1.5rem' }}>
        <div className='container row valign-wrapper'>
          <div className='col s12 l4'>
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
              <h5 className='purple-text darken-4'>Sign up</h5>
              <p>
                Have access to high end properties developed and managed by
                industry professionals
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>attach_money</i>
              <h5 className='purple-text darken-4'>Invest in Real Estate</h5>
              <p>
                Invest with as low as #100000 and increase your returns by 200%
              </p>
            </div>
            <div className='col s12 m8 l4'>
              <i className='material-icons'>multiline_chart</i>
              <h5 className='purple-text darken-4'>Monitor Investments</h5>
              <p>Your investments are insured to prevent or minimize loss</p>
            </div>
          </div>
        </div>
        <div className='center-align'>
          <Link
            to='/signup'
            className='waves-effect waves-light btn-flat center-align'
            style={{
              border: '2px solid #000',
              width: '15rem',
              display: 'block',
              margin: '0 auto 3rem'
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
                  className='btn-flat white black-text'
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
        <div class='carousel' style={{ height: '300px' }}>
          <div class='carousel-item black-text' href='#one!'>
            <div class='row valign-wrapper'>
              <div class='col s2'>
                <img src='' alt='' class='circle responsive-img' />
              </div>
              <div class='col s10'>
                <h5>Adetunji Israel</h5>
                <h6>Javasript Developer</h6>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatem ex veritatis aliquam doloremque labore.
            </p>
          </div>
          <div class='carousel-item black-text' href='#one!'>
            <div class='row valign-wrapper'>
              <div class='col s2'>
                <img src='' alt='' class='circle responsive-img' />
              </div>
              <div class='col s10'>
                <h5>Adetunji Israel</h5>
                <h6>Javasript Developer</h6>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatem ex veritatis aliquam doloremque labore.
            </p>
          </div>
          <div class='carousel-item black-text' href='#one!'>
            <div class='row valign-wrapper'>
              <div class='col s2'>
                <img src='' alt='' class='circle responsive-img' />
              </div>
              <div class='col s10'>
                <h5>Adetunji Israel</h5>
                <h6>Javasript Developer</h6>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatem ex veritatis aliquam doloremque labore.
            </p>
          </div>
          <div class='carousel-item black-text' href='#one!'>
            <div class='row valign-wrapper'>
              <div class='col s2'>
                <img src='' alt='' class='circle responsive-img' />
              </div>
              <div class='col s10'>
                <h5>Adetunji Israel</h5>
                <h6>Javasript Developer</h6>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatem ex veritatis aliquam doloremque labore.
            </p>
          </div>
          <div class='carousel-item black-text' href='#one!'>
            <div class='row valign-wrapper'>
              <div class='col s2'>
                <img src='' alt='' class='circle responsive-img' />
              </div>
              <div class='col s10'>
                <h5>Adetunji Israel</h5>
                <h6>Javasript Developer</h6>
              </div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatem ex veritatis aliquam doloremque labore.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
