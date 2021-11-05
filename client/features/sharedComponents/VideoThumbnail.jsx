import React from 'react';
import StarRating from 'StarRating.jsx';
import PlatformIcon from 'PlatformIcon.jsx';
import ErrorBoundary from 'ErrorBoundary.jsx';
import './VideoThumbnail.css';

class VideoThumbnail extends React.Component {
  constructor({ id, imgData, name, rating, platformData }) {
    super({ id, imgData, name, rating, platformData });

    this.state = {
      // Any state needed?
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Go to movie details page
  }

  // Below should be fleshed out. Perhaps props takes in a platform name that corresponds to the key holding the SVG?
  render() {
    return (
      <ErrorBoundary>
        <div class="sc-video-thumbnail" onClick={ this.handleClick }>

          // Add img tag (and later imageAsync component) w/ props.imgData
          // Add html tag w/ movie props.name

          <ErrorBoundary>
            <div class="sc-platform-icon-set">
              // ErrorBoundary
              // Add mapped list of PlatformIcon components with unique kyes and { props.platformData.platformName, props.platformData.platformUrl, props.platformData.movieUrl }
            </div>
          </ErrorBoundary>

          // Add star component with props.rating
        </div>
      </ErrorBoundary>
    );
  }
}

export default VideoThumbnail;