import React from 'react';

import './side-bar.styles.css'

export const SideBar = ({ placeholder , handleChange}) => (
    <div className="col s12 m4 l3">
        <form>
            <div className="input-field">
                <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
                <label className="label-icon" htmlFor="search"></label>
                <i className="material-icons">close</i>
            </div>
        </form>
        <p className="flow-text">
        Aenean porttitor nulla a est tempus, sit amet varius lorem dictum. Aenean sed elementum neque, vitae maximus tortor. Cras sodales est eget mi convallis, sit amet aliquet felis hendrerit. Aliquam id nisl lacinia, rutrum velit vel, porta sapien. Morbi dignissim lacus est. Etiam hendrerit sodales dui, eget pretium dolor posuere quis. Nullam non cursus urna.
        </p>
    </div>

    
)
