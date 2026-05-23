import { Link } from 'react-router-dom';
import { BsDashLg } from 'react-icons/bs';

const AboutHome = () => {
  return (
    <section className="about-home__section">
      <div className="about-home__container container">
        <div className="about-home__content">
          <div className="about-home__left">
            <small>
              <BsDashLg /> Our Foundation
            </small>
            <h2>Engineering Excellence for Nigeria's Energy Future</h2>
          </div>
          <div className="about-home__right">
            <p>
              Degrills Integrated Services Limited is a proudly Nigerian engineering company delivering high-quality services to the oil and gas industry. With
              a strong presence across the Niger Delta and a fully equipped fabrication yard, we provide innovative, safe, and efficient solutions tailored to
              client needs.
            </p>
            <div className="about-home__btn">
              <Link to="/about">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
