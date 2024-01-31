import "./Content.scss";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Content = ({ type, props }) => {
  const desiredIds = (() => {
    switch (type) {
      case "projects":
        return [0, 1, 2]; // <== change this values for PROJECTS
      case "education":
        return [0, 1, 2]; // <== change this values for EDUCATION
      case "experience":
        return [0, 1, 2]; // <== change this values for EXPERIENCE
      case "certifications":
        return [0, 1, 2]; // <== change this values for CERTIFICATIONS
      default:
        return null;
    }
  })();

  const filteredData = props.filter((element) => {
    return desiredIds.includes(Number(element.id));
  });

  return (
    <>
      <ol id="elements">
        {filteredData.map((element) => {
          return (
            <li key={element.id}>
              <a
                id="element"
                href={element.link}
                target="_blank"
                className="link"
              >
                <div id="content-left">
                  {type === "projects" && element.img ? (
                    <img id="img" src={element.img} alt={element.name} />
                  ) : type === "projects" && !element.img ? null : (
                    element.date
                  )}
                </div>

                <div id="content-right">
                  <div id="name-box">
                    <p id="name" className="element-name">
                      {element.name}{" "}
                      {element.link && <FaExternalLinkAlt size={8} />}
                    </p>
                    <p id="date">{type === "projects" ? element.date : null}</p>
                  </div>

                  <p id="description">{element.description}</p>

                  <ul id="techs">
                    {element.techs?.map((tech, index) => {
                      return (
                        <p id="tech" key={index}>
                          {tech}
                        </p>
                      );
                    })}
                  </ul>
                </div>
              </a>
            </li>
          );
        })}
      </ol>

      {type === "projects" ? (
        <Link id="link" to="/projects">
          <p>View all my projects</p>
          <FaExternalLinkAlt size={8} style={{ verticalAlign: "top" }} />
        </Link>
      ) : null}
    </>
  );
};

export default Content;
