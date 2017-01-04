var $ = global.jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.react');

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/'
import thunkMiddleware from 'redux-thunk'

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('wrapper')
)
