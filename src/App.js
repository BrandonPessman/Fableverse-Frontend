import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Chat from './components/Chat'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/server/:id">
              <Chat />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
