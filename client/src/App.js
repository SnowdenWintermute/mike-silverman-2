import { BrowserRouter as Router } from "react-router-dom";
import ProjectCard from "./components/cards/ProjectCard/ProjectCard";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Section from "./components/layout/Section/Section";
import Snow from "./components/Snow/Snow";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Section title="Projects" id="projects">
          <ProjectCard
            title="lucella.org"
            image={"./img/projects/lucella_img.png"}
            logo={"./img/project logos/lucella.png"}
            description="A competitive multiplayer game"
            link={"https://lucella.org/"}
            gitHubLink={"https://github.com/SnowdenWintermute/lucella"}
          />
          <ProjectCard
            title="mcguffsilverman.com"
            image={"./img/projects/ecommerce_img.png"}
            logo={"./img/project logos/mcguffsilverman.png"}
            description="A custom ecommerce site for fine art"
            link={"https://ecommerce.mike-silverman.com/"}
            gitHubLink={
              "https://github.com/SnowdenWintermute/ellen-silverman-v3"
            }
          />
          <ProjectCard
            title="React RPG"
            image={"./img/projects/rpg_img.png"}
            logo={"./img/project logos/reactrpg.png"}
            description="A roguelike clicker game"
            link={"https://rpg.mike-silverman.com/"}
            gitHubLink={"https://github.com/SnowdenWintermute/React-RPG"}
          />
        </Section>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
