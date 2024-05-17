import { Stack } from "@mui/joy";
import { Section1, Section2, Section3 } from "./components/index";
import { useState } from "react";
import {
  projects,
  experience,
  education,
  certifications,
} from "../../db/index";

const TimelinePage = () => {
  const [typesFilter, setTypesFilter] = useState([]);
  const [techsFilter, setTechsFilter] = useState([]);
  const data = [...projects, ...experience, ...education, ...certifications];

  return (
    <Stack
      sx={{
        height: { xs: "100%", lg: "100vh" },
        py: { xs: 4, lg: 10 },
        alignItems: "center",
      }}
    >
      <Stack
        sx={{ maxWidth: { xs: "100%", md: "1200px" }, gap: 4 }}
      >
        <Section1 />

        <Section2
          data={data}
          setTypesFilter={setTypesFilter}
          setTechsFilter={setTechsFilter}
          typesFilter={typesFilter}
          techsFilter={techsFilter}
        />
        <Section3
          data={data}
          typesFilter={typesFilter}
          techsFilter={techsFilter}
        />
      </Stack>
    </Stack>
  );
};

export default TimelinePage;
