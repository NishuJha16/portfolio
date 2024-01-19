import "./index.style.scss";
import ACADUP from "../../assets/acadup.jpeg";
import EXPENSE from "../../assets/expense.jpeg";
import SLOTIFY from "../../assets/slotify.jpeg";
import CONNECT from "../../assets/connect.jpeg";
import CODITAS from "../../assets/coditas.jpg";
import ACADUP_LOGO from "../../assets/android-app.png";
import EXPENSE_MANAGER from "../../assets/android-app.png";
import TASK_MANGER from "../../assets/task-manager.png";
import WEATHER_APP from "../../assets/weather-app.png";
import SHORTLY from "../../assets/shortly.png";
import GO_VAHAN from "../../assets/landing-page.png";
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
  {
    id: 5,
    name: "Octom",
    icon: TASK_MANGER,
    category: TASK_MANGER,
    link:"https://task-manager-dashboard-liard.vercel.app/",
    description:
      "A task management dashboard with analytics,theme-switching options and tools avaialble to manage tasks at one place. I have used React.js, Tailwind css and Mui for theme switching functionality.",
  },
  {
    id: 6,
    name: "Weather App",
    icon: WEATHER_APP,
    category: WEATHER_APP,
    link:"https://weather-app-nishujha16.vercel.app/",
    description:
      "A weather application built with React provides a user-friendly interface for accessing current weather information. Leveraging React's component-based architecture, the app dynamically displays real-time weather data, including temperature, humidity, and wind speed. Users can easily search for and view weather details for specific locations. The application utilizes state management for seamless updates and responsiveness, ensuring a smooth user experience. With a clean and intuitive design, the React-based weather app offers a straightforward way for users to stay informed about the weather conditions in their desired locations.",
  },
  {
    id: 7,
    name: "Go vahan",
    icon: GO_VAHAN,
    category: GO_VAHAN,
    link:"https://govahan.vercel.app/",
    description:
      "A React-based transportation website's landing page offers a sleek and responsive interface, utilizing components for dynamic content showcasing services, pricing, and contact details. Real-time updates and smooth transitions enhance user experience, while interactive elements encourage exploration. The design prioritizes simplicity, providing visitors with an efficient introduction to the transportation services offered.",
  },
  {
    id:8,
    name:"Shortly",
    icon:SHORTLY,
    link:"https://shortly-lac-five.vercel.app/",
    category:SHORTLY,
    description:"A React-powered URL shortening website delivers a user-friendly experience, allowing seamless input and instant generation of shortened links. The intuitive interface, coupled with React's real-time updates, ensures efficient URL management. The design prioritizes simplicity, making the process quick and straightforward for users."
  }
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
            {project?.link && <a href={project.link} target="_blank">Live Demo</a>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
