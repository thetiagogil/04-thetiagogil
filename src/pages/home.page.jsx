import { Stack } from "@mui/joy";
import { HomeContentSection } from "../components/layout/home-content-section";
import { HomeInfoSection } from "../components/layout/home-info-section";

export const HomePage = () => {
  return (
    <Stack
      sx={{
        height: { xs: "100%", lg: "100vh" },
        py: { xs: 4, lg: 10 },
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
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
