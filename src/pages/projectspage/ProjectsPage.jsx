import "./ProjectsPage.scss";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProjectsPage = () => {
  return (
    <div id="box">
      <div id="table-box">
        <section>
          <Link to="/" id="back">
            <FaArrowLeftLong size={12} />
            <p>back to homepage</p>
          </Link>
        </section>

        <section>
          <h1 id="title">My timeline</h1>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
