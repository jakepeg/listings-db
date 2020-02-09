import Link from 'next/link'
import auth0 from '../services/auth0'
import Button from '@material-ui/core/Button';
import SideDrawer from './drawer'

const Login = () => {
  return (
    <Button onClick={auth0.login} variant="contained" color="secondary">Connect</Button>
  )
}

const Logout = () => {
  return (
    <Button onClick={auth0.logout} variant="contained" color="secondary">Logout</Button>
  )
}

const Nav = () => {

  return (
    <>
    <header className="default-primary-color">
      <img id="logo" src="/logo.svg" alt="DooZone logo" />
      <div id="menu">
      { auth0.isAuthenticated() === false &&
        <Login />
      }
      { auth0.isAuthenticated() &&
        <>
        <SideDrawer />
        </>
      }
      </div>
    </header>
    <style jsx>{`
      header {
        display: flex;
        
        padding: 20px 10px 0 10px;
        margin-bottom: 50px;
      }

      #logo {
        width: 90px;
      }

      #menu {
        margin-left: auto;
        margin-top: 8px;
        margin-right: 10px;
      }
    `}</style>
    </>
  )
}

export default Nav