import React from 'react';
import logoIcon from '../icons/logo.svg';
import { withRouter } from 'react-router-dom';

const TopBar = ({ children, history, style }) => (
    <div>
        <div style={{ ...styles.container, ...style }}>
            <img
                src={logoIcon}
                onClick={() => history.push('/')}
                style={{
                    height: 60,
                    position: 'absolute',
                    cursor: 'pointer'
                }}
            />
            <div style={{ display:"flex",justifyContent:"center",width:"100%"}}>
                {children}
            </div>
        </div>
        <div style={{ height: 70 }}/>
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

export default withRouter(TopBar);