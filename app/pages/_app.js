import App from 'next/app'
import Head from 'next/head'
import CookieConsent from "react-cookie-consent";
import Nav from '../components/nav2'
import Footer from '../components/footer'

class ActivityApp extends App {

  static async getInitialProps(appContext) {
    console.log(process.env.CLIENT_URL)
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>DiscoverDoo fun finder</title>
          <meta name="title" content="DiscoverDoo fun finder" />
          <meta name="description" content="DiscoverDoo is a currated list of Websites, Apps and Youtube Channels that help keep kids active - creatively, physically and accademically. " />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.discoverdoo.com/" />
          <meta property="og:title" content="DiscoverDoo fun finder" />
          <meta property="og:description" content="DiscoverDoo is a currated list of Websites, Apps and Youtube Channels that help keep kids active - creatively, physically and accademically. " />
          <meta property="og:image" content="https://cl.ly/cad938ecc38d/poster.png" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.discoverdoo.com/" />
          <meta property="twitter:title" content="DiscoverDoo fun finder" />
          <meta property="twitter:description" content="DiscoverDoo is a currated list of Websites, Apps and Youtube Channels that help keep kids active - creatively, physically and accademically. " />
          <meta property="twitter:image" content="https://cl.ly/cad938ecc38d/poster.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150534374-2"></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-150534374-2');
              `,
          }}
          />
        </Head>
        <Nav />
        <div className="base-page">
          <Component {...pageProps} />
          {/* <div id="modal" /> */}

        </div>
        <Footer />
        <CookieConsent
          style={{ background: "#000000" }}
          buttonStyle={{ background: "#0097A7", color: "#000000", fontSize: "12px" }}
        >
              This website uses cookies to enhance the user experience.
        </CookieConsent>
        <style jsx global>{`

        html,
          body {
            height: 100%;
            width: 100%;
          }
          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }

          body {
            font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
            font-size: 1rem;
            background-color: #00BCD4;
            min-height: 100vh;
            position: relative;
            margin: 0;
          }

          .base-page {
            background-color: #00BCD4;
            min-height: 100vh;
            position: relative;
            z-index: 1;
            margin-bottom: 0px;
          }

          footer {
            position: sticky;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #02111B;
            text-align: center;
          }

          .footer-content {
            padding: 30px;
          }

          button {
            background-color: #ffffff;
            color: #00BCD4;
            font-size: 1.1rem;
            font-weight: 500;
            cursor: pointer;
            border-radius: 4px;
            border: 2px solid #00BCD4;
            transition: 0.3s;
            text-transform: uppercase;
            margin-left: 20px;
          }

          button :hover {
            background-color: #00BCD4;
            border: 2px solid white;
            color: white;
          }

          button.active {
            background-color: #e50273;
            border: 1px solid white;
            color: white;
            letter-spacing: 2px;
            font-weight: 400;
            font-size: .9rem;
            padding: 7px 15px;
          }

          .cta {
            background-color: #e50273;
            border: 2px solid white;
            color: white;
            letter-spacing: 2px;
            font-weight: 600;
            font-size: .9rem;
            padding: 5px 10px;
          }

          .nav-link {
            font-family: 'Paytone One', sans-serif;
            color: #ffffff;
            font-size: 1.2rem;
            margin-left: 15px;
            cursor: pointer;
          }

          .top-space {
            margin-top: 80px;
          }

          .bottom-space {
            margin-bottom: 80px;
          }

          .dark-primary-color    { background: #0097A7; }
          .default-primary-color { background: #00BCD4; }
          .light-primary-color   { background: #B2EBF2; }
          .text-primary-color    { color: #FFFFFF; }
          .accent-color          { background: #FF5722; }
          .primary-text-color    { color: #212121; }
          .secondary-text-color  { color: #727272; }
          .divider-color         { border-color: #B6B6B6; }
          .pink                  { color: #E94969; }

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

          h3 {
            font-size: 2rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 0em;
            color: white;
            margin-left: 20px;
          }

          h4 {
            font-size: 1.2rem;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 0em;
            color: white;
          }

          .social-icons {
            margin: 0 10px;
          }

          .email-link {
            font-size: 1.2rem;
            margin-bottom: 40px;
          }

          .react-select-container {
            margin: 20px 0 20px 15px;
          }

          .react-select-container:focus {
            outline: none;
          }

          .react-select__control {
            width: 350px;
            border: 0 solid #fff!important;
            border-radius: 0!important;
            border-bottom: 2px solid #fff!important;
            background-color: #00BCD4!important;
            color: #fff!important;
            font-size: 1.9em!important;
            font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif!important;
            font-weight: 400!important;
            cursor: pointer!important;
          }

          @media (max-width: 789px) {
            .react-select__control {
              width: 330px;
              font-size: 1.8em!important;
            }

            .react-select-container {
              margin: auto;
            }
          }

          .react-select__control--is-focused {
            box-shadow: none!important;

          }

          .react-select__placeholder, 
          .react-select__single-value, 
          .react-select__indicator {
            color: #fff!important;
          }

          .react-select__indicator-separator {
            background-color: #00BCD4!important;
          }

          .react-select__menu {
            margin-top: -3px!important;
            border-radius: 0!important;
            border: 1px solid #0097A7;
            box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12);
          }

          .react-select__menu-list {
            max-height: 550px;
            padding: 20px;
          }

          .react-select__option {
            font-size: 1.3rem!important;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            font-weight: 400;
            line-height: 1;
            -webkit-letter-spacing: 0em;
            -moz-letter-spacing: 0em;
            -ms-letter-spacing: 0em;
            letter-spacing: 0em;
            color: rgb(0,0,0,0.8);
            padding: 8px;
            cursor: pointer!important;
          }

          .react-select__option--is-selected {
            background-color: #ffffff;
            color: #0097A7;
          }

          .react-select__value-container {
            padding: 6px 0 !important;
          }

        #back-btn {
          margin-left: auto;
          margin-top: 15px;
          cursor: pointer;
          opacity: 0.7;
        }

        #back-btn :hover {
          opacity: 1;
        }

        #arrow-left {
          margin-bottom: -6px;
          margin-right: 3px;
        }

        .details-card {
          background: #fff;
          box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
          margin-bottom: 60px;
        }

        .card-header {
          display: flex;
          padding: 0 20px;
        }

        .card-banner {
          display: flex;
          justify-content: space-between;
          height: 60px;
          background: #ff6633;
          padding: 0 20px;
          margin-bottom: 20px;
        }

        .card-content {
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
        }

        .image-section {
            width: 700px;
            display: block!important;
        }

        .info-section {
          width: 370px;
          margin-top: -20px;
        }

        .banner-label {
          color: rgb(255, 255, 255, 0.8);
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .label {
          color: rgb(0, 0, 0, 0.6);
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: -10px;
        }

        .info {
          color: #0097A7;
          margin: 15px 0;
        }

        a {
          color: #0097A7;
          text-decoration: none;
        }

        a :hover {
          text-decoration: underline;
        }

        .banner-info {
          color: white;
          font-size: 1rem;
          margin-top: -10px;
        }

        #icons {
          width: 55px;
          display: flex;
          justify-content: space-between;
        }

        .banner-icon {
          width: 25px;
          opacity: 0.5;
          cursor: pointer;
        }

        .banner-icon :hover {
          opacity: 1;
        }

        .map-icon {
          margin-top: 0;
          margin-right: 10px;
          width: 1.2rem;
        }

        .description {
          margin-bottom: 30px;
          font-size: 1.1rem;
          line-height: 1.6rem;
        }

        .edit-button {
          margin-bottom: 20px;
        }

        .delete-button {
          color: red;
          border: 1px solid red;
        }

        .menu-item {
          width: 100%;
          margin-bottom: 20px;
        }

        .bm-burger-button {
          display: none;
        }

        .contain {
          width: 100%;
          max-width: 1140px;
          margin-right: auto;
          margin-left: auto;
        }

        .rowz {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }


        @media (max-width: 1200px) {
          .image-section {
              width: 500px;
          }

          .contain {
            width: 100%;
            max-width: 1140px;
            padding-right: 20px;
            padding-left: 20px;
          }
        }

        @media (max-width: 992px) {
          .image-section {
              width: 300px;
          }

          .footer-content {
            padding: 0;
          }

        }

        @media (max-width: 768px) {
          .image-section {
              width: 100%;
          }

          .info-section {
            width: 100%;
          }

          .bm-burger-button {
            display: block;
          }

          .loggedin {
            display: none;
          }

          .footer-content {
            padding: 0;
          }
        }

        [hidden]{display:none!important}

      `}</style>
      </div>
    )
  }
}

export default ActivityApp