import "./HomePage.scss";
import MainBox from "./mainbox/MainBox";
import ContentBox from "./contentbox/ContentBox";

const HomePage = () => {
  return (
    <div id="box">
      <MainBox />

      <ContentBox />
    </div>
  );
};

export default HomePage;
