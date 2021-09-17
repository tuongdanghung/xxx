import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './view/auth/Landing'
import Login from './view/auth/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route
          exact
          path='/login'
          component={Login}
        />
        {/* <Route
							exact
							path='/register'
							render={props => <Auth {...props} authRoute='register' />}
						/>
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/about' component={About} /> */}
      </Switch>
    </Router>
  );
}

export default App;
