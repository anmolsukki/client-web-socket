import React, { Component } from 'react';
import Chat from "./Components/Chat";
import SockJS from "sockjs-client";
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props)

    const sock = new SockJS('http://localhost:9999/chat');

    sock.onopen = () => {
      console.log('connection open');
    };

    sock.onmessage = e => {
      console.log("message received", e.data)
      this.setState({ messages: [...this.state.messages, e.data] })
    };

    sock.onclose = () => {
      console.log('close');
    };

    this.state = {
      actions: sock,
      messages: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.sock.send(e.target[0].value);
  }

  render() {
    return (
      <div className="App">
        <Chat {...this.state} />
      </div>
    )
  }
}

export default App;
