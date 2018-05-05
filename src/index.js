import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui"

ReactDOM.render(<MuiThemeProvider><Root /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
