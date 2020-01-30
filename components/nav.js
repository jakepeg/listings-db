import Link from 'next/link'
import auth0 from '../services/auth0'

const Login = () => {
  return (
    <a onClick={auth0.login} className="nav-link" href="#">Login</a>
  )
}

const Logout = () => {
  return (
    <a onClick={auth0.logout} className="nav-link" href="#">Logout</a>
  )
}

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
    <Link href="/">
      <a className="navbar-brand">DooZone</a>
    </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home
                <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
              <a className="nav-link" href="#">Services</a>
            </Link>
          </li>
          <li className="nav-item">
          { auth0.isAuthenticated() === false &&
            <Login />
          }
          { auth0.isAuthenticated() &&
            <Logout />
          }
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav
