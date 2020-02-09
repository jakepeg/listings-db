import App from 'next/app'
import Head from 'next/head'
import Nav from '../components/nav'

class ActivityApp extends App {

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Nav />
        <div className="base-page">
          <Component {...pageProps} />
        </div>
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

          h1 {
            font-size: 2rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 0em;
            color: rgb(0, 0, 0, 0.8);
          }

          h2 {
            font-size: 1.5rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            line-height: 1;
            letter-spacing: 0em;
            color: rgb(0, 0, 0, 0.8);
          }

          .contain {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }

          @media (min-width: 576px) {
            .contain {
                max-width: 540px;
            }
          }

          @media (min-width: 768px) {
            .contain {
                max-width: 720px;
            }

            .grid-item {
              -ms-flex: 0 0 50%;
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (min-width: 992px) {
            .contain {
                max-width: 960px;
            }

            .grid-item {
              -ms-flex: 0 0 33.333333%;
              flex: 0 0 33.333333%;
              max-width: 33.333333%;
              padding: 20px;
            }
          }

          @media (min-width: 1200px) {
            .contain {
                max-width: 1140px;
            }
          }

          .rowz {
              display: -ms-flexbox;
              display: flex;
              -ms-flex-wrap: wrap;
              flex-wrap: wrap;
              margin-right: -15px;
              margin-left: -15px;
          }

          [hidden]{display:none!important}

      `}</style>
      </div>
    )
  }
}

export default ActivityApp