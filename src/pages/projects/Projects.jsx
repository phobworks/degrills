import ContactHome from '../../components/ContactHome';
import OtherBanners from '../../components/OtherBanners';
import ProjectPagination from './ProjectPagination';
import './projects.css';

const Projects = () => {
  return (
    <>
      <OtherBanners title="Projects" />
      <div className="services__section">
        <div className="services__container container">
          <div className="services__content">
            <p className="p-orange">Proven Through Delivery</p>
            <h2>Projects Built on Precision and Reliability</h2>
            <p className="p-orange">
              Our project portfolio reflects our commitment to quality workmanship, operational excellence, and timely delivery across diverse industrial
              sectors.
            </p>
          </div>
        </div>
      </div>
      <ProjectPagination />
      <ContactHome />
    </>
  );
};

export default Projects;
