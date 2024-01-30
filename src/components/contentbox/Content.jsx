import { Link } from "react-router-dom";
import "./Content.scss";

import img01 from "../../assets/01-project.png"

const Content = ({ type, props }) => {
  const desiredIds = (() => {
    switch (type) {
      case "projects":
        return [0, 1, 2, 3, 4];
      case "education":
        return [0, 1, 2];
      case "experience":
        return [0, 1, 2];
      case "certifications":
        return [0, 1, 2];
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
                  {type === "projects" ? (
                    <img src="../../assets/01-project.png" />
                  ) : (
                    element.date
                  )}
                </div>

                <div id="content-right">
                  <div id="name-box">
                    <p id="name" className="element-name">
                      {element.name}
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
          View all my projects
        </Link>
      ) : null}
    </>
  );
};

export default Content;
