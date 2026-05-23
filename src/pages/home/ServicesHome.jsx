import { Link } from 'react-router-dom';
import { BsDashLg } from 'react-icons/bs';
import { services, hsebadges } from '../../data';
import po from '/images/po.png';

const ServicesHome = () => {
  return (
    <section className="services-home__section">
      <div className="services-home__container container">
        <div className="services-home__content">
          <small>
            <BsDashLg />
            Core capabilities
          </small>
          <h2>Engineering solutions for oil, gas, and industrial operations</h2>
          <p>
            De-Grills delivers mechanical and civil construction, fabrication, and maintenance services built on two decades of Niger Delta expertise and strict
            quality standards.
          </p>
        </div>
        <div className="services-home__cards">
          {services.map(({ image, header, text, link }, index) => {
            return (
              <div className="services-home__card" key={index}>
                <div className="service-home__img">
                  <img src={image} alt="" />
                </div>
                <h3>{header}</h3>
                <p className="short__text">{text}</p>
                <Link to={link}>Read More</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="project-home__container">
        <div className="project-home__content">
          <div className="project-home__cards">
            <div className="project-home__img">
              <img src={po} alt="" />
            </div>
            <div className="project-home__card container">
              <h3>Projects Overview</h3>
              <p>Our portfolio reflects our commitment to quality delivery, safety, and client satisfaction across multiple engineering projects.</p>
              <div className="project-home__link">
                <Link to="/projects">view projects</Link>
              </div>

              <div className="hse-home__content">
                <div className="hse-home__card">
                  <h3>HSE Commitment</h3>
                  <p>Committed to safe operations, quality delivery, and sustainable engineering practices.</p>
                  <div className="hse-home__badges">
                    {hsebadges.map((badge, index) => {
                      const Icon = badge.icon;
                      return (
                        <div className="hse-home__badge" key={index}>
                          <div className="hse-home__icon">
                            <i>
                              <Icon />
                            </i>
                          </div>
                          <p> {badge.text} </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="hse-home__link">
                    <Link to="/hse">read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
