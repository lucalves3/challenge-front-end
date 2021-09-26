import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/challenge-front-end">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
export default App;
