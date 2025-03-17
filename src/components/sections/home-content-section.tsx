import { List, Stack, Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { useMemo } from "react";
import { categoriesIds } from "../../configs/categories-ids";
import { CategoryType } from "../../configs/contants";
import { useLanguageContext } from "../../contexts/language.context";
import { certifications } from "../../db/certifications";
import { education } from "../../db/education";
import { experience } from "../../db/experience";
import { projects } from "../../db/projects";
import { DataModel } from "../../models/data.model";
import { CardContent } from "../shared/card-content";

type TabDataProps = { label: string; category: CategoryType; data: DataModel[] };

export const HomeContentSection = () => {
  const { t } = useLanguageContext();

  const tabData: TabDataProps[] = useMemo(
    () => [
      { label: t("experience"), category: "experience", data: experience },
      { label: t("projects"), category: "projects", data: projects },
      { label: t("education"), category: "education", data: education },
      { label: t("certifications"), category: "certifications", data: certifications }
    ],
    [t]
  );

  return (
    <Tabs defaultValue={0} sx={{ bgcolor: "transparent", width: "100%", overflowY: "auto" }}>
      <TabList
        sx={{
          justifyContent: "center",
          [`&& .${tabClasses.root}`]: {
            color: "neutral.low",
            bgcolor: "transparent",
            transition: "0.3s",
            "&:hover": { color: "neutral.high", bgcolor: "transparent" },
            [`&.${tabClasses.selected}`]: { color: "neutral.high" }
          }
        }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 700 }}>
            {tab.label}
          </Tab>
        ))}
      </TabList>

      {tabData.map((tab, index) => {
        const filteredData = useMemo(() => {
          return tab.data
            .filter(element => categoriesIds(tab.category).includes(Number(element.id)))
            .sort((a, b) => new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime());
        }, [tab.data, tab.category]);

        return (
          <TabPanel key={index} value={index} sx={{ overflowY: "auto", p: 0 }}>
            <Stack pt={2}>
              <List sx={{ gap: 6 }}>
                {filteredData.map((element, index) => (
                  <CardContent key={index} element={element} category={tab.category} />
                ))}
              </List>
            </Stack>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};
