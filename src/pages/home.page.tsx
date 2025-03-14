import { HomeContentSection } from "../components/sections/home-content-section";
import { HomeInfoSection } from "../components/sections/home-info-section";
import { MainContainer } from "../components/shared/main-container";

export const HomePage = () => {
  return (
    <MainContainer
      fullheight
      sx={{
        height: { xs: "100%", lg: "100vh" },
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: { xs: "normal", lg: "space-between" },
        overflow: "auto",
        gap: { xs: 6, lg: 10 }
      }}
    >
      <HomeInfoSection />
      <HomeContentSection />
    </MainContainer>
  );
};
