// Import React Dependency
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

//Import Components
import HomePage from '../../containers/pages/HomePage/HomePage'
import LoginPage from '../../containers/pages/LoginPage/LoginPage'
import RegisterPage from '../../containers/pages/RegisterPage/RegisterPage'

function route() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/" exact/>
        <Route component={LoginPage} path="/login" exact/>
        <Route component={RegisterPage} path="/register" exact/>
      </Switch>
    </Router>
  );
}

export default route;
