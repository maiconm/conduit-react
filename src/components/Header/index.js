import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <nav>
      <div className="container">
        <Link
          to="/"
          id="header-logo"
        >
          conduit
        </Link>
        <div className="header-float-right">
          <Link
            to="/"
            className="header-menu"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="header-menu"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="header-menu"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
