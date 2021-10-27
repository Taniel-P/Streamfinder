import React from 'react';
import StarRating from './StarRating';

class StarRatingInteractive extends React.Component {
  constructor(props) {
    super(props);

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      rating: 0,
      hover: 0
    }
  }

  handleRatingChange(e) {
    this.setState({
      rating: e.currentTarget.name
    });
  }

  handleHover(e) {
    const { hover } = this.state;
    const newHover = event.currentTarget.name;
    if (newHover === hover) return;

    this.setState({
      hover: e.currentTarget.name
    })
  }

  handleBlur(e) {
    this.setState({ hover: 0 });
  }

  render() {
    const { rating, hover } = this.state;

    return (
      <div id="StarRatingInteractive" className="container" onMouseLeave={ this.handleBlur }>
        <StarRating avgRating={ hover || rating } interaction={{ preview: this.handleHover, select: this.handleRatingChange }} />
      </div>
    )
  }
}

export default StarRatingInteractive;