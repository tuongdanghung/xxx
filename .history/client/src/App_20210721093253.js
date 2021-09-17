import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './view/auth/Landing'
import Auth from './view/Auth'
import AuthContextProvider from './context/AuthContext'
import PostContextProvider from './context/PostContext';
import CovidContextProvider from './context/CovidContext'
import { Homepage } from "./view/Home/Home";
import Todolist from './view/todo/Todolist'
import Covid from "./view//covid/Covid";
import ProtectedRoute from './view/routing/ProtectedRoute'
import Movies from './view/Movies'
import './css/general.scss'
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <CovidContextProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route
                exact
                path='/login'
                render={props => <Auth {...props} authRoute='login' />}
              />
              <Route
                exact
                path='/register'
                render={props => <Auth {...props} authRoute='register' />}
              />
              <ProtectedRoute exact path='/home' component={Homepage} />
              <ProtectedRoute exact path='/todolist' component={Todolist} />
              <ProtectedRoute exact path='/covid-19' component={Covid} />
              <ProtectedRoute exact path='/Movie' component={Movies} />
            </Switch>
          </Router>
        </CovidContextProvider>
      </PostContextProvider>
    </AuthContextProvider>

  );
}

export default App;
