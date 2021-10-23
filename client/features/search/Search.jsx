import React from 'react';
import MovieDetail from './MovieDetail.jsx';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {

    }
  }
  handleClick(e) {

  }

  render() {
    return (
      <div id="Search">
        <MovieDetail />
      </div>
    );
  }
}

export default Search;
