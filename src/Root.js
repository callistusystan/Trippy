import React, {Component} from 'react';
import firebase from 'firebase';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import "./buttons/leftBarButton.css"

class Root extends Component {
  constructor(props) {
    super(props);

    var config = {
      apiKey: "AIzaSyCVEXktYIe9BR_XdGoHLQtJlymxSJiH0Wc",
      authDomain: "fb-hack-2018.firebaseapp.com",
      databaseURL: "https://fb-hack-2018.firebaseio.com",
      projectId: "fb-hack-2018",
      storageBucket: "fb-hack-2018.appspot.com",
      messagingSenderId: "542784752812"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router>
        <App/>
      </Router>
    );
  }
}

export default Root;
