import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui"
import "antd/dist/antd.css"
import './styles/index.css';
import {Provider} from "react-redux"
import store from "./reducers/store"

ReactDOM.render(<Provider store={store}><MuiThemeProvider><Root /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
