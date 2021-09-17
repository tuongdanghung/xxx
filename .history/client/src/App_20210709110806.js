import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './view/auth/Landing'
import Auth from './view/Auth'
import { AuthContextProvider } from "./context/AthuContext";
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" render={props => <Auth {...props} authRoute='login' />} />
          <Route path="/register" render={props => <Auth {...props} authRoute='register' />} />
        </Switch>
      </Router>
    </AuthContextProvider>

  );
}

export default App;
