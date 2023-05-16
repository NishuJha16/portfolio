import "./index.style.scss";
import ACADUP from "../../assets/acadup.jpeg";
import EXPENSE from "../../assets/expense.jpeg";
import SLOTIFY from "../../assets/slotify.jpeg";
import CONNECT from "../../assets/connect.jpeg";
import CODITAS from "../../assets/coditas.jpg";
import ACADUP_LOGO from "../../assets/android-app.png";
import EXPENSE_MANAGER from "../../assets/android-app.png";
import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/userOnscreen";

const projectsData = [
  {
    id: 1,
    name: "AcadUp",
    category: ACADUP_LOGO,
    icon: ACADUP,
    description:
      "It is an android application made via Android studio, Java and Firebase for authentication and Data storage. The purpose is basically to make an e-learning platform where the user can find the recorded videos, notes, quizes and even schedule demo for live classes.",
  },
  {
    id: 2,
    name: "Expense Manager",
    icon: EXPENSE,
    category: EXPENSE_MANAGER,
    description:
      "An Android application used to manage the user’s daily expenses in a more efficient way. Adding budget, categorizing expenses and getting the stastics and figures for a particular period of time is the main key feature of this application.",
  },
  {
    id: 3,
    name: "Slotify",
    icon: SLOTIFY,
    category: CODITAS,
    description:
      "Company's internal app using React for managing and automating interview process for interviews right from panel to recruiter's end.During this I get to know navigation, reusable components, styling, boilerplate and clean code",
  },
  {
    id: 4,
    name: "Connectsy",
    icon: CONNECT,
    category: CODITAS,
    description:
      "Web app using Next js for end to end communication between users. I have used socket.io/client for realtime chat and indexDb for storing messages on client side for prefetching and offline caching. Integrated backend that used Whatsapp business APIs to send ,receive and other operations on messages.",
  },
];

const Projects = ({ setActive }: any) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(projectRef);
  const [isVisited, setIsVisited] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && setActive("projects");
  }, [isVisible, setActive]);

  useEffect(() => {
    isVisible && setIsVisited(isVisible);
  }, [isVisible]);

  return (
    <div className="page-section" id="projects" ref={projectRef}>
      <div className={`about-title ${isVisited ? "slide-in" : ""}`}>
        PROJECTS
      </div>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div
            className={`project-card ${isVisited ? "slide-out" : ""}`}
            key={index}
          >
            <img src={project.category} className="card-logo" alt="img" />
            <img src={project.icon} alt="" className="card-image" />
            <div className="card-title">{project.name}</div>
            <div className="card-description">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
