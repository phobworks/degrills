import OtherBanners from '../../components/OtherBanners';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import './contact.css';
import ContactForm from './ContactForm';
import Map from '../../components/Map';

const Contact = () => {
  return (
    <>
      <OtherBanners title="Contact" />
      <div className="contact__section">
        <div className="contact__container container">
          <div className="contact__content">
            <div className="contact__cards">
              <h3>Contact Information</h3>
              <h4>Head Office:</h4>
              <p className="p-gray">
                <FaLocationDot />
                #4A Iriebe Street, D-Line, Port Harcourt, Rivers State
              </p>
              <h4>Fabrication Yard:</h4>
              <p className="p-gray">
                <FaLocationDot />
                Army Shooting Range Road, Igwuruta, Port Harcourt
              </p>
              <h4>Phone:</h4>
              <ul>
                <li>
                  <p className="p-gray">
                    <FaPhone />
                    0803 339 2900
                  </p>
                </li>
                <li>
                  <p className="p-gray">
                    <FaPhone />
                    0805 566 9528
                  </p>
                </li>
              </ul>
              <h4>Email:</h4>
              <p className="p-gray">
                <MdEmail />
                info@degrills.com
              </p>
            </div>
            <div className="contact__cards">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Map />
    </>
  );
};

export default Contact;
