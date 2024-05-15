import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { sortDate } from "../../../components/variables/sortDate";
import { capFirstLetter } from "../../../components/variables/capFirstLetter";
import { projects } from "../../../db/projects";
import { experience } from "../../../db/experience";
import { education } from "../../../db/education";
import { certifications } from "../../../db/certifications";
import ChipTech from "../../../components/layout/Chip";
import {
  hoverColor,
  fillColor,
} from "../../../components/variables/typeColors";
import {
  Checkbox,
  Stack,
  Select,
  Box,
  Chip,
  Option,
  Table,
  Link,
  Typography,
} from "@mui/joy";

const Section2 = () => {
  const [typesFilter, setTypesFilter] = useState({
    projects: true,
    experience: true,
    education: true,
    certifications: true,
  });

  const [techsFilter, setTechsFilter] = useState([]);

  // ARRAY WITH ALL THE DATA - ADDED TYPE TO DATA
  const dataWithType = (data, type) => {
    return data.map((array) => {
      return { ...array, type };
    });
  };

  const projectsWithType = dataWithType(projects, "projects");
  const experienceWithType = dataWithType(experience, "experience");
  const educationWithType = dataWithType(education, "education");
  const certificationsWithType = dataWithType(certifications, "certifications");

  const data = [
    ...projectsWithType,
    ...experienceWithType,
    ...educationWithType,
    ...certificationsWithType,
  ];

  // SORT ARRAY BY DATE
  const dateSorted = sortDate(data);

  // TECHS ARRAY
  const typesArray = () => {
    let allTypes = new Set();

    data.forEach((data) => {
      const type = data.type;
      allTypes.add(type);
    });

    return Array.from(allTypes);
  };

  const techsArray = () => {
    let allTechs = new Set();

    data.forEach((data) => {
      const techs = data.techs;

      techs?.forEach((tech) => {
        allTechs.add(tech);
      });
    });

    return Array.from(allTechs).sort((a, b) => a.localeCompare(b));
  };

  // FILTER ARRAY BY TYPE AND TECHS
  const handleTypeChange = (type) => {
    setTypesFilter((obj) => ({
      ...obj,
      [type]: !obj[type], // change selected type to false
    }));
  };

  const handleTechsChange = (event, value) => {
    setTechsFilter(value);
  };

  const dataFiltered = dateSorted.filter((element) => {
    const types = typesFilter[element.type];

    const techs =
      techsFilter.length === 0 ||
      (element.techs &&
        techsFilter.every((selectedTech) =>
          element.techs.includes(selectedTech)
        ));

    return types && techs;
  });

  return (
    <Stack component="section">
      {/* FILTERS */}
      <Stack
        component="section"
        sx={{ flexDirection: "row", alignItems: "center", gap: 8 }}
      >
        <Stack sx={{ flexDirection: "row", gap: 4 }}>
          {/* TYPE FILTER */}
          {typesArray().map((type, index) => (
            <Checkbox
              key={index}
              variant="soft"
              defaultChecked
              onChange={() => handleTypeChange(type)}
              label={capFirstLetter(type)}
              sx={{
                color: "primary.white",
                "& .MuiCheckbox-checkbox": {
                  ...fillColor(type),
                  "&:hover": {
                    ...fillColor(type),
                  },
                },
              }}
            />
          ))}
        </Stack>

        {/* TECHS FILTER */}
        <Select
          multiple
          defaultValue={[]}
          placeholder="Choose a tech..."
          onChange={handleTechsChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", gap: 1 }}>
              {selected.map((selectedOption, index) => (
                <Chip
                  key={index}
                  variant="soft"
                  sx={{
                    color: "primary.white",
                    bgcolor: "primary.lighterDarkBlue",
                  }}
                >
                  {selectedOption.label}
                </Chip>
              ))}
            </Box>
          )}
          sx={{
            minWidth: "240px",
            bgcolor: "transparent",
            borderColor: "primary.white3",
            "&:hover": { bgcolor: "transparent", opacity: "0.8" },
          }}
        >
          {techsArray().map((tech, index) => (
            <Option key={index} value={tech}>
              {tech}
            </Option>
          ))}
        </Select>
      </Stack>

      {/* TABLE */}
      <Table
        sx={{
          width: "100%",
          mt: 8,
          fontSize: "14px",
          th: {
            bgcolor: "transparent",
            color: "primary.white",
          },
          td: {
            py: 2,
            verticalAlign: "top",
          },
          "& th:nth-of-type(1)": {
            width: "15%",
          },
          "& th:nth-of-type(2)": {
            width: "20%",
          },
          "& th:nth-of-type(3)": {
            width: "30%",
          },
          "& th:nth-of-type(4)": {
            width: "35%",
          },
          "& td:nth-of-type(1)": {
            color: "primary.white3",
          },
          "& td:nth-of-type(2)": {
            color: "primary.white",
          },
          "& td:nth-of-type(3)": {
            color: "primary.white3",
          },
          "& td:nth-of-type(4)": {
            color: "primary.white",
          },
        }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Place</th>
            <th>Tech Stack</th>
          </tr>
        </thead>

        <tbody>
          {dataFiltered.map((element, index) => {
            return (
              <tr key={index}>
                {/* DATE */}
                <td>{element.date}</td>

                {/* NAME */}
                <td>
                  {element.link !== undefined &&
                  (element.type === "projects" ||
                    element.type === "certifications") ? (
                    <Link
                      href={element.link}
                      underline="none"
                      sx={{
                        color: "primary.white",
                        transition: "0.3s",
                        ...hoverColor(element.type),
                      }}
                    >
                      <Typography>
                        {element.name} <FaExternalLinkAlt size={8} />
                      </Typography>
                    </Link>
                  ) : (
                    <Typography>{element.name}</Typography>
                  )}
                </td>

                {/* PLACE */}
                <td>
                  {element.link !== undefined &&
                  (element.type === "experience" ||
                    element.type === "education") ? (
                    <Link
                      href={element.link}
                      underline="none"
                      sx={{
                        color: "primary.white3",
                        transition: "0.3s",
                        ...hoverColor(element.type),
                      }}
                    >
                      <Typography>
                        {element.place} <FaExternalLinkAlt size={8} />
                      </Typography>
                    </Link>
                  ) : (
                    <Typography>{element.place}</Typography>
                  )}
                </td>

                {/* TECHS */}
                <td>
                  {element.techs?.map((tech, index) => {
                    return (
                      <ChipTech tech={tech} type={element.type} key={index} />
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Stack>
  );
};

export default Section2;
