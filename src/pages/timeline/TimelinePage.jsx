import { Stack } from "@mui/joy";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const TimelinePage = () => {
  return (
    <Stack
      sx={{
        height: { xs: "100%", lg: "100vh" },
        py: { xs: 5, lg: 10 },
        alignItems: "center",
      }}
    >
      <Stack sx={{ maxWidth: "1360px" }}>
        <Section1 />
        <Section2 />
      </Stack>
    </Stack>
  );
};

export default TimelinePage;
