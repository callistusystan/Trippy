import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from "material-ui"
import App from './App';
import "./index.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
