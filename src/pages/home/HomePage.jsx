import { Stack } from "@mui/joy";
import LeftSection from "./leftsection/LeftSection";
import RightSection from "./rightsection/RightSection";

const HomePage = () => {
  return (
    <Stack
      sx={{
        height: { xs: "100%", lg: "100vh" },
        py: {xs: 5, lg: 10},
        justifyContent: { xs: "normal", lg: "center" },
        alignItems: { xs: "center", lg: "normal" },
        flexDirection: { xs: "column", lg: "row" },
        gap: {xs: 8, lg: 16},
      }}
    >
      <LeftSection />
      <RightSection />
    </Stack>
  );
};

export default HomePage;
