import { Link, Stack, Typography } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { projects, experience, education, certifications } from "../db/index";
import { TimelineTable } from "../components/shared/timeline-table";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TimelineFilterTypes } from "../components/shared/timeline-filter-types";
import { TimelineFilterTechs } from "../components/shared/timeline-filter-techs";

export const TimelinePage = () => {
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
      <Stack sx={{ maxWidth: { xs: "100%", md: "1200px" }, gap: 4 }}>
        <Stack
          component="section"
          sx={{ alignItems: { xs: "center", lg: "baseline" } }}
        >
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            startDecorator={<FaArrowLeftLong size={12} />}
            sx={{
              color: "primary.white3",
              fontSize: "14px",
              transition: "0.3s",
              "&:hover": {
                color: "primary.white",
              },
            }}
          >
            <Typography>back to homepage</Typography>
          </Link>

          <Typography level="h1">My timeline</Typography>
        </Stack>

        <Stack component="section" sx={{ alignItems: "center" }}>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", lg: "left" },
              width: { xs: "90%", lg: "100%" },
              gap: 2,
            }}
          >
            <TimelineFilterTypes data={data} setTypesFilter={setTypesFilter} />
            <TimelineFilterTechs data={data} setTechsFilter={setTechsFilter} />
          </Stack>
        </Stack>

        <TimelineTable
          data={data}
          typesFilter={typesFilter}
          techsFilter={techsFilter}
        />
      </Stack>
    </Stack>
  );
};
