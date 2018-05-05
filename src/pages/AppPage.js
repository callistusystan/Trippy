import React, { Component } from 'react';

class AppPage extends Component {

    render() {
        const { match } = this.props;
        return (
            <div style={styles.container}>
                <h1>App Page: {match.params.id}</h1>
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

export default AppPage;