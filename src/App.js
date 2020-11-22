import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Auth from './components/Auth'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/register">
          <Auth />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
