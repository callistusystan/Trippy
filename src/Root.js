import React, { Component } from 'react';
import firebase from 'firebase';

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
            <div style={styles.container}>
            </div>
        );
    }
}

const styles = {
    container: {
        minHeight: '100vh',
        width: '100%'
    }
};

export default Root;
