import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import '../pages/home/home.css';

const ContactHome = () => {
  const phone = '+2348033392900';
  return (
    <div className="contact-home__panel">
      <div className="contact-home__container container">
        <div className="contact-home__content">
          <h2>Have a project in view?</h2>
          <p>Partner with Degrills for dependable engineering solutions tailored to your operational needs.</p>
        </div>
        <div className="contact-home__contact">
          <div className="contact-home__btn">
            <Link>Contact us</Link>
          </div>
          <a href={`tel:${phone}`} className="call-BTN">
            <FaPhone /> +234 803 339 2900
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
