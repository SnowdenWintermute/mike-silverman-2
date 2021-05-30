import { BrowserRouter as Router, } from "react-router-dom";
import ProjectCard from './components/cards/ProjectCard/ProjectCard';
import Nav from './components/layout/Header/Nav';
import Section from './components/layout/Section/Section';
import './css/main.css';

function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Section title="Projects">
          <ProjectCard title="lucella.org" image={'./img/projects/lucella_img.png'} description="A competitive multiplayer game" link={'https://lucella.org/'} />
          <ProjectCard title="mcguffsilverman.com" image={'./img/projects/ecommerce_img.png'} description="A custom ecommerce site for fine art" link={'https://ecommerce.mike-silverman.com/'} />
          <ProjectCard title="React RPG" image={'./img/projects/rpg_img.png'} description="Roguelike clicker game" link={'https://rpg.mike-silverman.com/'} />
        </Section>
      </Router>
    </div>
  );
}

export default App;
