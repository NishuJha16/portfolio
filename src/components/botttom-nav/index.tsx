import "./index.style.scss";
import HomeIcon from "../../assets/bottom-home.svg";
import ProfileIcon from "../../assets/bottom-profile.svg";
import TechstackIcon from "../../assets/bottom-techstack.svg";
import ProjectIcon from "../../assets/bottom-projects.svg";
import AboutIcon from "../../assets/bottom-about.svg";

const bottomNavOptions = [
  { id: "home", name: "Home", icon: HomeIcon },
  { id: "about", name: "About", icon: AboutIcon },
  { id: "techstack", name: "techStack", icon: TechstackIcon },
  { id: "projects", name: "projects", icon: ProjectIcon },
  { id: "contact", name: "contact", icon: ProfileIcon },
];

const BottomNav = ({ activeNav, handleClick }: any) => {
  return (
    <div className={activeNav!=="home"?"bottom-nav slide":"bottom-nav"}>
      {bottomNavOptions?.map((nav: any, index: number) => (
        <div
          onClick={() => handleClick(nav.id)}
          key={index}
          className={activeNav === nav.id ? "active nav" : "nav"}
        >
          <img src={nav.icon} className="icon" alt=""/>
        </div>
      ))}
    </div>
  );
};
export default BottomNav;
