var $ = global.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.react');

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/'

let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
    	<App />
  	</Provider>,
    document.getElementById('wrapper')
);
