import React, {Component} from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./buttons/leftBarButton.css"

class Root extends Component {
    constructor(props) {
        super(props);

        // TODO: Remove my dummy app from it and change it back.
          var config = {
            apiKey: "AIzaSyCuclTtf8A965Kv0I4JzBZ-O3SJKFn1ako",
            authDomain: "david-dummy.firebaseapp.com",
            databaseURL: "https://david-dummy.firebaseio.com",
            projectId: "david-dummy",
            storageBucket: "david-dummy.appspot.com",
            messagingSenderId: "234929044078"
          };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Router>
                <App />
            </Router>
        );
    }
}

export default Root;
