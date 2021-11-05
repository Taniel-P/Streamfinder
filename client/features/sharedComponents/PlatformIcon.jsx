import React from 'react';
import './PlatformIcon.css';

// props: index, isCapped, max, min, stem
class PlatformIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.getSvgData = this.getSvgData.bind(this);

    // You can store SVGs of the platforms here
    this.svgs = {
      // Replace with platform key & SVG code
      // It is better to use SVG than PNG where we can, and at least for me on FEC, better to inline the code than handle a file with webpack!
      platforms: {
        'viewBox': '0,0,837,1000', // resize for platform icon
        'platform1': 'M837.371+928.018L309.729+499.992L837.371+71.9816L778.965+0L162.629+499.992L778.965+1000L837.371+928.018Z', // Replace
        'platform2': 'M-0.371452+928.018L527.271+499.992L-0.371452+71.9816L58.0347+0L674.371+499.992L58.0347+1000L-0.371452+928.018Z', // Replace
      }
    }
  }


  getSvgData(item) {
    // const typeKey = this.props.stem ? 'stem' : 'noStem';
    // Props could maybe select the appropriate SVG here?
    return this.svgs['platforms'][item];
  }

  // Below should be fleshed out. Perhaps props takes in a platform name that corresponds to the key holding the SVG?
  render() {
    return (
      <div class="platform-icon">
        {
          !(this.props.isCapped && this.state.index === this.props.minIndex) &&
          <div class={ this.decrementClass } onClick={ this.incrementIndexDown }>
            <svg viewBox={ this.getSvgData('viewBox') }>
              <path d={ this.getSvgData('platform1') } />
            </svg>
          </div>
        }
      </div>
    );
  }
}

export default PlatformIcon;