import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css'

export const CardList = (props) => (
  <div className="col s12 m8 l9 z-depth-3">

    {props.books.map(book => (
       <Card key={book.id}  book={book} />
      ))}
    </div>
);