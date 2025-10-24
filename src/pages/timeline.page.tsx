import { MainContainer } from "@/components/layout/main-container";
import { TimelineCategoriesFilter } from "@/components/sections/timeline/timeline-categories-filter";
import { TimelineTable } from "@/components/sections/timeline/timeline-table";
import { TimelineTechsFilter } from "@/components/sections/timeline/timeline-techs-filter";
import { certifications, education, experience, projects } from "@/database";
import { useLanguageContext } from "@/hooks/use-language-context";
import type { DataCategoryType } from "@/types/common";
import { Link, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link as ReactLink } from "react-router-dom";

export const TimelinePage = () => {
  const { t } = useLanguageContext();
  const [categories, setCategories] = useState<DataCategoryType[]>([]);
  const [techs, setTechs] = useState<string[]>([]);
  const data = [...experience, ...projects, ...education, ...certifications];

  const footnotes: Record<string, Record<string, string>> = {
    outdated: { icon: "~", text: t("statusOutdated") },
    inactive: { icon: "†", text: t("statusInactive") },
  };

  return (
    <MainContainer>
      <Stack overflow="hidden" gap={{ xs: 6, md: 4 }}>
        <Stack
          component="section"
          alignItems={{ xs: "center", lg: "baseline" }}
        >
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
          <TimelineCategoriesFilter
            categories={categories}
            setCategories={setCategories}
          />
          <TimelineTechsFilter data={data} techs={techs} setTechs={setTechs} />
        </Stack>

        <Stack
          component="section"
          overflow="auto"
          alignItems={{ xs: "center", lg: "baseline" }}
          gap={4}
        >
          <TimelineTable
            data={data}
            categories={categories}
            techs={techs}
            footnotes={footnotes}
          />
        </Stack>

        <Stack width="100%">
          {Object.values(footnotes).map((footnote, index) => (
            <Stack key={index} direction="row">
              <Stack width={20} textAlign="center">
                <Typography textColor="warning.500">{footnote.icon}</Typography>
              </Stack>

              <Typography key={index} level="body-sm">
                {footnote.text.toLocaleLowerCase()}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MainContainer>
  );
};
