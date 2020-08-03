import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <Link
    className={`${size} menu-item`}
    to={`/e-commerce/shop/${linkUrl}`}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </Link>
);

export default withRouter(MenuItem);