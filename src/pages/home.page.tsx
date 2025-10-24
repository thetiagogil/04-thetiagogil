import { MainContainer } from "@/components/layout/main-container";
import { HomeContentSection } from "@/components/sections/home/home-content-section";
import { HomeInfoSection } from "@/components/sections/home/home-info-section";
import { Stack } from "@mui/joy";

export const HomePage = () => {
  return (
    <MainContainer>
      <Stack
        overflow="auto"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent={{ xs: "normal", lg: "space-between" }}
        gap={{ xs: 6, lg: 10 }}
      >
        <HomeInfoSection />
        <HomeContentSection />
      </Stack>
    </MainContainer>
  );
};
