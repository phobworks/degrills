import './footer.css';
import Logo from '/images/degrills-logo-white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__logo">
            <div className="footer-logo">
              <img src={Logo} alt="" />
            </div>
            <p>
              Degrills Integrated Services Limited is a trusted indigenous engineering and industrial service company delivering fabrication, maintenance,
              construction, pipeline, marine, and equipment leasing solutions to the oil & gas and industrial sectors across Nigeria.
            </p>
          </div>
          <div className="footer__cards">
            <div className="footer__card">
              <h3>Links</h3>
              <div className="footer__links">
                <ul>
                  <li>
                    <Link to="/qualitypolicy">Quality Policy</Link>
                  </li>
                  <li>
                    <Link to="/hsepolicy">HSE Policy</Link>
                  </li>
                  <li>
                    <Link to="/partnership">Partnership</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__card">
              <h3>Our Services</h3>
              <ul>
                <li>
                  <Link to="/services#fabrication-construction">Fabrication & Construction</Link>
                </li>
                <li>
                  <Link to="/services#mechanical-maintenance">Mechanical Maintenance & Industrial Support</Link>
                </li>
                <li>
                  <Link to="/services#electrical-instrumentation">Electrical & Instrumentation</Link>
                </li>
                <li>
                  <Link to="/services#pipeline">Pipeline Services</Link>
                </li>
                <li>
                  <Link to="/services#corrosion-control">Corrosion Control</Link>
                </li>
                {/* <li>
                  <Link to="#">NDT Inspection Services</Link>
                </li> */}
                <li>
                  <Link to="/services#equipment-leasing">Equipment Leasing</Link>
                </li>
              </ul>
            </div>
            <div className="footer__card">
              <h3>Contact Information</h3>
              <ul>
                <li>#4A Iriebe Street, D-Line, Port Harcourt, Rivers State</li>
                <li>Army Shooting Range Road, Igwuruta, Port Harcourt</li>
                <li>+234 803 339 2900, +234 805 566 9528</li>
                <li>info@degrills.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copyright container">
        <span>
          <i class="fa-regular fa-copyright"></i> Copyright 2026 @ DEGRILLS. All rights reserved | Design by <a href="#">phobworks</a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
