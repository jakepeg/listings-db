import App from 'next/app'
import Head from 'next/head'
import Nav from '../components/nav'
// import Footer from '../components/footer'
import auth0 from '../services/auth0'

class ActivityApp extends App {

  static async getInitialProps(appContext) {



    //const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth()
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </Head>
        <Nav />
        <div className="base-page">
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
        <style jsx>{`
          padding-bottom: 200px;
        `}</style>

        <style jsx global>{`
        body {
            background-color: #00BCD4;
            min-height: 100vh;
            position: relative;
            margin: 0;
          }
          footer {
            position: absolute;
            bottom: 0;
            width: 100%;
          }

          .dark-primary-color    { background: #0097A7; }
          .default-primary-color { background: #00BCD4; }
          .light-primary-color   { background: #B2EBF2; }
          .text-primary-color    { color: #FFFFFF; }
          .accent-color          { background: #FF5722; }
          .primary-text-color    { color: #212121; }
          .secondary-text-color  { color: #727272; }
          .divider-color         { border-color: #B6B6B6; }

          .cardImage {
            height: 240px;
          }

          .link-text {
            color: #000000;
            font-family: "Roboto", sans-serif;
            line-height: 48px;
            font-size: 24px;
            font-weight: 300;
            white-space: nowrap;
          }

          .link-text:hover {
            text-decoration: none;
          }
      `}</style>
      </div>
    )
  }
}

export default ActivityApp