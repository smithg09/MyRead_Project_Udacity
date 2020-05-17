import React from 'react'
import Books from './Books'

const SingleShelves = (props) => {
  const {shelfTitle, books, updateShelf} = props;
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) =>
              <Books
                key={book.id}
                {...book}
                updateShelf={updateShelf}
              />
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default SingleShelves