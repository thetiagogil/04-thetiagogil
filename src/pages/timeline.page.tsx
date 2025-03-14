import { Link, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link as ReactLink } from "react-router-dom";
import { TimelineCategoriesFilter } from "../components/sections/timeline-categories-filter";
import { TimelineTable } from "../components/sections/timeline-table";
import { TimelineTechsFilter } from "../components/sections/timeline-techs-filter";
import { MainContainer } from "../components/shared/main-container";
import { CategoryType } from "../configs/contants";
import { certifications } from "../db/certifications";
import { education } from "../db/education";
import { experience } from "../db/experience";
import { projects } from "../db/projects";

export const TimelinePage = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [techs, setTechs] = useState<string[]>([]);
  const data = [...experience, ...projects, ...education, ...certifications];

  return (
    <MainContainer>
      <Stack gap={{ xs: 6, md: 4 }}>
        <Stack component="section" alignItems={{ xs: "center", lg: "baseline" }}>
          <Link
            component={ReactLink}
            to="/home"
            underline="none"
            startDecorator={<FaArrowLeftLong size={12} />}
            fontSize={14}
            textColor="neutral.low"
          >
            back to homepage
          </Link>

          <Typography level="h1" fontWeight={700}>
            My timeline
          </Typography>
        </Stack>

        <Stack
          component="section"
          alignItems="center"
          height={40}
          width="100%"
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", lg: "left" }}
          gap={2}
        >
          <TimelineCategoriesFilter categories={categories} setCategories={setCategories} />
          <TimelineTechsFilter data={data} techs={techs} setTechs={setTechs} />
        </Stack>

        <TimelineTable data={data} categories={categories} techs={techs} />
      </Stack>
    </MainContainer>
  );
};
