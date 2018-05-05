import React, { Component } from 'react';
import AppMap from "../maps/RootMap"
class AppPage extends Component {

    render() {
        const { match } = this.props;
        return (
            <div style={styles.container}>
                <AppMap/>
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100vh'
    }
};

export default AppPage;