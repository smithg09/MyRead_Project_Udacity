import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import SingleShelves from './SingleShelves'
import { Route, Link } from 'react-router-dom'

const bookShelves = [
  {title: "Currently Reading", key: "currentlyReading"},
  {title: "Want To Read", key: "wantToRead"},
  {title: "Read", key: "read"},
];

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    this.listBookShelf()
  }

  updateShelfHandler = () => {
    this.listBookShelf()
  }

  listBookShelf(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  render() {
    const {books} = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>

          <div className="open-search">
            <Link className="btn" to="/search">
              Add a book
            </Link>
          </div>
        </div>

        <div className="list-books-content">
          {bookShelves.map((bookShelf) => (
            <SingleShelves
              key={bookShelf.key}
              shelfTitle={bookShelf.title}
              books={books.filter((book) => book.shelf === bookShelf.key)}
              updateShelf={this.updateShelfHandler}
            />
          ))}
        </div>

        <Route
          path="/search"
          render={({ history }) => (
            <SearchPage
              books={this.state.books}
              onUpdateShelf={this.updateShelfHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default Home
