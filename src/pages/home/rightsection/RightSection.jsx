import { Stack, Tab, TabList, TabPanel, Tabs, tabClasses } from "@mui/joy";
import Content from "./components/Content";
import {
  projects,
  experience,
  education,
  certifications,
} from "../../../db/index";

const tabData = [
  { label: "Projects", type: "projects", data: projects },
  { label: "Experience", type: "experience", data: experience },
  { label: "Education", type: "education", data: education },
  { label: "Certifications", type: "certifications", data: certifications },
];

const ContentBox = () => {
  return (
    <Stack sx={{ maxWidth: "35rem" }}>
      <Tabs
        defaultValue={0}
        sx={{
          backgroundColor: "transparent",
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
            <Tab key={index} sx={{fontWeight: '700'}}>{tab.label}</Tab>
          ))}
        </TabList>

        {tabData.map((tab, index) => (
          <TabPanel key={index} value={index} sx={{ overflowY: "auto" }}>
            <Content type={tab.type} props={tab.data} />
          </TabPanel>
        ))}
      </Tabs>
    </Stack>
  );
};

export default ContentBox;
