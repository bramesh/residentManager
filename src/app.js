import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';

import reducers from './reducers/index.js';

import Header from './components/Header.jsx';
import ResidentList from './components/ResidentList.jsx';


const middleware = applyMiddleware(thunk, logger);

const initialState = window.INITIAL_STATE;

const store = createStore(reducers, middleware);

const AppRoutes = props => (
		<Route path="/" exact component={ResidentList} />
	)


const App = () => (
	<Provider store={store}>
		<Router>
			<AppRoutes />			
		</Router>
	</Provider>
)




ReactDOM.render(<App />, document.getElementById('root'));