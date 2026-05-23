import { Marquee } from '@chakra-ui/react';
import { GoDotFill } from 'react-icons/go';
import { items } from '../data';

import './achievementbanner.css';

const AchievmentBanner = () => {
  return (
    <section className="enable-animation">
      <div className="marquee">
        {/* <div className="marquee__track"> */}
        {/* GROUP 1 */}
        <ul className="marquee__content">
          {items.map((item, i) => (
            <div className="marquee-banner" key={`a-${i}`}>
              <div className="marq__icon">
                <GoDotFill />
              </div>
              <div className="marq__text">
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </ul>

        {/* GROUP 2 (exact duplicate) */}
        <ul aria-hidden="true" className="marquee__content">
          {items.map((item, i) => (
            <div className="marquee-banner" key={`b-${i}`}>
              <div className="marq__icon">
                <GoDotFill />
              </div>
              <div className="marq__text">
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </ul>
        {/* </div> */}
      </div>
    </section>
  );
};

export default AchievmentBanner;
