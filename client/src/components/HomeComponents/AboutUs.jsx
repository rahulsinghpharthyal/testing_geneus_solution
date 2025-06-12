// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
// import img1 from "../../assets/banner2.jpeg";
// // Styled components
// const SectionContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   gap: theme.spacing(8),
//   padding: theme.spacing(6),
//   maxWidth: "1200px",
//   margin: "0 auto",
//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     padding: theme.spacing(4),
//   },
// }));

// const ContentContainer = styled(Box)(({ theme }) => ({
//   flex: 1,
//   maxWidth: "500px",
// }));

// const MoreButton = styled(Button)(({ theme }) => ({
//   backgroundColor: "#00b0ff",
//   color: "white",
//   padding: "12px 24px",
//   borderRadius: theme.shape.borderRadius,
//   textTransform: "none",
//   fontSize: "1rem",
//   "&:hover": {
//     backgroundColor: "#0081cb",
//   },
// }));

// const AboutUs = () => {
//   const [showFullText, setShowFullText] = useState(false);
//   return (
//     <SectionContainer>
//       <ContentContainer>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ marginRight: "10px" }}>About Us</h1>
//           <div
//             className="line"
//             style={{ display: "flex", flexDirection: "column" }}
//           >
//             <div
//               className="line1"
//               style={{
//                 width: "150px",
//                 height: "5px", // Height to define the line thickness
//                 backgroundColor: "#00b0ff",
//                 marginRight: "10px", // Space between the first and second lines
//                 marginBottom: "5px", // Space between the first and second lines
//               }}
//             ></div>
//             <div
//               className="line1"
//               style={{
//                 width: "100px",
//                 height: "5px", // Height to define the line thickness
//                 backgroundColor: "#00b0ff",
//                 marginRight: "10px", // Second line color
//               }}
//             ></div>
//           </div>
//         </div>
//         <Typography
//           variant="body1"
//           sx={{ mb: 4, color: "text.secondary", lineHeight: 1.7 }}
//         >
//           Welcome to Geneus Solutions, your premier destination for cutting-edge
//           E-learning courses in full-stack development. Based in Bangalore,
//           India, we are passionate about empowering individuals to become
//           proficient and versatile developers in the ever-evolving field of
//           technology.{" "}
//           {showFullText && (
//             <span>
//               At Geneus Solutions, we offer comprehensive courses covering
//               HTML/CSS/Javascript, ReactJS and the complete MERN stack. Our
//               dynamic and hands-on approach ensures that students not only grasp
//               the theoretical foundations but also gain practical skills that
//               are essential in the real-world scenario.
//             </span>
//           )}
//         </Typography>
//         <MoreButton
//           variant="contained"
//           endIcon={
//             showFullText ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />
//           }
//           onClick={() => setShowFullText(!showFullText)}
//         >
//           {showFullText ? "Less" : "More"}
//         </MoreButton>
//       </ContentContainer>

//       <iframe
//         width="600"
//         height="337"
//         src="https://www.youtube.com/embed/2eTIgVyBnNg?rel=0&controls=0&showinfo=0&modestbranding=1"
//         frameBorder="0"
//         title="about us"
//         allowFullScreen
//       ></iframe>
//     </SectionContainer>
//   );
// };

// export default AboutUs;

import React, { useState } from "react";
import "./AboutUs.css";
import { useLocation, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <section className="about-us">
        <div className="about-content">
          <h2 className="heading">About Us</h2>
          <p className="aboutus-description">
            Welcome to Geneus Solutions, your premier destination for
            cutting-edge E-learning courses in full-stack development. Based in
            Bangalore, India, we are passionate about empowering individuals to
            become proficient and versatile developers in the ever-evolving
            field of technology.
          </p>

          {expanded && (
            <p className="more-content">
              At Geneus Solutions, we offer comprehensive courses covering
              HTML/CSS/Javascript, ReactJS and the complete MERN stack. Our
              dynamic and hands-on approach ensures that students not only grasp
              the theoretical foundations but also gain practical skills that
              are essential in the real-world scenario.
            </p>
          )}

          <button className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Read Less" : "Read More"}
          </button>
          {expanded && location?.pathname !== "/about" && (
            <button
              className="btn"
              onClick={() => {
                if (expanded) {
                  navigate("/about");
                }
              }}
            >
              {expanded ? "Know More" : ""}
            </button>
          )}
        </div>

        <div className="video-container">
          <iframe
            className="about-video"
            width="600"
            height="337"
            src="https://www.youtube.com/embed/2eTIgVyBnNg?rel=0&controls=0&showinfo=0&modestbranding=1"
            title="about us"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
