import { List, Stack, Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { useMemo } from "react";
import { certifications, education, experience, projects } from "../../../api";
import { useLanguageContext } from "../../../contexts/language.context";
import { categoriesIds } from "../../../lib/categories-ids";
import { DataCategory } from "../../../types/common";
import { Data } from "../../../types/data";
import { CardContent } from "../../shared/card-content";

type TabDataProps = { label: string; category: DataCategory; data: Data[] };

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
