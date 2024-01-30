import "./HomePage.scss";
import React from "react";
import MainBox from "../../components/mainbox/MainBox";
import ContentBox from "../../components/contentbox/ContentBox";

const HomePage = () => {
  return (
    <div id="box">
      <MainBox />

      <ContentBox />
    </div>
  );
};

export default HomePage;
