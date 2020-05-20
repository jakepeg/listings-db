import Link from 'next/link'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

const Footer = () => {
  return (
    <footer>

      <h3>Websites, Apps and Youtube Channels to keep kids active</h3>


      <h4>Share DiscoverDoo</h4>


      <FacebookShareButton
              className="social-icons"
              url="https://www.discoverdoo.com"
              quote="Check out DiscoverDoo, a currated list of Websites, Apps and Youtube Channels to keep kids active"
            >
              <FacebookIcon size={48} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="social-icons"
              url="https://www.discoverdoo.com"
            >
              <TwitterIcon size={48} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              className="social-icons"
              url="https://www.discoverdoo.com"
              openWindow="true"
              subject="DiscoverDoo"
              body="Check out DiscoverDoo, a currated list of Websites, Apps and Youtube Channels to keep kids active"
            >
              <EmailIcon size={48} round={true} />
            </EmailShareButton>

            <p className="email-link"><a href="mailto:hello@discoverdoo.com">hello@discoverdoo.com</a></p>
  </footer>
  )
}

export default Footer