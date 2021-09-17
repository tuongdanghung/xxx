import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './view/auth/Landing'
import Auth from './view/Auth'
import AuthContextProvider from './context/AuthContext'
import PostContextProvider from './context/PostContext';
import { Homepage } from "./view/Home/Home";
import Todolist from './view/todo/Todolist'
// import { Student } from "./view/Student/Student";
import ProtectedRoute from './view/routing/ProtectedRoute'
import './css/general.scss'
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
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
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>

  );
}

export default App;
