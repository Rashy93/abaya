import React from 'react';

import './header.styles.css'

export const Header = ({ placeholder , handleChange}) => (
<section className="hero">
    <h1>React Book Library</h1>
    <article>
      <p>Explore books with just one search and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
      <form>
      <div className="input-field">
          <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
          <label className="label-icon" htmlFor="search"></label>
          <i className="material-icons">close</i>
      </div>
  </form>
    </article>
  </section>
);