import { Link, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link as ReactLink } from "react-router-dom";
import { certifications } from "../api/certifications";
import { education } from "../api/education";
import { experience } from "../api/experience";
import { projects } from "../api/projects";
import { MainContainer } from "../components/layout/main-container";
import { TimelineCategoriesFilter } from "../components/sections/timeline/timeline-categories-filter";
import { TimelineTable } from "../components/sections/timeline/timeline-table";
import { TimelineTechsFilter } from "../components/sections/timeline/timeline-techs-filter";
import { useLanguageContext } from "../contexts/language.context";
import { DataCategory } from "../types/common";

export const TimelinePage = () => {
  const { t } = useLanguageContext();
  const [categories, setCategories] = useState<DataCategory[]>([]);
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
            {t("backToHome")}
          </Link>

          <Typography level="h1" fontWeight={700}>
            {t("timeline_title")}
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
