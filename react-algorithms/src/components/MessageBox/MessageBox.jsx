import React from 'react';
import './MessageBox.css';

import Message from '../Message/Message';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.getMessages = this.getMessages.bind(this);
  }

  getMessages() {
    if (this.props.messages.length < 1) {
      return ''
    } else {
      const tMessages = this.props.messages;
      return tMessages.map((message, messageN) => {
        return (
          <Message key={messageN} message={message} />
          );
      })
    }
  }
  
  render() {
    return (
      <div className="MessageBox">
        {this.getMessages()}
      </div>
    )
  }
}

export default MessageBox;