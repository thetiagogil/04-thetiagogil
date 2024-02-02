import "./TimelinePage.scss";
import { projects } from "../../db/projects";
import { experience } from "../../db/experience";
import { education } from "../../db/education";
import { certifications } from "../../db/certifications";
import { dateSorter } from "../../components/DateSorter";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const TimelinePage = () => {
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

        <table className="table">
          <thead>
            <tr>
              <th className="head-date">Date</th>
              <th className="head-name">Name</th>
              <th className="head-place">Place</th>
              <th className="head-techs">Stack Tech</th>
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
