import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection";
import CoursesSection from "../components/CoursesSection";
import ContactSection from "../components/ContactSection";
import Abouts from "../components/Abouts"
import Hire from "../components/Hire";
import YouTubeVideos from "../components/YouTubeVideos";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Abouts />
      <CoursesSection />
        <ServicesSection />
        <Hire />
        <YouTubeVideos />
      <ContactSection />
    </>
  );
};

export default Home;
