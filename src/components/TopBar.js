import React from 'react';
import logoIcon from '../icons/logo.svg';


export default props => (
    <div>
        <div style={{ ...styles.container, ...props.style}}>
            <img src={logoIcon} style={{
                height: 60
            }}/>
        </div>
        <div style={{ height: 70 }} />
    </div>
);

const styles = {
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 16px',
        position: 'fixed',
        zIndex: 1000
    },
    logo: {
        fontFamily: 'Pacifico',
        fontSize: 36,
        color: '#333'
    }
};