import React from 'react';
import './card.styles.css'

export const Card = (props) => (
  <div className="card-container">
    <img className="card-img" alt="book" src={props.book.image} />
    <h2> {props.book.title} </h2>
    <h5> {props.book.subtitle} </h5>
    <h6> {props.book.author} </h6>
  </div>  
)