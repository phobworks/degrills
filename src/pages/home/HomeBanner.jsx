import { Link } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';
import { IoMdArrowRoundForward } from 'react-icons/io';

const HomeBanner = () => {
  return (
    <section className="home__banner">
      <div className="banner__container container">
        <div className="banner__content">
          <span>
            <GoDotFill className="glow__dot" />
            Built on Expertise. Driven by Results.
          </span>
          <h1>Delivering Precision,</h1>
          <h2>Power & Performance</h2>
          <p>Delivering world-class engineering, fabrication, marine, and equipment leasing services to the oil & gas and industrial sectors since 2004.</p>
          <div className="banner__btn">
            <Link to="/services" className="exp__btn">
              Explore Services
              <IoMdArrowRoundForward />
            </Link>
            <Link to="/projects" className="pro__btn">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
