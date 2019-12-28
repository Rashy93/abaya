import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
 
// import logo from './logo.svg';
import './App.css';
import './index.sass';


class App extends Component {
    constructor() {
      super();

        this.state = {
         books: [],
         searhField: ''
        };
    }
    componentDidMount() {
      fetch('https://my-json-server.typicode.com/Rashy93/demo/books')
      .then(response => response.json())
      .then(books => this.setState( {books: books}))
    }
    render () {
      const { books, searhField } = this.state;
      const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searhField.toLowerCase())
        )
      return (
        <div className="App">

        <SearchBox 
        placeholder='search books'
        handleChange={e => this.setState({searhField: e.target.value} )}
        />

        <CardList books={filteredBooks} />
  
        </div>
      );
    }
  }

export default App;
