import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="contain">
      <div className="footer-header">
      <h3>Hey Doozers!</h3>

<p>Discover Doo is a currated list of Websites, Apps and Youtube Channels that help keep kids active - creatively, physically and accademically.  If you know of other good resources then please share them - just click the Add Activity button!</p>
      </div>
      <div className="footer">
      <div className="footer-section">
      If you have any feedback or just want to say hi then email <a href="mailto:hello@discoverdoo.com">hello@discoverdoo.com</a>
      </div>
      <div className="footer-section">
      If you like the site then please share with your network :
      </div>
      <div className="footer-section">Privacy</div>
      </div>
  </footer>
  )
}

export default Footer