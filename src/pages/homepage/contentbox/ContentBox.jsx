import "./ContentBox.scss";
import Content from "./Content";
import { projects } from "../../../db/projects";
import { experience } from "../../../db/experience";
import { education } from "../../../db/education";
import { certifications } from "../../../db/certifications";
import { useState } from "react";

const ContentBox = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content-box">
      <div>
        <ul className="nav">
          <li className={activeTab === "projects" ? "active" : ""}>
            <a href="#projects" onClick={() => handleTabClick("projects")}>
              Projects
            </a>
          </li>

          <li className={activeTab === "experience" ? "active" : ""}>
            <a href="#experience" onClick={() => handleTabClick("experience")}>
              Experience
            </a>
          </li>

          <li className={activeTab === "education" ? "active" : ""}>
            <a href="#education" onClick={() => handleTabClick("education")}>
              Education
            </a>
          </li>

          <li className={activeTab === "certifications" ? "active" : ""}>
            <a
              href="#certifications"
              onClick={() => handleTabClick("certifications")}
            >
              Certifications
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <section
          className="projects"
          style={{ display: activeTab === "projects" ? "block" : "none" }}
        >
          <Content type="projects" props={projects} />
        </section>

        <section
          className="experience"
          style={{ display: activeTab === "experience" ? "block" : "none" }}
        >
          <Content type="experience" props={experience} />
        </section>

        <section
          className="education"
          style={{ display: activeTab === "education" ? "block" : "none" }}
        >
          <Content type="education" props={education} />
        </section>

        <section
          className="certifications"
          style={{
            display: activeTab === "certifications" ? "block" : "none",
          }}
        >
          <Content type="certifications" props={certifications} />
        </section>
      </div>
    </div>
  );
};

export default ContentBox;
