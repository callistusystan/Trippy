import React, { Component } from 'react';
import Giraffe from '../images/giraffe.png';

class GiraffeModal extends Component {
    render() {
        return (
            <div style={styles.container}>
                <span style={styles.logo}>Trippy</span>
                <div style={styles.giraffeContainer}>
                    <img src={Giraffe} style={styles.giraffe} />
                    <div style={styles.form}>

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'Pacifico',
        color: '#FFF',
        fontSize: 72
    },
    giraffeContainer: {
        position: 'relative'
    },
    giraffe: {
        width: 'auto',
        height: 600
    },
    form: {
        position: 'absolute',
        backgroundColor: 'blue',
        width: '80%',
        height: 160,
        top: 360,
        left: 40,
        margin: 8
    }
};

export default GiraffeModal;