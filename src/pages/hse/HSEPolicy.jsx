import './hse.css';
import { Link } from 'react-router-dom';

import { FaHardHat, FaShieldAlt, FaLeaf, FaUsers, FaFireExtinguisher, FaCheckCircle } from 'react-icons/fa';

const HSEPolicy = () => {
  return (
    <main className="hse-policy">
      {/* HERO */}
      <section className="hse-hero">
        <div className="container hse-hero__container">
          <div className="hse-hero__content">
            <span className="hse-tag">Health • Safety • Environment</span>

            <h1>Safety First. Always.</h1>

            <p>Committed to protecting lives, assets, and the environment through responsible operations and strong HSE culture.</p>

            <div className="hse-buttons">
              <Link to="/services" className="btn primary">
                Learn About Our Services
              </Link>

              <Link to="/contact" className="btn secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HSE COMMITMENT */}
      <section className="hse-section">
        <div className="container">
          <div className="section-header">
            <span>Our Commitment</span>
            <h2>Our HSE Commitment</h2>
          </div>

          <p className="hse-text">
            At Degrills Integrated Services Limited, Health, Safety, and Environment (HSE) are integral parts of our business operations. We are committed to
            conducting all activities in a safe, environmentally responsible, and sustainable manner.
          </p>

          <p className="hse-text">
            Our goal is to maintain a workplace free from incidents, injuries, and environmental harm while ensuring the safety of employees, clients,
            contractors, and host communities.
          </p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="hse-objectives">
        <div className="container">
          <div className="section-header center">
            <span>Safety Goals</span>
            <h2>Our HSE Objectives</h2>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <FaShieldAlt />
              <p>Preventing accidents, injuries, and occupational hazards</p>
            </div>

            <div className="objective-card">
              <FaUsers />
              <p>Promoting a strong safety culture across all operations</p>
            </div>

            <div className="objective-card">
              <FaLeaf />
              <p>Protecting the environment from pollution and harmful practices</p>
            </div>

            <div className="objective-card">
              <FaCheckCircle />
              <p>Ensuring compliance with HSE laws, regulations, and industry standards</p>
            </div>

            <div className="objective-card">
              <FaHardHat />
              <p>Providing continuous HSE training and awareness</p>
            </div>

            <div className="objective-card">
              <FaUsers />
              <p>Encouraging employee participation in safety practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY CULTURE */}
      <section className="hse-section alt-bg">
        <div className="container">
          <div className="section-header">
            <span>Safety Culture</span>
            <h2>Building a Strong Safety Culture</h2>
          </div>

          <p className="hse-text">
            Safety is everyone’s responsibility. We encourage proactive hazard identification, risk assessment, and safe work practices at every project
            location.
          </p>

          <div className="hse-list">
            <div className="hse-item">
              <FaCheckCircle />
              <span>Toolbox meetings and safety briefings</span>
            </div>

            <div className="hse-item">
              <FaCheckCircle />
              <span>Use of appropriate PPE</span>
            </div>

            <div className="hse-item">
              <FaCheckCircle />
              <span>Hazard reporting systems</span>
            </div>

            <div className="hse-item">
              <FaCheckCircle />
              <span>Emergency response procedures</span>
            </div>

            <div className="hse-item">
              <FaCheckCircle />
              <span>Safe equipment handling practices</span>
            </div>

            <div className="hse-item">
              <FaCheckCircle />
              <span>Continuous supervision and monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENVIRONMENT */}
      <section className="hse-section">
        <div className="container">
          <div className="section-header">
            <span>Environmental Responsibility</span>
            <h2>Protecting the Environment</h2>
          </div>

          <p className="hse-text">
            We recognize the importance of environmental sustainability and are committed to minimizing the environmental impact of our operations.
          </p>

          <div className="hse-list">
            <div className="hse-item">
              <FaLeaf />
              <span>Proper waste management</span>
            </div>

            <div className="hse-item">
              <FaLeaf />
              <span>Pollution prevention measures</span>
            </div>

            <div className="hse-item">
              <FaLeaf />
              <span>Responsible material handling</span>
            </div>

            <div className="hse-item">
              <FaLeaf />
              <span>Compliance with environmental regulations</span>
            </div>

            <div className="hse-item">
              <FaLeaf />
              <span>Continuous environmental awareness programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="hse-section alt-bg">
        <div className="container">
          <div className="section-header">
            <span>Training & Competency</span>
            <h2>Workforce Training & Competency</h2>
          </div>

          <p className="hse-text">
            We invest in regular HSE training to ensure our workforce remains competent, informed, and prepared to work safely under all conditions.
          </p>

          <div className="objectives-grid">
            <div className="objective-card">
              <FaHardHat />
              <p>Workplace safety</p>
            </div>

            <div className="objective-card">
              <FaFireExtinguisher />
              <p>Fire prevention and emergency response</p>
            </div>

            <div className="objective-card">
              <FaShieldAlt />
              <p>Equipment safety</p>
            </div>

            <div className="objective-card">
              <FaLeaf />
              <p>Environmental protection</p>
            </div>

            <div className="objective-card">
              <FaCheckCircle />
              <p>Hazard awareness and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="hse-objectives">
        <div className="container">
          <div className="section-header center">
            <span>Our Principles</span>
            <h2>Our HSE Principles</h2>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <FaShieldAlt />
              <p>Safety Before Production</p>
            </div>

            <div className="objective-card">
              <FaCheckCircle />
              <p>Zero Incident Mindset</p>
            </div>

            <div className="objective-card">
              <FaLeaf />
              <p>Environmental Protection</p>
            </div>

            <div className="objective-card">
              <FaHardHat />
              <p>Continuous Improvement</p>
            </div>

            <div className="objective-card">
              <FaUsers />
              <p>Accountability & Responsibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="hse-closing">
        <div className="container hse-closing__container">
          <h2>Safe Operations Start With the Right Partner</h2>

          <p>Work with a company that prioritizes safety, environmental responsibility, and operational excellence.</p>

          <div className="hse-buttons">
            <Link to="/partnership" className="btn primary">
              Partner With Us
            </Link>

            <Link to="/contact" className="btn secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HSEPolicy;
