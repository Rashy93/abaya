import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css'

export const CardList = (props) => (
  <section className="books" id="books">
  <article className="wrapper">
    {props.books.map(book => (
       <Card key={book.id}  book={book} />
      ))}
      </article>
    </section>
);