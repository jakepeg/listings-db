import Link from 'next/link'
import auth0 from '../services/auth0'
import SideMenu from './sideMenu'

const Login = () => {
  return (
    <span className="nav-link" onClick={auth0.login}>SIGN IN</span>
  )
}

const LoginAddActivity = () => {
  return (
    <span className="nav-link" onClick={auth0.loginAddActivity}>ADD ACTIVITY</span>
  )
}

const Logout = () => {
  return (
    <span className="nav-link" onClick={auth0.logout}>LOGOUT</span>
  )
}

const AddActivity = () => {
  return (
    <Link href="/create">
      <span className="nav-link">ADD ACTIVITY</span>
    </Link>
  )
}

const MyActivities = () => {
  return (
    <Link href="/my-activities">
      <span className="nav-link">MY ACTIVITIES</span>
    </Link>
  )
}

const Nav = () => {

  return (
    <>
      <header>
        <Link href="/">
          <a><img id="logo" src="/logo.svg" alt="DooZone logo" /></a>
        </Link>
        <div id="menu">
          { auth0.isAuthenticated() &&
          <>
          <div className="loggedin">
            <AddActivity />
            <MyActivities />
            <Logout />
          </div>
          <SideMenu />
          </>
          }
          { auth0.isAuthenticated() === false &&
          <>
            <LoginAddActivity />
            <Login />
          </>
          }
        </div>
      </header>
      <style jsx>{`
        header {
          display: flex;
          padding: 15px 10px 15px 10px;
          margin-bottom: 20px;
          background-color: #0097A7;
        }

        #logo {
          width: 70px;
        }

        .country {
          color: #ffffff;
          margin-top: 12px;
        }

        .tagline {
          color: #ffffff;
          margin-top: 6px;
          font-size: 1.4rem;
        }

        #menu {
          margin-left: auto;
          margin-top: 5px;
          margin-right: 13px;
        }
      `}</style>
    </>
  )
}

export default Nav