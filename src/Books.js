import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {update} from './BooksAPI'

class Books extends Component {
  SelectHandler = (selectEvent) => {
    const {updateShelf} = this.props;
    const shelf = selectEvent.target.value;
    update(this.props, shelf).then((res) => {
      if (updateShelf) {
        updateShelf(this.props.id)
      }
    });
  };

  render() {
    const {authors, title, imageLinks, shelf} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.smallThumbnail})`}}></div>
            <div className="book-shelf-changer">
              <select value={shelf ? shelf : "none"} onChange={this.SelectHandler}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors && authors.map((author) => author)}
          </div>
        </div>
      </li>
    )
  }
}

Books.propTypes = {
  authors: PropTypes.array,
  imageLinks: PropTypes.object,
  shelf: PropTypes.string,
  title: PropTypes.string,
};

Books.defaultProps = {
  authors: [],
  imageLinks: {},
  shelf: "",
  title: "",
};

export default Books