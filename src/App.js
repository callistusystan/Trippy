import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {
    render() {
        return (

            <div style={styles.container}>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
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

export default App;