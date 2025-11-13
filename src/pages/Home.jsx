import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection";
import CoursesSection from "../components/CoursesSection";
import ContactSection from "../components/ContactSection";
import Abouts from "../components/Abouts"
const Home = () => {
  return (
    <>
      <HeroSection />
      <Abouts />
      <CoursesSection />
        <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
