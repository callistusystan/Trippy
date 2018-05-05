import React, { Component } from 'react';
import firebase from 'firebase';
import { Divider, ListItem } from 'material-ui';

import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

class ChatWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voteItems: []
    };
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // TODO: Send to fire base stuff.
    addResponseMessage("firebase response here");
  };

  componentDidMount() {
    console.log(this.props);
    const dataRef = firebase.database().ref('chat_msg');
    console.log('firebase stuff');
    console.log(dataRef);
    dataRef.once('value').then(snapshot => {
      console.log("Value");
      console.log(snapshot);
    })
    //   .then(snapshot => {
    //     this.setState({ voteItems: snapshot.val() || [] });
    //   })
    //   .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Widget
          title={'bleeh'}
          subtitle={'chat to friends!'}
          profileAvatar={'http://www.clker.com/cliparts/I/K/X/S/8/a/cartoon-chicken-md.png'}
          handleNewUserMessage={this.handleNewUserMessage}
          autofocus={true}
          badge={2}
        />
      </div>
    );
  }
}

export default ChatWidget;