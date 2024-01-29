const Content = ({ type, props }) => {
  const desiredIds = (() => {
    switch (type) {
      case "projects":
        return [0, 1, 2];
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
    <ul id="elements">
      {filteredData.map((element) => {
        return (
          <li id="element" key={element.id}>
            <div className="content-left">
              {type === "projects" ? element.img : element.date}
            </div>

            <div className="content-right">
              <div className="content-title-box">
                <a className="content-title" href={element.link}>
                  {element.name}
                </a>
                <p className="content-year">
                  {type === "projects" ? element.date : null}
                </p>
              </div>

              <p className="content-description">{element.description}</p>

              <ul className="content-techs">
                {element.techs?.map((tech, index) => {
                  return (
                    <p className="content-tech" key={index}>
                      {tech}
                    </p>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Content;
