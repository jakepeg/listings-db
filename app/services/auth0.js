import auth0 from 'auth0-js'
import Cookies from 'js-cookie'

const CLIENT_URL = process.env.CLIENT_URL;
// console

class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'jakepeg.eu.auth0.com',
      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',
      // redirectUri: 'http://localhost:3000/callback',
      // redirectUri: 'https://discoverdoo.com/callback',
      redirectUri: `${CLIENT_URL}/callback`,
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.loginAddActivity = this.loginAddActivity.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    })
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
  //  localStorage.setItem('access_token', authResult.accessToken)
    Cookies.set('user', authResult.idTokenPayload)
    Cookies.set('jwt', authResult.idToken)
    Cookies.set('expiresAt', expiresAt)
    Cookies.set('sub', authResult.idTokenPayload.sub)
    console.log(authResult)
  }

  logout() {
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')
    Cookies.remove('sub')
    Cookies.remove('returnURL')

    this.auth0.logout({
      // returnTo: 'https://discoverdoo.com',
      returnTo: CLIENT_URL,
      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'
    })
  }

  login() {
    // Cookies.set('returnURL', CLIENT_URL)
    Cookies.set('returnURL', '/')
    this.auth0.authorize()
    console.log(CLIENT_URL)
  }

  loginAddActivity() {
    // Cookies.set('returnURL', `${CLIENT_URL}/create`)
    Cookies.set('returnURL', '/create')
    this.auth0.authorize()
  }

  isAuthenticated() {
    // console.log('isAuthenticated in auth0.js')
    const expiresAt = Cookies.getJSON('expiresAt')
    return new Date().getTime() < expiresAt;
    }
}

const auth0Client = new Auth0();

export default auth0Client