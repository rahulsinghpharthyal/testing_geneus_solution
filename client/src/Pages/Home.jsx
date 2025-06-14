import AboutUs from "../components/HomeComponents/AboutUs";
// import OurServices from "../components/HomeComponents/OurServices";
import DigitalLearning from "../components/HomeComponents/DigitalLearning";
import PopularCourses from "../components/HomeComponents/PopularCourse/PopularCourses";
import MentorCourse from "../components/HomeComponents/MentorCourse";
import OurServices from "./OurServices2";
import CoreOffering from "../components/HomeComponents/CoreOffering";
import Testimonials from "../components/HomeComponents/Testimonials";
const Home = () => {

  return (
    <div>
      {/* <HomeCarousel/> */}

      {/* New component */}
      <DigitalLearning/>

      <AboutUs />

      {/* <OurServices/>   */}
      <OurServices/>

      {/* <PopularCourse /> */}
      <PopularCourses/>
      <MentorCourse/>
      <CoreOffering/>
      <Testimonials/>
      {/* <Heilight /> */}
    </div>
  );
};

export default Home;
