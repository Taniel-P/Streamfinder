import React from 'react';
import './Streamfinder.css';

class Streamfinder extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      message: 'hello user',
      buttonLabel: 'Hello'
    }
  }

  handleClick(e) {
    if (this.state.message.length) {
      this.setState({ message: '', buttonLabel: '' });
      alert('Introduction completed');
    }
  }

  render() {
    const { buttonLabel, message } = this.state;
    return (
      <>
        <h2>Streamfinder{message.length ? `: ${message}` : null}</h2>
        {buttonLabel.length ? <button onClick={this.handleClick}>Hello</button> : null}
      </>
    );
  }
};

export default Streamfinder;
