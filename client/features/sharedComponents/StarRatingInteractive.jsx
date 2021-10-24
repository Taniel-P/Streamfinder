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
    this.setState({
      rating: e.currentTarget.name
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