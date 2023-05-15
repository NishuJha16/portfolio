import "./index.style.scss";
import HTML from "../../assets/html5.png";
import CSS from "../../assets/css.png";
import SASS from "../../assets/sass.png";
import REACT from "../../assets/react.png";
import REDUX from "../../assets/redux.png";
import NEXT from "../../assets/nextjs.png";
import JAVASCRIPT from "../../assets/javascript.png";
import TYPESCRIPT from "../../assets/typescript.png";
import GITLAB from "../../assets/gitlab.png";
import FIREBASE from "../../assets/firebase.png";
import ANDROID from "../../assets/android.png";
import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/userOnscreen";

const techstackData = [
  { id: 1, name: "HTML5", icon: HTML },
  { id: 2, name: "CSS3", icon: CSS },
  { id: 1, name: "SASS", icon: SASS },
  { id: 1, name: "Javascript", icon: JAVASCRIPT },
  { id: 1, name: "Typescript", icon: TYPESCRIPT },
  { id: 1, name: "React", icon: REACT },
  { id: 1, name: "Redux", icon: REDUX },
  { id: 1, name: "Next JS", icon: NEXT },
  { id: 1, name: "Gitlab", icon: GITLAB },
  { id: 1, name: "Firebase", icon: FIREBASE },
  { id: 1, name: "Android", icon: ANDROID },
];

const TechStack = ({ setActive }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [isVisited, setIsVisited] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && setActive("techstack");
  }, [isVisible, setActive]);

  useEffect(()=>{
    isVisible && setIsVisited(isVisible);
  },[isVisible]);
  return (
    <div className="page-section" id="techstack" ref={ref}>
      <div className={`about-title ${isVisited ? 'slide-in' : ''}`}>TECHSTACKS</div>
      <div className="techstacks">
        {techstackData.map((techstack, index) => (
          <div className={`tech-card ${isVisited ? 'slide-in' : ''}`} key={index}>
            <img src={techstack.icon} alt="" className="tech-icon" />
            <div className="tech-name">{techstack.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;
