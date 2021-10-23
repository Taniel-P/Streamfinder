import React from 'react';
import StarRating from './StarRating';

class StarRatingInteractive extends React.Component {
  constructor(props) {
    super(props);

    this.handleRatingChange = this.handleRatingChange.bind(this);

    this.state = {
      rating: 2
    }
  }

  handleRatingChange(e) {
    e.preventDefault();

    console.log(e.currentTarget.href);

    this.setState({
      rating: e.currentTarget.href
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