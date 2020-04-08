import Link from 'next/link'
import auth0 from '../services/auth0'
// import SideDrawer from './drawer'

const Login = () => {
  return (
    <button type="button" onClick={auth0.login}>Sign n</button>
  )
}

const Logout = () => {
  return (
    <button type="button" onClick={auth0.logout}>Logout</button>
  )
}

const Nav = () => {

  return (
    <>
    <header>
    <Link href="/">
      <a><img id="logo" src="/logo.svg" alt="DooZone logo" /></a>
    </Link>
      {/* <span className="tagline">fun things to doo (at home)</span> */}
      <div id="menu">
      {/* <button type="button" className="active">Discover</button> */}
      {/* <button type="button">My Classes</button> */}
      {/* <button type="button">My Points</button> */}
      <Link href="/create">
        <button type="button" className="cta">Add activity</button>
      </Link>

      { auth0.isAuthenticated() === false &&
        <Login />
      }
      { auth0.isAuthenticated() &&
        <>
        <Logout />
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