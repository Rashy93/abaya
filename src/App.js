import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
// import { NavBar } from './components/nav-bar/nav-bar.component'
import { Header } from './components/header/header.component'

// import { SideBar } from './components/side-bar/side-bar.component'

// import logo from './logo.svg';
import './App.css';
import './index.sass';


class App extends Component {
    // constructor() {
      // super();

        state = {
         books: [],
         searhField: ''
        };

    // }

    componentDidMount() {
      fetch('https://my-json-server.typicode.com/Rashy93/demo/books')
      .then(response => response.json())
      .then(books => this.setState( {books: books}))
    }

    handleChange = (e) => {
      this.setState({ searhField: e.target.value })
    }

    render () {
      const { books, searhField } = this.state;
      const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searhField.toLowerCase()))
      return (
        <div className="App">
        <Header placeholder='Search books...' handleChange={this.handleChange} />
        <div className="body">
        <CardList books={filteredBooks} />
        </div>
        
        </div>
      );
    }
  } 

export default App;
