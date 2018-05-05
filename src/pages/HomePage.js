import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <h1>Home Page</h1>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex'
    }
};

export default HomePage;