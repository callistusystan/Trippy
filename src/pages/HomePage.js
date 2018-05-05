import React, { Component } from 'react';
import GiraffeModal from '../components/GiraffeModal';
import Landing from '../images/landing.jpg';
import TopBar from '../components/TopBar';

class HomePage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <TopBar/>
                <div style={{ flex: 1, position: 'relative' }}>
                    <GiraffeModal/>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${Landing})`
    }
};

export default HomePage;