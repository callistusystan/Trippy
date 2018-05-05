import React, { Component } from 'react';
import firebase from 'firebase';
import { Divider, ListItem } from 'material-ui';

import { Widget, addResponseMessage, addLinkSnippet } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chatWidget.css';
import GiraffeHead from '../images/straightgiraffeface.svg';

class ChatWidget extends Component {
  chatReference = firebase.database().ref('chat_msg');
  state = {"key": "cal is a god"};
  constructor(props) {
    super(props);
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig, pushing to firebase! ${newMessage}`);
    const genkey = this.chatReference.push().key;
    this.setState({
      key: genkey
    }, () => { this.chatReference.child(genkey).set(newMessage) });
  };

  handleIfAddLinkOrStandardMessage = (data) => {
    if (data.startsWith("http")) {
      console.log("HERE!");
      // Assume it is a link.
      const tokens = data.split(' ');
      let title = "";
      if (tokens.length > 1) {
        // Can form title.
        title = tokens.slice(1, tokens.length).join(' ');
      } else {
        title = 'Here is a link!';
      }
      const url = tokens[0];
      addLinkSnippet({"title": title, "link": url, "target": url});
    } else {
      addResponseMessage(data);
    }
  };

  componentDidMount() {
    console.log(this.props);
    this.chatReference = firebase.database().ref('chat_msg');
    // Updates chat from the server.
    this.chatReference.on('child_added', (snapshot) => {
      console.log("firebase chat: on child added: " + snapshot.val() + ", key: " + snapshot.key);
      // Don't push msg you sent.
      if (this.state.key === snapshot.key) {
        return;
      }
      const data = snapshot.val();
      this.handleIfAddLinkOrStandardMessage(data);
    }).bind(this);
  }

  render() {
    return (
      <div>
        <Widget
          title={'trippy chat'}
          subtitle={'Chat with friends!'}
          profileAvatar={GiraffeHead}
          handleNewUserMessage={this.handleNewUserMessage}
          autofocus={true}
          badge={1}
        />
      </div>
    );
  }
}

export default ChatWidget;