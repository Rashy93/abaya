import React from 'react';

import './nav-bar.styles.css'

export const NavBar = () => (
<nav className="deep-purple darken-1"> 
    <div className="nav-wrapper">
    <a href={'/'} className="brand-logo">React Book App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
    </div>
</nav>
    
)
