/** @format */

import React from 'react';

const Footer = () => {
  return (
    <footer
      className='page-footer purple darken-4 white-text'
      style={{ padding: '3rem 0' }}>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Realtr</h5>
            <p className='grey-text text-lighten-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ratione, expedita non necessitatibus sequi optio?
            </p>
          </div>
          <div className='col l6'>
            <div className='col l4 s12'>
              <h5 className='white-text'>Legal</h5>
              <ul>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Terms and Condition
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Trust Deed
                  </a>
                </li>
              </ul>
            </div>
            <div className='col l4 s12'>
              <h5 className='white-text'>Career</h5>
              <ul>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Apply
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Affliate
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Career Opportunity
                  </a>
                </li>
              </ul>
            </div>
            <div className='col l4 s12'>
              <h5 className='white-text'>Contact Us</h5>
              <ul>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    +2348136379120
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    help@realtr.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
