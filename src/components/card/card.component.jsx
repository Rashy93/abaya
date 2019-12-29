import React from 'react';
import './card.styles.css'

export const Card = (props) => (
  <div className="card-container card">
        <div className="card-header">
      <h5 className="card-title"> {props.book.title} </h5>
      </div>
    <img className="card-img-top" alt="book" src={props.book.image} />
    <div className="card-body">
    <h5 className="card-subtitle mb-2 text-muted"> {props.book.subtitle} </h5>
    <p className="card-text"> {props.book.description} </p>
    <h6> {props.book.author} </h6>
    </div>

  </div>  
)