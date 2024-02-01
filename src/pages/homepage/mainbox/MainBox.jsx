import "./MainBox.scss";
import tg from "../../../assets/tg.png";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const MainBox = () => {
  return (
    <div className="main-box">
      <section>
        <h1>TIAGO GIL</h1>
        <h2>Web Developer & Master Architect</h2>
      </section>

      <section>
        <img className="img" src={tg} alt="Tiago Gil" />
      </section>

      <section>
        <p className="text">
          As a Junior Full Stack Web Developer with a Master's in architecture,
          I leverage my problem-solving skills and keen attention to detail to
          create user-friendly web applications. My architectural background
          inspires a fusion between design thinking and analytical
          problem-solving, enabling me to craft innovative solutions that merge
          creativity, technology, and data.
        </p>
      </section>

      <section className="icons">
        <a href="https://www.linkedin.com/in/thetiagogil/" target="_blank">
          <FaLinkedin className="icon" size={25} />
        </a>
        <a href="https://github.com/thetiagogil" target="_blank">
          <FaGithub className="icon" size={25} />
        </a>
        <a href="https://www.facebook.com/thetiagogil/" target="_blank">
          <FaFacebook className="icon" size={25} />
        </a>
        <a href="https://www.instagram.com/thetiagogil/" target="_blank">
          <FaInstagram className="icon" size={25} />
        </a>
      </section>
    </div>
  );
};

export default MainBox;
