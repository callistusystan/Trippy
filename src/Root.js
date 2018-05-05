import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

class Root extends Component {
    constructor(props) {
        super(props);

        const config = {
            apiKey: 'AIzaSyBmrY2PFhtZU6rAstcTmrPpenLNBeInWiM',
            authDomain: 'trippy-fbhack.firebaseapp.com',
            databaseURL: 'https://trippy-fbhack.firebaseio.com',
            projectId: 'trippy-fbhack',
            storageBucket: '',
            messagingSenderId: '230773547653'
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
