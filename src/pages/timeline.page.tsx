import { Link, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link as ReactLink } from "react-router-dom";
import { TimelineCategoriesFilter } from "../components/sections/timeline-categories-filter";
import { TimelineTable } from "../components/sections/timeline-table";
import { TimelineTechsFilter } from "../components/sections/timeline-techs-filter";
import { CATEGORIES_TYPES } from "../configs/contants";
import { certifications } from "../db/certifications";
import { education } from "../db/education";
import { experience } from "../db/experience";
import { projects } from "../db/projects";

export const TimelinePage = () => {
  const [categories, setCategories] = useState<CATEGORIES_TYPES[]>([]);
  const [techs, setTechs] = useState<string[]>([]);
  const data = [...experience, ...projects, ...education, ...certifications];

  return (
    <Stack height={{ xs: "100%", lg: "100vh" }} alignItems="center" py={{ xs: 4, lg: 10 }}>
      <Stack maxWidth={{ xs: "100%", md: 1200 }} gap={4}>
        <Stack component="section" alignItems={{ xs: "center", lg: "baseline" }}>
          <Link
            component={ReactLink}
            to="/"
            underline="none"
            startDecorator={<FaArrowLeftLong size={12} />}
            fontSize={14}
            textColor="neutral.light"
          >
            back to homepage
          </Link>

          <Typography level="h1" fontWeight={700}>
            My timeline
          </Typography>
        </Stack>

        <Stack component="section" alignItems="center">
          <Stack
            height={40}
            width={{ xs: "90%", lg: "100%" }}
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", lg: "left" }}
            gap={2}
          >
            <TimelineCategoriesFilter categories={categories} setCategories={setCategories} />
            <TimelineTechsFilter data={data} techs={techs} setTechs={setTechs} />
          </Stack>
        </Stack>

        <TimelineTable data={data} categories={categories} techs={techs} />
      </Stack>
    </Stack>
  );
};
