import React, { Component } from 'react';
import firebase from 'firebase';

class Root extends Component {
    constructor(props) {
        super(props);

        
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
