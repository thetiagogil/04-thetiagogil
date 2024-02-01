import "./Content.scss";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Content = ({ type, props }) => {
  // FILTER ELEMENTS SHOWN FROM DB
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

  const filteredData = props
    .filter((element) => {
      return desiredIds.includes(Number(element.id));
    })
    .sort((a, b) => b.id - a.id);

  // COLORS PER TYPE
  const getColorClass = (type, category) => {
    return `${type}-${category}`;
  };

  const nameColors = (type) => getColorClass(type, "name");
  const techColors = (type) => getColorClass(type, "tech");
  const linkColors = (type) => getColorClass(type, "link");

  return (
    <>
      <ol className="elements">
        {filteredData.map((element) => {
          return (
            <li key={element.id}>
              <a className="element link" href={element.link} target="_blank">
                <div className="content-left">
                  {type === "projects" && element.img ? (
                    <img className="img" src={element.img} alt={element.name} />
                  ) : type === "projects" && !element.img ? null : (
                    element.date
                  )}
                </div>

                <div className="content-right">
                  <div className="name-box">
                    <p className={nameColors(type)}>
                      {element.name}
                      {element.link && <FaExternalLinkAlt size={8} />}
                    </p>
                    <p className="date">
                      {type === "projects" ? element.date : null}
                    </p>
                  </div>

                  <p className="place">{element.place}</p>

                  <p className="place">{element.subject}</p>

                  <p className="description">{element.description}</p>

                  <ul className="techs">
                    {element.techs?.map((tech, index) => {
                      return (
                        <p id={techColors(type)} key={index}>
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

      <Link className={linkColors(type)} to="/projects">
        <p>Check out my timeline</p>
        <FaArrowRightLong size={12} />
      </Link>
    </>
  );
};

export default Content;
