import './qualitypolicy.css';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaTools, FaAward, FaClipboardCheck } from 'react-icons/fa';

const QualityPolicy = () => {
  return (
    <main className="quality-policy">
      {/* HERO SECTION */}
      <section className="quality-hero">
        <div className="container quality-hero__container">
          <div className="quality-hero__content">
            <span className="quality-tag">Quality Policy</span>

            <h1>Quality Without Compromise</h1>

            <p>Delivering engineering solutions with precision, consistency, and excellence across every project.</p>

            <div className="quality-hero__buttons">
              <Link to="/contact" className="btn primary">
                Contact Us
              </Link>

              <Link to="/contact" className="btn secondary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section className="quality-section">
        <div className="container">
          <div className="section-header">
            <span>Our Commitment</span>
            <h2>Our Quality Commitment</h2>
          </div>

          <p className="quality-text">
            At Degrills Integrated Services Limited, quality is at the core of everything we do. We are committed to delivering engineering, fabrication,
            maintenance, and industrial support services that consistently meet client requirements, regulatory standards, and industry best practices.
          </p>

          <p className="quality-text">
            Our approach is built on continuous improvement, operational excellence, and strict compliance with established quality management procedures to
            ensure every project is executed efficiently, safely, and professionally.
          </p>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="quality-objectives">
        <div className="container">
          <div className="section-header center">
            <span>Quality Goals</span>
            <h2>Our Quality Objectives</h2>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <FaClipboardCheck />
              <p>Deliver projects on schedule and within specification</p>
            </div>

            <div className="objective-card">
              <FaShieldAlt />
              <p>Maintain high standards across all operations</p>
            </div>

            <div className="objective-card">
              <FaUsers />
              <p>Ensure customer satisfaction through reliable service delivery</p>
            </div>

            <div className="objective-card">
              <FaTools />
              <p>Continuously improve operational processes and performance</p>
            </div>

            <div className="objective-card">
              <FaCheckCircle />
              <p>Comply with applicable industry regulations and standards</p>
            </div>

            <div className="objective-card">
              <FaAward />
              <p>Promote professionalism, accountability, and teamwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="quality-section alt-bg">
        <div className="container">
          <div className="section-header">
            <span>Quality Assurance</span>
            <h2>Quality Assurance Standards</h2>
          </div>

          <p className="quality-text">
            Our quality assurance processes are designed to ensure that all materials, equipment, and services meet approved standards before, during, and after
            project execution.
          </p>

          <div className="quality-list">
            <div className="quality-item">
              <FaCheckCircle />
              <span>Strict inspection and testing procedures</span>
            </div>

            <div className="quality-item">
              <FaCheckCircle />
              <span>Quality control checks at every project stage</span>
            </div>

            <div className="quality-item">
              <FaCheckCircle />
              <span>Skilled workforce supervision</span>
            </div>

            <div className="quality-item">
              <FaCheckCircle />
              <span>Continuous monitoring and evaluation</span>
            </div>

            <div className="quality-item">
              <FaCheckCircle />
              <span>Compliance with client specifications and project requirements</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS IMPROVEMENT */}
      <section className="quality-section">
        <div className="container">
          <div className="section-header">
            <span>Growth & Innovation</span>
            <h2>Continuous Improvement</h2>
          </div>

          <p className="quality-text">
            We believe that excellence is a continuous process. Through staff development, process evaluation, innovation, and client feedback, we consistently
            improve our systems and service delivery standards.
          </p>
        </div>
      </section>

      {/* CLIENT SATISFACTION */}
      <section className="quality-section alt-bg">
        <div className="container">
          <div className="section-header">
            <span>Client Focus</span>
            <h2>Client Satisfaction</h2>
          </div>

          <p className="quality-text">
            Our success is measured by the confidence and satisfaction of our clients. We are dedicated to building long-term relationships through integrity,
            transparency, reliability, and exceptional project performance.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="quality-objectives">
        <div className="container">
          <div className="section-header center">
            <span>Why Choose Us</span>
            <h2>Why Clients Trust Our Quality Standards</h2>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <FaUsers />
              <p>Experienced Technical Team</p>
            </div>

            <div className="objective-card">
              <FaCheckCircle />
              <p>Reliable Service Delivery</p>
            </div>

            <div className="objective-card">
              <FaShieldAlt />
              <p>Industry Best Practices</p>
            </div>

            <div className="objective-card">
              <FaAward />
              <p>Commitment to Excellence</p>
            </div>

            <div className="objective-card">
              <FaClipboardCheck />
              <p>Quality-Focused Operations</p>
            </div>

            <div className="objective-card">
              <FaTools />
              <p>Efficient Project Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="quality-closing">
        <div className="container quality-closing__container">
          <h2>Let’s Deliver Quality Together</h2>

          <p>Partner with a team committed to excellence, precision, and reliable project execution.</p>

          <div className="quality-hero__buttons">
            <Link to="/contact" className="btn primary">
              Start a Project
            </Link>

            <Link to="/contact" className="btn secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualityPolicy;
