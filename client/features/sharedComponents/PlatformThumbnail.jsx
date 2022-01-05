import React from 'react';
import ErrorBoundary from 'ErrorBoundary.jsx';
import './PlatformThumbnail.css';

class PlatformThumbnail extends React.Component {
  constructor({ id, name, siteUrl, thumbnailUrl, isSelectable }) {
    super({ id, name, siteUrl, thumbnailUrl, isSelectable });

    // below are object properties to have at hand for using the async img thumbnail
    // img: { }
      // src={props.thumbnailUrl}
      // alt={props.name}
      // id={props.thumbnailUrl}
      // class="sc-platform-thumbnail-image"
      // data-style-id={props.id}
      // onClick={handleClick}
      // key={itemKey++}
    // imageType

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      rating: 0
    }
  }

  handleClick(e) {
    // click on 'create account' selects subscription
    // click on 'account -> most used' goes to site
    // click on 'account -> subscriptions' goes to site. Changing subscription is from a different control
    // if (this.props.isSelectable) {

    // } else {

    // }

    // this.setState({
    //   rating: e.currentTarget.name
    // });
  }

  render() {
    const { rating } = this.state;

    return (
      <ErrorBoundary>
        <div className="sc-platform-thumbnail" onClick={this.handleClick}>
          <img src={props.thumbnailUrl} alt={props.name} />
          <span>{props.name}</span>
        </div>
      </ErrorBoundary>
    )
  }
}

export default PlatformThumbnail;