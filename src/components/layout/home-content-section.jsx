import { List, Stack, Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { certifications, education, experience, projects } from "../../db/index";
import { ContentCard } from "../shared/content-card";
import { desiredIds } from "../variables/desiredIds";

const tabData = [
  { label: "Projects", type: "projects", data: projects },
  { label: "Experience", type: "experience", data: experience },
  { label: "Education", type: "education", data: education },
  { label: "Certifications", type: "certifications", data: certifications }
];

export const HomeContentSection = () => {
  return (
    <Stack sx={{ maxWidth: { xs: "100%", lg: "600px" } }}>
      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: "transparent",
          overflowY: "auto"
        }}
      >
        <TabList
          sx={{
            justifyContent: "center",
            [`&& .${tabClasses.root}`]: {
              color: "primary.white3",
              bgcolor: "transparent",
              transition: "0.3s",
              "&:hover": {
                color: "primary.white2",
                bgcolor: "transparent"
              },
              [`&.${tabClasses.selected}`]: {
                color: "primary.white"
              }
            }
          }}
        >
          {tabData.map((tab, index) => (
            <Tab key={index} sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: "700" }}>
              {tab.label}
            </Tab>
          ))}
        </TabList>

        {tabData.map((tab, index) => {
          const filteredData = tab.data
            .filter(element => {
              return desiredIds(tab.type).includes(Number(element.id));
            })
            .sort((a, b) => b.id - a.id);
          return (
            <TabPanel key={index} value={index} sx={{ overflowY: "auto", p: 0 }}>
              <Stack sx={{ gap: 6, py: 4 }}>
                <List sx={{ gap: 6 }}>
                  {filteredData.map((element, index) => {
                    return <ContentCard key={index} element={element} type={tab.type} />;
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
