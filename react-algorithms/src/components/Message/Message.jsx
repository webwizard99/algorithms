import React from 'react';
import './Message.css';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    if (!this.props.message) {
      return '';
    } else {
      return this.props.message;
    }
  }
  
  render() {
    return (
      <div className="Message">
        {this.getMessage()}
      </div>
    )
  }
}

export default Message;