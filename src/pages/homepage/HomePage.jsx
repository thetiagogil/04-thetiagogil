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
        <ul id="nav">
          <li>Projects</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Certifications</li>
        </ul>

        <div id="content">
          {/* PROJECTS */}
          <Content type="projects" props={projects} />

          {/* EXPERIENCE */}
          <Content type="experience" props={experience} />

          {/* EDUCATION */}
          <Content type="education" props={education} />

          {/* CERTIFICATIONS */}
          <Content type="certifications" props={certifications} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
