import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui"
import "antd/dist/antd.css"
import './styles/index.css';

ReactDOM.render(<MuiThemeProvider><Root /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
