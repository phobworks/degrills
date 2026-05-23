import React from 'react';
import { services } from '../../data';

const ServicesSection = () => {
  return (
    <section className="services__section">
      <div className="services__container container">
        <div className="services__content">
          <p className="p-orange">Engineered for Performance</p>
          <h2>Supporting Critical Operations with Confidence</h2>
          <p className="p-orange">
            Every project we undertake is driven by quality execution, safety consciousness, and a commitment to exceeding client expectations.
          </p>
        </div>
      </div>
      <div className="services__programs">
        <div className="serv__container container">
          {services.map(({ image2, header, text, id }, index) => {
            return (
              <div id={id} className={`serv__content scroll-offset ${index % 2 !== 0 ? 'serv__content-reverse' : ''}`} key={index}>
                <div className="serv__cards">
                  <p className="p-orange">Engineered for Performance</p>
                  <h3>{header} </h3>
                  <p className="p-gray">{text} </p>
                </div>
                <div className="serv__img">
                  <img src={image2} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
