import React, { Component } from 'react';
import GiraffeModal from '../components/GiraffeModal';
import Landing from '../images/landing.jpg';

class HomePage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <GiraffeModal />
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        backgroundImage: `url(${Landing})`
    }
};

export default HomePage;