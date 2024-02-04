import "./TimelinePage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { dateSorter } from "../../components/dateSorter";
import {
  nameColors,
  techColors,
  circleColors,
} from "../../components/colorClass";
import { capFirstLetter } from "../../components/capFirstLetter";
import { projects } from "../../db/projects";
import { experience } from "../../db/experience";
import { education } from "../../db/education";
import { certifications } from "../../db/certifications";

const TimelinePage = () => {
  const [typesFilter, setTypesFilter] = useState({
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
  const typesArray = () => {
    let allTypes = new Set();

    console.log('data :>> ', data);

    data.forEach((data) => {
      const type = data.type;
      allTypes.add(type);
    });

    return Array.from(allTypes);
  };

  const techsArray = () => {
    let allTechs = new Set();

    data.forEach((data) => {
      const techs = data.techs;

      techs?.forEach((tech) => {
        allTechs.add(tech);
      });
    });

    return Array.from(allTechs);
  };

  // FILTER ARRAY BY TYPE AND TECHS
  const handleTypeChange = (type) => {
    setTypesFilter((filter) => ({
      ...filter,
      [type]: !filter[type], // change selected type to false
    }));
  };

  const handleTechsChange = (tech) => {
    setTechsFilter((filter) => {
      if (filter.includes(tech)) {
        return filter.filter((otherTechs) => otherTechs !== tech);
      } else {
        return [...filter, tech];
      }
    });
  };

  const dataFiltered = dataSorted.filter((element) => {
    const types = typesFilter[element.type]; // changes the state for the selected type
    const techs =
      techsFilter.length === 0 ||
      (element.techs &&
        element.techs.some((tech) => techsFilter.includes(tech)));

    return types && techs;
  });

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

        <section className="filters">
          {typesArray().map((type, index) => (
            <label
              key={index}
              className={`checkbox ${typesFilter[type] ? "active" : ""}`}
            >
              <input
                type="checkbox"
                checked={typesFilter[type]}
                onChange={() => handleTypeChange(type)}
              />
              <span className={`checkbox-circle ${circleColors(type)}`}></span>
              <p>{capFirstLetter(type)}</p>
            </label>
          ))}
        </section>

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
            {dataFiltered.map((element, index) => {
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
