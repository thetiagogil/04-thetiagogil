import "./TimelinePage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { sortData } from "../../components/sortData";
import { capFirstLetter } from "../../components/capFirstLetter";
import { projects } from "../../db/projects";
import { experience } from "../../db/experience";
import { education } from "../../db/education";
import { certifications } from "../../db/certifications";
import { customSelectStyles } from "../../components/customSelectStyles";
import {
  nameColors,
  techColors,
  circleColors,
} from "../../components/colorClass";

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
  const dataSorted = sortData(data);

  // TECHS ARRAY
  const typesArray = () => {
    let allTypes = new Set();

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

    return Array.from(allTechs).sort((a, b) => a.localeCompare(b));
  };

  // FILTER ARRAY BY TYPE AND TECHS
  const handleTypeChange = (type) => {
    setTypesFilter((obj) => ({
      ...obj,
      [type]: !obj[type], // change selected type to false
    }));
  };

  const handleTechsChange = (tech) => {
    const selectedTechs = tech.map((option) => option.value);
    setTechsFilter(selectedTechs);
  };

  const dataFiltered = dataSorted.filter((element) => {
    const types = typesFilter[element.type];

    const techs =
      techsFilter.length === 0 ||
      (element.techs &&
        techsFilter.every((selectedTech) =>
          element.techs.includes(selectedTech)
        ));

    return types && techs;
  });

  return (
    <div id="box">
      <div className="table-box">
        {/* BACK BUTTON */}
        <section>
          <Link to="/" id="back">
            <FaArrowLeftLong size={12} />
            <p>back to homepage</p>
          </Link>
        </section>

        {/* TITLE */}
        <section>
          <h1>My timeline</h1>
        </section>

        {/* FILTERS */}
        <section className="filters">
          {/* TYPE FILTER */}
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
              <span className={`checkbox-circle ${circleColors(type)}`}>{typesFilter[type] ? "✔" : null}</span>
              <p>{capFirstLetter(type)}</p>
            </label>
          ))}

          {/* TECHS FILTER */}
          <Select
            isMulti
            defaultValue={[]}
            placeholder="Filter by Tech..."
            closeMenuOnSelect={false}
            options={techsArray().map((tech, index) => ({
              value: tech,
              label: tech,
              key: index,
            }))}
            onChange={(options) => handleTechsChange(options)}
            styles={customSelectStyles}
          />
        </section>

        {/* TABLE */}
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
                  {/* DATE */}
                  <td className="body-date">{element.date}</td>

                  {/* NAME */}
                  <td className="body-name">
                    {element.link !== undefined &&
                    (element.type === "projects" ||
                      element.type === "certifications") ? (
                      <a
                        href={element.link}
                        className={nameColors(element.type) + " body-link"}
                      >
                        <p>
                          {element.name} <FaExternalLinkAlt size={8} />
                        </p>
                      </a>
                    ) : (
                      <p>{element.name}</p>
                    )}
                  </td>

                  {/* PLACE */}
                  <td className="body-place">
                    {element.link !== undefined &&
                    (element.type === "experience" ||
                      element.type === "education") ? (
                      <a
                        href={element.link}
                        className={nameColors(element.type) + " body-link"}
                      >
                        <p>
                          {element.place} <FaExternalLinkAlt size={8} />
                        </p>
                      </a>
                    ) : (
                      <p>{element.place}</p>
                    )}
                  </td>

                  {/* TECHS */}
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
