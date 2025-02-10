import { Stack } from "@mui/joy";
import { HomeContentSection } from "../components/sections/home-content-section";
import { HomeInfoSection } from "../components/sections/home-info-section";

export const HomePage = () => {
  return (
    <Stack
      height={{ xs: "100%", lg: "100vh" }}
      direction={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "normal", lg: "center" }}
      alignItems={{ xs: "center", lg: "normal" }}
      px={{ xs: 2, sm: 4, md: 6, lg: 8 }}
      py={{ xs: 4, lg: 10 }}
      gap={{ xs: 8, lg: 16 }}
    >
      <HomeInfoSection />
      <HomeContentSection />
    </Stack>
  );
};
