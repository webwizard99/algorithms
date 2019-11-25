import React from 'react';
import './reset.css';
import './App.css';
import MessageBox from '../MessageBox/MessageBox';

import algorithms from '../../utilities/algorithms';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      messenges: []
    }

    this.getMessageBox = this.getMessageBox.bind(this);
  }

  getMessageBox() {
    if (this.state.messenges.length < 1) {
      return ''
    } else {
      return (
        <MessageBox messages={this.state.messenges} />
      )
    }
  }

  componentDidMount() {
    algorithms.init();
    const newMessages = algorithms.getMessages();
    this.setState({
      messenges: newMessages
    });
  }
  
  render() {
    return (
      <div className="App">
        {this.getMessageBox()}
      </div>
    )
  }
}

export default App;