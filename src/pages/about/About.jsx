import ContactHome from '../../components/ContactHome';
import OtherBanners from '../../components/OtherBanners';
import './about.css';
import AboutSection from './AboutSection';

const About = () => {
  return (
    <>
      <OtherBanners title="About" quote="Built on experience, driven by excellence." />
      <AboutSection />
      <ContactHome />
    </>
  );
};

export default About;
