import { Stack } from "@mui/joy";
import LeftSection from "./leftsection/LeftSection";
import RightSection from "./rightsection/RightSection";

const HomePage = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        py: 10,
        justifyContent: "center",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <LeftSection />
      <RightSection />
    </Stack>
  );
};

export default HomePage;
