import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';
import Procurar from './pages/Procurar';
import VerTodos from './pages/VerTodos';

function App() {
	const token = localStorage.getItem('Token');
	return (
		<>
			<Switch>
				<Route exact path="/challenge-front-end">
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
		</>
	);
}
export default App;
