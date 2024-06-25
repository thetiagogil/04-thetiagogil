import { Stack } from "@mui/joy";
import { HomeInfoSection } from "../components/shared/home-info-section";
import { HomeContentSection } from "../components/shared/home-content-section";

export const HomePage = () => {
  return (
    <Stack
      sx={{
        height: { xs: "100%", lg: "100vh" },
        py: { xs: 4, lg: 10 },
        justifyContent: { xs: "normal", lg: "center" },
        alignItems: { xs: "center", lg: "normal" },
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: 8, lg: 16 },
      }}
    >
      <HomeInfoSection />
      <HomeContentSection />
    </Stack>
  );
};
