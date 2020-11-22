import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
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
          <h1>Cadastrar</h1>
        </Route>
        <Route exact path="/home">
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
