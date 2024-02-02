import "./TimelinePage.scss";
import { projects } from "../../db/projects";
import { experience } from "../../db/experience";
import { education } from "../../db/education";
import { certifications } from "../../db/certifications";
import { dateSorter } from "../../components/DateSorter";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";

const TimelinePage = () => {
  const [typesfilter, setTypesFilter] = useState({
    projects: true,
    experience: true,
    education: true,
    certifications: true,
  });

  const [techsFilter, setTechsFilter] = useState([]);

  // ARRAY WITH ALL THE DATA - ADDED TYPE TO DATA
  const dataWithType = (data, type) => {
    return data.map((array) => {
      return { ...array, type };
    });
  };

  const projectsWithType = dataWithType(projects, "projects");
  const experienceWithType = dataWithType(experience, "experience");
  const educationWithType = dataWithType(education, "education");
  const certificationsWithType = dataWithType(certifications, "certifications");

  const data = [
    ...projectsWithType,
    ...experienceWithType,
    ...educationWithType,
    ...certificationsWithType,
  ];

  // SORT ARRAY BY DATE
  const dataSorted = dateSorter(data);

  // TECHS ARRAY
  const techsArray = () => {
    let allTechs = new Set();

    dataSorted.forEach((data) => {
      const techs = data.techs;

      techs?.forEach((tech) => {
        allTechs.add(tech);
      });
    });

    return Array.from(allTechs);
  };
  techsArray();

  // FILTER ARRAY BY TYPE AND TECHS
  const handleTypeChange = (type) => {
    setTypesFilter((filter) => ({
      ...filter,
      [type]: !filter[type], // change selected type to false
    }));
  };

  const handleTechsChange = (tech) => {
    setTechsFilter((filter) => ({
      ...filter,
      techs: filter.techs.includes(tech)
        ? filter.techs.filter((otherTechs) => otherTechs !== tech) // filter out other techs
        : [...filter.techs, tech],
    }));
  };

  const dataFiltered = dataSorted.filter((element) => {
    const types = typesfilter[element.type]; // changes the state for the selected type
    const techs =
      techsFilter.length === 0 ||
      (element.techs &&
        element.techs.some((tech) => techsFilter.includes(tech)));

    return types && techs;
  });

  // COLORS PER TYPE
  const getColorClass = (type, category) => {
    return `${type}-${category}`;
  };

  const nameColors = (type) => getColorClass(type, "name");
  const techColors = (type) => getColorClass(type, "tech");

  return (
    <div id="box">
      <div className="table-box">
        <section>
          <Link to="/" id="back">
            <FaArrowLeftLong size={12} />
            <p>back to homepage</p>
          </Link>
        </section>

        <section>
          <h1>My timeline</h1>
        </section>

        <section className="filters"></section>

        <table className="table">
          <thead>
            <tr>
              <th className="head-date">Date</th>
              <th className="head-name">Name</th>
              <th className="head-place">Place</th>
              <th className="head-techs">Tech Stack</th>
            </tr>
          </thead>

          <tbody>
            {dataSorted.map((element, index) => {
              return (
                <tr key={index}>
                  <td className="body-date">{element.date}</td>

                  <td className="body-name">
                    <a
                      href={element.link}
                      className={
                        element.link !== undefined &&
                        (element.type === "projects" ||
                          element.type === "certifications")
                          ? nameColors(element.type) + " body-link"
                          : ""
                      }
                    >
                      {element.name}
                      {element.link &&
                        (element.type === "projects" ||
                          element.type === "certifications") && (
                          <FaExternalLinkAlt size={8} />
                        )}
                    </a>
                  </td>

                  <td className="body-place">
                    <a
                      href={element.link}
                      className={
                        element.link !== undefined &&
                        (element.type === "experience" ||
                          element.type === "education")
                          ? nameColors(element.type) + " body-link"
                          : ""
                      }
                    >
                      {element.place}
                      {element.link &&
                        (element.type === "experience" ||
                          element.type === "education") && (
                          <FaExternalLinkAlt size={8} />
                        )}
                    </a>
                  </td>

                  <td className="body-techs">
                    {element.techs?.map((tech, index) => {
                      return (
                        <p id={techColors(element.type)} key={index}>
                          {tech}
                        </p>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimelinePage;
