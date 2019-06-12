import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Inbox from './components/Inbox';
import Account from './components/Account';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
	<BrowserRouter>
		<Navigation />
		<Route exact path='/' component={Landing} />
		<PrivateRoute exact path='/inbox' component={Inbox} />
		<PrivateRoute exact path='/account' component={Account} />
		<Route exact path='/login' component={Login} />
		<Route exact path='/signup' component={Signup} />
	</BrowserRouter>
  );
}

export default App;
