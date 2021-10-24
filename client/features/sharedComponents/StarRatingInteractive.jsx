import React from 'react';
import StarRating from './StarRating';

class StarRatingInteractive extends React.Component {
  constructor(props) {
    super(props);

    this.handleRatingChange = this.handleRatingChange.bind(this);

    this.state = {
      rating: 0
    }
  }

  handleRatingChange(e) {
    e.preventDefault();

    const rating = e.currentTarget.href.slice(-2, -1);

    this.setState({
      rating: rating
    });
  }

  render() {
    const { rating } = this.state;

    return (
      <>
        <StarRating avgRating={rating} interact={this.handleRatingChange} />
      </>
    )
  }
}

export default StarRatingInteractive;