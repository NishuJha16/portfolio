import "./index.style.scss";
import Engineer from "../../assets/programmer.svg";
import Coder from "../../assets/coder.svg";
import Alternate from "../../assets/alternate.svg";
import UserPhoto from "../../assets/photograph.jpeg";
import Camera from "../../assets/photographer.svg";
import useOnScreen from "../../hooks/userOnscreen";

import { useEffect, useRef, useState } from "react";

const aboutContent = [
  {
    id: 1,
    title: "Software Engineer",
    icon: Engineer,
    description: "An engineer by a chance, a programmer by the choice",
  },
  {
    id: 2,
    title: "Passionate Coder",
    icon: Coder,
    description:
      "Passionate about bleeding edge technologies and their what-about!",
  },
  {
    id: 3,
    title: "Alternate Believer",
    icon: Alternate,
    description:
      "I always believe there are multiple ways to solve a single problem",
  },
  {
    id: 4,
    title: "Photographer",
    icon: Camera,
    description: "Click!! Capturing the moments that captivate your heart.",
  },
];

const About = ({ setActive }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [isVisited, setIsVisited] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && setActive("about");
  }, [isVisible, setActive]);

  useEffect(()=>{
    isVisible && setIsVisited(isVisible);
  },[isVisible]);

  return (
    <div className="page-section" id="about" ref={ref}>
      <div className={`about-title ${isVisited ? 'slide-in' : ''}`}>ABOUT</div>
      <div className="divider"></div>
      <div className="about-content">
        {aboutContent.map((content, index) => (
          <div className="about-card" key={index}>
            <div className="card-img">
              <img src={content.icon} alt="" />
            </div>
            <div className="card-title">{content.title}</div>
            <div className="card-desciption">{content.description}</div>
          </div>
        ))}
      </div>
      <div className="personal">
        <div className="section">
          <div className="section-image">
            <img
              className="profile-image"
              alt="img"
              src={UserPhoto}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">Who am I ?</div>
          <div className="description">
            I'm Associate Software Engineer at 
            <a href="https://coditas.com/" target="_blank" rel="noreferrer">
              {` Coditas `}
            </a>
             in Pune, IN.
          </div>
          <div className="description">
            I'm just a living organism that turns your ideas into products
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
