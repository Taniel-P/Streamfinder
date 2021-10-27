import React from 'react';
import './StarRating.css';

const starChar = String.fromCharCode(9733);
const starString = starChar + starChar + starChar + starChar + starChar;
const starValues = [1, 2, 3, 4, 5];

const StarRating = ({ avgRating, interact }) => {

  let rating = 5 - avgRating;
  let px = 16 + (avgRating / 10);
  const starFillOffset = {
    backgroundPosition: '-' + (rating * px) + 'px'
  };

  return (
    <div id="StarRating" className="sc-star-rating-display">
      { interact ? (
        <span className='sc-stars interactive' style={starFillOffset}>
          {starValues.map(value => (<a className="sc-star" key={value} name={value} onMouseEnter={interact.hover} onClick={interact.action}>{starChar}</a>))}
        </span>
      ) : (
        avgRating ? <span className='sc-stars' style={starFillOffset}>{starString}</span> : null
      )}
    </div>
  );
};

export default StarRating;