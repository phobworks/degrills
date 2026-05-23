import AchievmentBanner from '../../components/AchievmentBanner';
import AboutHome from './AboutHome';
import './home.css';
import HomeBanner from './HomeBanner';
import ServicesHome from './ServicesHome';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AchievmentBanner />
      <AboutHome />
      <ServicesHome />
      <WhyChoose />
    </>
  );
};

export default Home;
