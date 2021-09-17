import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './view/auth/Landing'
import Auth from './view/Auth'
import AuthContextProvider from './context/AuthContext'
import { Homepage } from "./view/Home/Home";
import { Student } from "./view/Home/Home";
import ProtectedRoute from './view/routing/ProtectedRoute'
import './css/general.scss'
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <ProtectedRoute path="/home" exact component={Homepage} />
            <ProtectedRoute path="/student" exact component={Student} />
            <Route path="/login" render={props => <Auth {...props} authRoute='login' />} />
            <Route path="/register" render={props => <Auth {...props} authRoute='register' />} />
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>

  );
}

export default App;
