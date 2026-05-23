import './partnership.css';
import ContactHome from '../../components/ContactHome';
import OtherBanners from '../../components/OtherBanners';
import { Link } from 'react-router-dom';

const Partnership = () => {
  return (
    <section className="partnership">
      {/* HERO SECTION */}
      {/* <div className="partnership__hero">
        <div className="container partnership__hero-container">
          <p className="section__tag">Strategic Partnerships</p>

          <h1>Building Stronger Solutions Through Collaboration</h1>

          <p className="hero__text">
            Degrills Integrated Services Limited works with trusted industry partners to expand technical capabilities, improve project delivery, and support
            complex industrial operations across Nigeria.
          </p>

          <div className="partnership__hero-buttons">
            <button className="btn btn-primary">Become a Partner</button>
            <button className="btn btn-outline">Contact Our Team</button>
          </div>
        </div>
      </div> */}
      <OtherBanners title="Partnership" quote="Building Stronger Solutions Through Collaboration" />

      {/* INTRO SECTION */}
      <div className="partnership__intro section-space">
        <div className="container partnership__intro-container">
          <div className="partnership__intro-content">
            <p className="section__tag">Our Partnership Approach</p>

            <h2>Delivering Value Through Trusted Relationships</h2>

            <p>
              We believe successful project delivery is strengthened through collaboration with experienced technical partners and service providers who
              complement our operational capabilities.
            </p>

            <p>
              Our partnership model allows us to deliver broader engineering and industrial solutions while maintaining transparency, accountability, safety,
              and quality standards across every stage of project execution.
            </p>
          </div>

          <div className="partnership__intro-cards">
            <div className="intro__card">
              <h3>Technical Support</h3>
              <p>Access to specialised expertise and operational capabilities.</p>
            </div>

            <div className="intro__card">
              <h3>Operational Flexibility</h3>
              <p>Enhanced capacity for large-scale and multi-phase projects.</p>
            </div>

            <div className="intro__card">
              <h3>Reliable Delivery</h3>
              <p>Coordinated project execution with strong quality oversight.</p>
            </div>

            <div className="intro__card">
              <h3>Industry Compliance</h3>
              <p>Partnerships aligned with safety and operational standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW WE WORK */}
      <div className="partnership__work section-space">
        <div className="container">
          <div className="section__heading">
            <p className="section__tag">How We Work</p>

            <h2>Structured Collaboration for Successful Delivery</h2>

            <p>Our collaborative process is designed to ensure efficiency, accountability, and seamless coordination throughout every project.</p>
          </div>

          <div className="work__cards">
            <div className="work__card">
              <h3>Structured Agreements</h3>

              <p>Every collaboration is guided by clearly defined agreements that establish responsibilities, quality expectations, and project scope.</p>
            </div>

            <div className="work__card">
              <h3>Qualified Partners</h3>

              <p>We collaborate with experienced companies that demonstrate strong technical competence, HSE compliance, and operational reliability.</p>
            </div>

            <div className="work__card">
              <h3>Coordinated Execution</h3>

              <p>Our team oversees coordination and communication to ensure unified project delivery and consistent client support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERSHIP AREAS */}
      <div className="partnership__areas section-space">
        <div className="container">
          <div className="section__heading">
            <p className="section__tag">Partnership Areas</p>

            <h2>Where We Collaborate</h2>

            <p>We maintain strategic relationships across multiple operational and technical areas to strengthen service delivery and project support.</p>
          </div>

          <div className="areas__cards">
            <div className="areas__card">
              <h3>Specialized Technical Services</h3>

              <p>Collaboration with technical experts and specialist service providers for advanced engineering and industrial scopes.</p>
            </div>

            <div className="areas__card">
              <h3>Equipment & Operational Support</h3>

              <p>Access to additional industrial equipment and operational resources required for efficient project execution.</p>
            </div>

            <div className="areas__card">
              <h3>Technical Expertise</h3>

              <p>Support from experienced specialists, consultants, and technical professionals across diverse project requirements.</p>
            </div>

            <div className="areas__card">
              <h3>Capacity Expansion</h3>

              <p>Scalable project support through coordinated partnerships for larger operations and increased execution capacity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="partnership__cta">
        <div className="container partnership__cta-container">
          <p className="section__tag">Partnership Opportunities</p>

          <h2>Let's Build Stronger Solutions Together</h2>

          <p>
            We welcome collaboration with companies and technical specialists who share our commitment to quality delivery, safety, integrity, and operational
            excellence.
          </p>

          <div className="partnership__hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Become a Partner
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
      <ContactHome />
    </section>
  );
};

export default Partnership;
