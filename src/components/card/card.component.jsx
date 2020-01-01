import React from 'react';

import './card.styles.css'

export const Card = (props) => (
  <div className="col s12 m6 l3">
  <div className="card sticky-action">
  <div className="card-image">
    <img className="card-img" alt="book" src={props.book.image}  />
  </div>
  <div className="card-content">
    <h5 className="card-title activator grey-text text-darken-4"> {props.book.title} <i className="material-icons right">more_vert</i></h5>
    <p>By {props.book.author} </p>
  </div>
  <div className="card-reveal">
    <h5 className="card-title grey-text text-darken-4"> {props.book.title} <i className="material-icons right">close</i></h5>
    <h6> {props.book.subtitle} </h6>
    <p> {props.book.description} </p>
  </div>
  <div className="card-action">
    <a target="_blank" href={props.book.link} >
    Read More
    </a>
  </div>

  </div>
  </div>  
);

