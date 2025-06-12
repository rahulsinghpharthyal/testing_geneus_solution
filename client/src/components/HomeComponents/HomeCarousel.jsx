import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/HomeCarousel.css"; // External CSS file
import img1 from "../../assets/crousel_01.jpg";
import img2 from "../../assets/crousel_02.jpg";
import img3 from "../../assets/crousel_03.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auth/authSlice";

const carouselData = [
  {
    title: "Get educated online from your home",
    subtitle: "Best Online Course",
    description:
      "Provides the best contents for learning in an affordable price.",
    image: img1,
    // buttonName: "Signup",
    // path: "/login",
  },
  {
    title: "Learn at your own pace",
    subtitle: "Flexible Learning",
    description:
      "Discover thousands of courses from expert instructors worldwide",
    image: img2,
    buttonName: "Courses",
    path: "/courses",
  },
  {
    title: "Advance your career",
    subtitle: "Professional Development",
    description:
      "Gain new skills and certifications to boost your career prospects",
    image: img3,
    buttonName: "Nutri App",
    path: "/nutri-app",
  },
];

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const user = useSelector(selectCurrentUser);
  console.log(user);

  return (
    <div className="home-carousel-container">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className="home-carousel-slide">
            <img src={item.image} alt={item.title} className="home-carousel-image" />
            <div/>
            <div className="home-carousel-content">
              <h3 className="home-carousel-subtitle">{item.subtitle}</h3>
              <h2 className="home-carousel-title">{item.title}</h2>
              <p className="home-description">{item.description}</p>
              {item.buttonName && ( // Conditional rendering
              <Link to={item.path} className="home-carousel-button">
                {item.buttonName}
              </Link>
              )}

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
