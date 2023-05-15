import "./index.style.scss";
import ACADUP from "../../assets/acadup.jpeg";
import EXPENSE from "../../assets/expense.jpeg";
import { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/userOnscreen";

const projectsData = [
  { id: 1, name: "AcadUp", icon: ACADUP, description: "It was a hybrid application made via react native. It shows near by restaurants , available food items in that restaurants and let user order those items in multiple quantity.It was a demo project,It is not connected with any server" },
  { id: 2, name: "Expense Manager", icon: EXPENSE, description: "It was a hybrid application made via react native. It shows near by restaurants , available food items in that restaurants and let user order those items in multiple quantity.It was a demo project,It is not connected with any server" },
  { id: 3, name: "AcadUp", icon: ACADUP, description: "It was a hybrid application made via react native. It shows near by restaurants , available food items in that restaurants and let user order those items in multiple quantity.It was a demo project,It is not connected with any server" },
  { id: 4, name: "AcadUp", icon: ACADUP, description: "It was a hybrid application made via react native. It shows near by restaurants , available food items in that restaurants and let user order those items in multiple quantity.It was a demo project,It is not connected with any server" },
  { id: 5, name: "AcadUp", icon: ACADUP, description: "It was a hybrid application made via react native. It shows near by restaurants , available food items in that restaurants and let user order those items in multiple quantity.It was a demo project,It is not connected with any server" },
  { id: 6, name: "AcadUp", icon: ACADUP, description: "It was a hybrid application made via react native. It shows near by restaurants , available food items in that restaurants and let user order those items in multiple quantity.It was a demo project,It is not connected with any server" },
];

const Projects = ({ setActive }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [isVisited, setIsVisited] = useState<boolean>(isVisible);

  useEffect(() => {
    isVisible && setActive("projects");
  }, [isVisible, setActive]);

  useEffect(() => {
    isVisible && setIsVisited(isVisible);
  }, [isVisible]);
  
  return (
    <div className="page-section" id="projects" ref={ref}>
      <div className={`about-title ${isVisited ? "slide-in" : ""}`}>
        PROJECTS
      </div>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div
            className={`project-card ${isVisited ? "slide-out" : ""}`}
            key={index}
          >
            <img src={project.icon} alt="" className="card-image"/>
            <div className="card-title">{project.name}</div>
            <div className="card-description">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
