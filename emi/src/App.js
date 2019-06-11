import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';

function App() {
  return (
	<BrowserRouter>
		<Navigation />
		<Route exact path='/' component={Landing} />
	</BrowserRouter>
  );
}

export default App;
