import { clientlogo } from '../data';
import { Marquee } from '@chakra-ui/react';
import './clientlogo.css';

const ClientLogo = () => {
  return (
    <section className="enable-animation2">
      <div className="marquee2">
        {/* <div className="marquee__track"> */}
        {/* GROUP 1 */}
        <ul className="marquee__content">
          {clientlogo.map((item, i) => (
            <div className="marquee-banner" key={`a-${i}`}>
              <div className="marq__icon"></div>
              <div className="marq__text">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </ul>

        {/* GROUP 2 (exact duplicate) */}
        <ul aria-hidden="true" className="marquee__content">
          {clientlogo.map((item, i) => (
            <div className="marquee-banner" key={`b-${i}`}>
              <div className="marq__icon"></div>
              <div className="marq__text">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </section>
  );
};

export default ClientLogo;
