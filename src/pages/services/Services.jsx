import ContactHome from '../../components/ContactHome';
import OtherBanners from '../../components/OtherBanners';
import './services.css';
import ServicesSection from './ServicesSection';

const Services = () => {
  return (
    <>
      <OtherBanners title="Services" quote="Reliable solutions engineered for performance." />
      <ServicesSection />
      <ContactHome />
    </>
  );
};

export default Services;
