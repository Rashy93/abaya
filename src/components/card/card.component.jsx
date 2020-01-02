import React from 'react';

import './card.styles.css'

export const Card = (props) => (
  <div className="card sticky-action">
  <figure>
    <img alt="book" src={props.book.image}  />
  <figcaption><h3>{props.book.title}</h3></figcaption>
  </figure>
  <div className="card-content">
    <h5 className="card-title activator grey-text text-darken-4"> {props.book.title} <i className="material-icons right">more_vert</i></h5>
    <p>By {props.book.author} </p>
  </div>
  <div className="card-reveal">
    <h5 className="card-title grey-text text-darken-4"> {props.book.title} <i className="material-icons right">close</i></h5>
    <h6> {props.book.subtitle} </h6>
    <p> {props.book.author} </p>
    <p> {props.book.description} </p>
  </div>
  <div className="card-action">
    <a href={props.book.link} target="_blank" rel="noopener noreferrer" > Read More </a>
  </div>

  </div>
);

