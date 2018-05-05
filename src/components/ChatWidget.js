import React, { Component } from 'react';
import firebase from 'firebase';
import { Divider, ListItem } from 'material-ui';

import { Widget, addResponseMessage, addLinkSnippet } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './chatWidget.css';
import GiraffeHead from '../images/straightgiraffeface.svg';

class ChatWidget extends Component {
  chatReference = firebase.database().ref('chat_msg');
  state = {"key": "cal is a god", "toggleOpen": false, "unread": 4};

  // unread = 4;
  // checkUnread = true;

  constructor(props) {
    super(props);
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig, pushing to firebase! ${newMessage}`);
    const genkey = this.chatReference.push().key;
    this.setState({
      key: genkey
    }, () => { this.chatReference.child(genkey).set(newMessage) });

    if (this.state.toggleOpen) this.state.unread++;
    console.log(this.state.toggleOpen);
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
    if (this.state.toggleOpen) this.state.unread++;
    console.log(this.state.toggleOpen);
  };

  componentDidMount() {
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
  };

  resetUnread() {
    console.log("reset unread messages");
    // this.unread = 0;
    // console.log(this.checkUnread);
    // this.checkUnread = !this.checkUnread;
    this.setState({
      "toggleOpen": !this.state.toggleOpen,
      "unread": 0
    });
    console.log(this.state.toggleOpen);
  };

  render() {
    return (
      <div onClick={this.resetUnread.bind(this)}>
        <Widget
          title={'trippy chat'}
          subtitle={'Chat with friends!'}
          profileAvatar={GiraffeHead}
          handleNewUserMessage={this.handleNewUserMessage}
          autofocus={true}
          badge={this.state.unread}//{1}
        />
      </div>
    );
  }
}

export default ChatWidget;