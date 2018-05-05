import React from 'react';

export default props => (
    <div style={styles.container}>
        <span style={styles.logo}>Trippy</span>
    </div>
);

const styles = {
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#EEE',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 16px'
    },
    logo: {
        fontFamily: 'Pacifico',
        fontSize: 36,
        color: '#333'
    }
};