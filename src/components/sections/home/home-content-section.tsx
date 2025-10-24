import { CardContent } from "@/components/shared/card-content";
import { certifications, education, experience, projects } from "@/database";
import { useLanguageContext } from "@/hooks/use-language-context";
import { categoriesIds } from "@/lib/categories-ids";
import type { DataCategoryType } from "@/types/common";
import type { DataType } from "@/types/data";
import {
  List,
  Stack,
  Tab,
  tabClasses,
  TabList,
  TabPanel,
  Tabs,
} from "@mui/joy";

type TabDataProps = {
  label: string;
  category: DataCategoryType;
  data: DataType[];
};

export const HomeContentSection = () => {
  const { t } = useLanguageContext();

  const tabData: TabDataProps[] = [
    { label: t("experience"), category: "experience", data: experience },
    { label: t("projects"), category: "projects", data: projects },
    { label: t("education"), category: "education", data: education },
    {
      label: t("certifications"),
      category: "certifications",
      data: certifications,
    },
  ];

  const filteredData = (tab: TabDataProps) => {
    return tab.data
      .filter((element) =>
        categoriesIds(tab.category).includes(Number(element.id))
      )
      .sort(
        (a, b) =>
          new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime()
      );
  };

  return (
    <Tabs defaultValue={0} sx={{ bgcolor: "transparent", width: "100%" }}>
      <TabList
        sx={{
          justifyContent: "center",
          [`&& .${tabClasses.root}`]: {
            color: "neutral.low",
            bgcolor: "transparent",
            transition: "0.3s",
            "&:hover": { color: "neutral.high", bgcolor: "transparent" },
            [`&.${tabClasses.selected}`]: { color: "neutral.high" },
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            sx={{ fontSize: { xs: 14, md: 16 }, fontWeight: 700 }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      {tabData.map((tab, index) => {
        return (
          <TabPanel key={index} value={index} sx={{ overflowY: "auto", p: 0 }}>
            <Stack pt={2}>
              <List sx={{ gap: { xs: 2, sm: 6 } }}>
                {filteredData(tab).map((element, index) => (
                  <CardContent
                    key={index}
                    element={element}
                    category={tab.category}
                  />
                ))}
              </List>
            </Stack>
          </TabPanel>
        );
      })}
    </Tabs>
  );
};
