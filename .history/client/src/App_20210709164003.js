import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './view/auth/Landing'
import Auth from './view/Auth'
import AuthContextProvider from './context/AuthContext'
import Home from "./view/Home/Home";
import ProtectedRoute from './view/routing/ProtectedRoute'
import './css/general.scss'
import './css/routers.scss'
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <ProtectedRoute path="/home" exact component={Home} />
            <Route path="/login" render={props => <Auth {...props} authRoute='login' />} />
            <Route path="/register" render={props => <Auth {...props} authRoute='register' />} />
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>

  );
}

export default App;
