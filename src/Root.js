import React, { Component } from 'react';

class Root extends Component {
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
