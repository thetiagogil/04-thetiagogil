import "./Content.scss";

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
    <ol id="elements">
      {filteredData.map((element) => {
        return (
          <li id="element" key={element.id}>
            <div id="content-left">
              {type === "projects" ? element.img : element.date}
            </div>

            <div id="content-right">
              <div id="title-box">
                <a id="title" href={element.link}>
                  {element.name}
                </a>
                <p id="year">{type === "projects" ? element.date : null}</p>
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
          </li>
        );
      })}
    </ol>
  );
};

export default Content;
