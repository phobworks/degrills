import { Link } from 'react-router-dom';
import './otherbanners.css';

const OtherBanners = ({ title, quote }) => {
  return (
    <section className="other-banner__section">
      <div className="container other-banner__container">
        <div className="other-banner__link">
          <Link to="/">Home</Link>
          <span>/</span>
          <p>{title}</p>
        </div>

        <h1>{title}</h1>
        <p>{quote}</p>
      </div>
    </section>
  );
};

export default OtherBanners;
