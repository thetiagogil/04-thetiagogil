import { Stack, Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import { ContentCard } from "./content-card";
import {
  projects,
  experience,
  education,
  certifications,
} from "../../db/index";

const tabData = [
  { label: "Projects", type: "projects", data: projects },
  { label: "Experience", type: "experience", data: experience },
  { label: "Education", type: "education", data: education },
  { label: "Certifications", type: "certifications", data: certifications },
];

export const HomeContentSection = () => {
  return (
    <Stack sx={{ maxWidth: { xs: "90%", lg: "600px" } }}>
      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: "transparent",
          overflowY: "auto",
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
                bgcolor: "transparent",
              },
              [`&.${tabClasses.selected}`]: {
                color: "primary.white",
              },
            },
          }}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: "700" }}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        {tabData.map((tab, index) => (
          <TabPanel key={index} value={index} sx={{ overflowY: "auto", p: 0 }}>
            <ContentCard type={tab.type} props={tab.data} />
          </TabPanel>
        ))}
      </Tabs>
    </Stack>
  );
};
