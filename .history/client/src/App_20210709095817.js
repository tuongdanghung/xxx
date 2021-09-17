import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './view/auth/Landing'
import Login from './view/auth/Login'
// import Auth from './views/Auth'
// import AuthContextProvider from './contexts/AuthContext'
// import Dashboard from './views/Dashboard'
// import ProtectedRoute from './components/routing/ProtectedRoute'
// import PostContextProvider from './contexts/PostContext'

function App() {
  return (
    // <AuthContextProvider>
    //   <PostContextProvider>
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route
          exact
          path='/login'
          component={Login}
        // render={props => <Auth {...props} authRoute='login' />}
        />
        {/* <Route
          exact
          path='/register'
          render={props => <Auth {...props} authRoute='register' />}
        /> */}
        {/* <ProtectedRoute exact path='/dashboard' component={Dashboard} /> */}
      </Switch>
    </Router>
    //   </PostContextProvider>
    // </AuthContextProvider>
  )
}

export default App
