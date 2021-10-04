/* eslint-disable no-undef */
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';
import Procurar from './pages/Procurar';
import VerTodos from './pages/VerTodos';
import React from 'react';

function App() {
	const token = localStorage.getItem('Token');
	return (
		<div>
			<Switch>
				<Route exact path="/">
					{(token === 'true') ? <Redirect to="/vertodos" /> :  <Login />}
				</Route>
				<Route path="/vertodos" >
					<VerTodos />
				</Route>
				<Route path="/favorite">
					<Favoritos />
				</Route>
				<Route path="/procurar">
					<Procurar />
				</Route>
			</Switch>
		</div>
	);
}
export default App;
