import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css'

export const CardList = (props) => (
  <section>

    {props.books.map(book => (
       <Card key={book.id}  book={book} />
      ))}
    </section>
);