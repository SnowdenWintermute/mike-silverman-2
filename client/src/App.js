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
            title="mcguffsilverman.com"
            image={"./img/projects/ecommerce_img.png"}
            logo={"./img/project logos/mcguffsilverman.png"}
            tagline="A custom ecommerce site for fine art"
            link={"https://ecommerce.mike-silverman.com/"}
            gitHubLink={
              "https://github.com/SnowdenWintermute/ellen-silverman-v3"
            }
            description="The third generation website created to sell my mom's paintings, this alternative to Shopify features the ability for the artist to upload their products' information from a .csv file and the images in bulk via a custom backend GUI. Users visiting the shop enjoy a full cart and checkout experience as well as order history and tracking. Also included is an <a href='https://ecommerce.mike-silverman.com/the-professor'>animated storybook</a> featuring the artist's paintings. If you are a potential employer wishing to test the backend GUI, contact me for an administrator login on my example site. Also view the live site at <a href='https://mcguffsilverman.com'>mcguffsilverman.com</a>"
          />
          <ProjectCard
            title="lucella.org"
            image={"./img/projects/lucella_img.png"}
            logo={"./img/project logos/lucella.png"}
            tagline="A competitive multiplayer game"
            link={"https://lucella.org/"}
            gitHubLink={"https://github.com/SnowdenWintermute/lucella"}
            description="A two-player real time strategy game with ranked matchmaking based on the Elo system, and a UI inspired by classic battle.net. You can also play casually without making an account. Built with React, Socket.IO, MongoDB and the Canvas API."
          />
          <ProjectCard
            title="React RPG"
            image={"./img/projects/rpg_img.png"}
            logo={"./img/project logos/reactrpg.png"}
            tagline="A roguelike clicker game"
            link={"https://rpg.mike-silverman.com/"}
            gitHubLink={"https://github.com/SnowdenWintermute/React-RPG"}
            description="The first React.js project I spent a lot of time on. I did not yet understand how to reference code in separate files, nor did I have any knowledge of state management with Redux so the App.js file is over 1800 lines of game logic. When I look back on this project I am amazed I was able to make something this complex with such a naive implementation. I still like to play this from time to time."
          />
          <ProjectCard
            title="mike-silverman.com"
            image={"./img/projects/mike_silverman.jpg"}
            logo={"./img/project logos/adjudant.png"}
            tagline="My portfolio"
            link={"https://mike-silverman.com/"}
            gitHubLink={"https://github.com/SnowdenWintermute/mike-silverman-2"}
            description="Your current location on the internet, featuring all custom components. The landing animation is a visual representation of <a href='https://en.wikipedia.org/wiki/Quadtree'>quadtrees</a>. Projects are hosted on a VPS with NGIИX."
          />
        </Section>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
