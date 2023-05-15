import { useState } from "react";
import BottomNav from "../../components/botttom-nav";
import "./index.style.scss";
import Header from "../../components/header";
import About from "../../components/about";
import TechStack from "../../components/techstacks";
import Projects from "../../components/projects";
import ContactUs from "../../components/contact";

const Home = () => {
  const [active, setActive] = useState<string>("home");
  const handleActiveIndexChange = (id: string) => {
    setActive(id);
    console.log(id)
  };
  const scrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  console.log(active)
  return (
    <div className="portfolio">
      <Header setActive={handleActiveIndexChange} />
      <About setActive={handleActiveIndexChange} />
      <TechStack setActive={handleActiveIndexChange} />
      <Projects setActive={handleActiveIndexChange} />
      <ContactUs setActive={handleActiveIndexChange} />
      <BottomNav activeNav={active} handleClick={scrollToDiv} />
    </div>
  );
};
export default Home;
