import React, { Component } from 'react';
import './App.css';
import fb from './firebase';

class App extends Component {
  state = {
    messages: []
  }

  componentWillMount() {
    let messagesRef = fb.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snap => {
      let message = { text: snap.val(), id: snap.key }
      this.setState(prevState => {
        return {messages: [message].concat(prevState.messages)};
      })
    })
  }

  addMessage = (e) => {
    e.preventDefault();

    fb.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = '';
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el } />
          <input type="submit" />
          <ul>
            {
              this.state.messages.map(message => <li key={message.id}>{message.text}</li>)
            }
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
