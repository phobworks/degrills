import AboutImg from '/images/ab-img.png';
import { BsDashLg } from 'react-icons/bs';
import { ov } from '../../data';

const AboutSection = () => {
  return (
    <section className="about-page__section">
      <div className="about-page__container container">
        <div className="about-page__content">
          <div className="about-page__cards">
            <small>
              <BsDashLg />
              Company Overview
            </small>
            <h2>Who We Are</h2>
            <p>
              Degrills Integrated Services Limited is an indigenous Nigerian company incorporated in February 2004 under the Companies and Allied Matters Act
              (CAMA). We specialize in delivering engineering solutions to the oil and gas sector and other industrial markets.
            </p>
            <p>
              With headquarters in Port Harcourt and operations across the Niger Delta, we are strategically positioned to deliver efficient and timely
              services.
            </p>
          </div>
          <div className="about-page__img">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </div>
      <div className="mv__section">
        <div className="mv__container container">
          <div className="mv__content">
            <small>
              <BsDashLg />
              Company Overview
            </small>
            <h2>Mission &amp; Vision</h2>
            <div className="mv__cards">
              <div className="mv__card">
                <p>Our Mission</p>
                <h3>What We Do</h3>
                <p>To deliver high-quality, safe, and cost-effective engineering solutions that exceed client expectations.</p>
              </div>
              <div className="mv__card">
                <p>Our Vision</p>
                <h3>Where We're Going</h3>
                <p>To be a leading engineering and industrial service provider recognized for excellence, innovation, and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ov__section">
        <div className="ov__container container">
          <div className="ov__content">
            <p>Our Value</p>
            <h2>The Principles Behind Our Work</h2>
            <p>These values define how we operate, collaborate, and deliver excellence every day.</p>
          </div>

          <div className="ov__cards">
            {ov.map(({ heading, content }, index) => {
              return (
                <div className="ov__card" key={index}>
                  <h3> {heading} </h3>
                  <p> {content} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
