import React, { Component } from 'react';
import firebase from 'firebase';
import { Divider, ListItem } from 'material-ui';

import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import Giraffe from '../images/giraffe.svg';

class ChatWidget extends Component {
  chatReference = firebase.database().ref('chat_msg_4_reals');
  state = {"key": "cal is a dog"};
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

  componentDidMount() {
    console.log(this.props);

    // Updates chat from the server.
    this.chatReference.on('child_added', (snapshot) => {
      console.log("firebase chat: on child added: " + snapshot.val() + ", key: " + snapshot.key);
      // Don't push msg you sent.
      if (this.state.key === snapshot.key) {
        return;
      }
      console.log("HERE!");
      console.log(snapshot.key);
      console.log(this.state.key);
      addResponseMessage(snapshot.val());
    }).bind(this);
  }

  render() {
    return (
      <div>
        <Widget
          title={'bleeh'}
          subtitle={'chat to friends!'}
          profileAvatar={Giraffe}
          handleNewUserMessage={this.handleNewUserMessage}
          autofocus={true}
          badge={2}
        />
      </div>
    );
  }
}

export default ChatWidget;