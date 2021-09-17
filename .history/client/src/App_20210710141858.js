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
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={Landing} />
              <ProtectedRoute path="/home" exact component={Homepage} />
              <ProtectedRoute path="/todolist" exact component={Todolist} />
              {/* <ProtectedRoute path="/student" exact component={Student} /> */}
              <Route path="/login" render={props => <Auth {...props} authRoute='login' />} />
              <Route path="/register" render={props => <Auth {...props} authRoute='register' />} />
            </Switch>
          </Router>
        </div>
      </PostContextProvider>
    </AuthContextProvider>

  );
}

export default App;
