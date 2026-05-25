import AchievmentBanner from '../../components/AchievmentBanner';
import NewsSection from '../../components/NewsSection';
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
      <NewsSection />
    </>
  );
};

export default Home;
