import { List, Stack, Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { useMemo } from "react";
import { categoriesIds } from "../../configs/categories-ids";
import { CATEGORIES_TYPES } from "../../configs/contants";
import { certifications } from "../../db/certifications";
import { education } from "../../db/education";
import { experience } from "../../db/experience";
import { projects } from "../../db/projects";
import { DataModel } from "../../models/data.model";
import { ContentCard } from "../shared/content-card";

type TabDataProps = { label: string; category: CATEGORIES_TYPES; data: DataModel[] };

const tabData: TabDataProps[] = [
  { label: "Experience", category: "experience", data: experience },
  { label: "Projects", category: "projects", data: projects },
  { label: "Education", category: "education", data: education },
  { label: "Certifications", category: "certifications", data: certifications }
];

export const HomeContentSection = () => {
  return (
    <Stack width={{ xs: "100%", lg: 600 }}>
      <Tabs defaultValue={0} sx={{ bgcolor: "transparent", overflowY: "auto" }}>
        <TabList
          sx={{
            justifyContent: "center",
            [`&& .${tabClasses.root}`]: {
              color: "neutral.light",
              bgcolor: "transparent",
              transition: "0.3s",
              "&:hover": { color: "neutral.lightest", bgcolor: "transparent" },
              [`&.${tabClasses.selected}`]: { color: "neutral.lightest" }
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
              <Stack sx={{ gap: 6, py: 4 }}>
                <List sx={{ gap: 6 }}>
                  {filteredData.map((element, index) => {
                    return <ContentCard key={index} element={element} category={tab.category} />;
                  })}
                </List>
              </Stack>
            </TabPanel>
          );
        })}
      </Tabs>
    </Stack>
  );
};
