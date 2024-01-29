import "./HomePage.scss";
import Content from "../../components/Content";
import { projects } from "../../db/projects";
import { experience } from "../../db/experience";
import { education } from "../../db/education";
import { certifications } from "../../db/certifications";

const HomePage = () => {
  return (
    <div id="box">
      <div id="main-box">
        <h1>TIAGO GIL</h1>
        <h2>Web Developer & Master Architect</h2>
      </div>

      <div id="content-box">
        <div>
          <ul id="nav">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#certifications">Certifications</a>
            </li>
          </ul>
        </div>

        <div id="content">
          <section id="projects">
            <Content type="projects" props={projects} />
          </section>

          <div id="line"></div>

          <section id="experience">
            <Content type="experience" props={experience} />
          </section>

          <div id="line"></div>

          <section id="education">
            <Content type="education" props={education} />
          </section>

          <div id="line"></div>

          <section id="certifications">
            <Content type="certifications" props={certifications} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
