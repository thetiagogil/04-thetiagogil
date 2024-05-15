import { Stack } from "@mui/joy";
import { Section1, Section2, Section3, Section4, Section5 } from "./components/index";

const MainBox = () => {
  return <Stack sx={{ maxWidth: { xs: "90%", lg: "600px" }, gap: 4 }}>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Stack>;
};

export default MainBox;
