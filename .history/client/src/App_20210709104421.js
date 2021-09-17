import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './view/auth/Landing'
import Auth from './view/Auth'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" render={props => <Auth {...props} authRoute='login' />} />
        <Route path="/register" render={props => <Auth {...props} authRoute='register' />} />
      </Switch>
    </Router>
  );
}

export default App;
