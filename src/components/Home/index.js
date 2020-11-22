import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

import './style.css'
import ArticleList from '../ArticleList'

function Home() {

  const routeMatch = useRouteMatch()

  return (
    <>
      <div className="center home-bg-green">
        <h1 id="home-logo">
          conduit
        </h1>
        <p id="home-lead">
          Um lugar para você compartilhar todo o seu conhecimento!
        </p>
      </div>
      <div className="container row sm-vertical">
        <div className="col">
          <nav id="home-nav">
            <NavLink to={`${routeMatch.url}/my-feed`}>
              Meu feed
            </NavLink>
            <NavLink to={`${routeMatch.url}/global-feed`}>
              Feed global
            </NavLink>
          </nav>
          <main>
            <Switch>
              <Route path={`${routeMatch.path}/my-feed`}>
                <ArticleList />
              </Route>
              <Route path={`${routeMatch.path}/global-feed`}>
                <ArticleList />
              </Route>
              <Route path={`${routeMatch.path}/`}>
                <Redirect to={`${routeMatch.path}/global-feed`} />
              </Route>
            </Switch>
          </main>
        </div>
        <aside
          style={{
            "width": "260px",
            "backgroundColor": "magenta"
          }}
          className="no-flex sm-full"
        >
          Tags populares
        </aside>
      </div>
    </>
  )
}

export default Home
