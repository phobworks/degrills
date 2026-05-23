import { Link } from 'react-router-dom';
import { whychoose } from '../../data';
import { FaPhone } from 'react-icons/fa6';
import { BsDashLg } from 'react-icons/bs';
import ClientLogo from '../../components/ClientLogo';
import ContactHome from '../../components/ContactHome';

const WhyChoose = () => {
  return (
    <section className="why-home__section">
      <div className="why-home__container container">
        <div className="why-home__content">
          <small>
            <BsDashLg />
            Our Commitment to Excellence
          </small>
          <h2>Why Choose Degrills</h2>
          <div className="why-home__cards">
            {whychoose.map(({ image, heading, content }, index) => {
              return (
                <div className="why-home__card" key={index}>
                  <div className="why-home__image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{heading} </h3>
                  <p>{content} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ClientLogo />
      <ContactHome />
    </section>
  );
};

export default WhyChoose;
