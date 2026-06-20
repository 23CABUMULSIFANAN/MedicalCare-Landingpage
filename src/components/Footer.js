import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div>

            <h2>Let's Connect with us</h2>

            <p>
              Subscribe to our newsletter
              for healthcare updates.
            </p>

            <div className="footer-input">

              <input
                type="email"
                placeholder="Email Address"
              />

              <button>
                Subscribe
              </button>

            </div>

          </div>

          <div className="footer-links">

            <div>
              <h5>Company</h5>
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>

            <div>
              <h5>Product</h5>
              <p>Features</p>
              <p>Pricing</p>
              <p>Security</p>
            </div>

            <div>
              <h5>Resources</h5>
              <p>Blog</p>
              <p>Help Center</p>
              <p>Support</p>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Medicare
          </p>

          <div className="socials">

            <FaFacebook />
            <FaInstagram />
            <FaTwitter />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;