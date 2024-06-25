import { Stack, Select, Box, Chip, Option } from "@mui/joy";
import { capFirstLetter } from "../variables/capFirstLetter";

export const TimelineFilters = ({ data, setTypesFilter, setTechsFilter }) => {
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

  const handleTypeChange = (event, value) => {
    setTypesFilter(value);
  };

  const handleTechsChange = (event, value) => {
    setTechsFilter(value);
  };

  return (
    <Stack component="section" sx={{ alignItems: "center" }}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", lg: "left" },
          width: { xs: "90%", lg: "100%" },
          gap: 2,
        }}
      >
        {/* TYPE FILTER */}
        <Select
          multiple
          defaultValue={[]}
          placeholder="Select a type..."
          onChange={handleTypeChange}
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
            width: { xs: "100%", lg: "40%" },
            bgcolor: "transparent",
            borderColor: "primary.white3",
            "&:hover": { bgcolor: "transparent", opacity: "0.8" },
          }}
        >
          {typesArray().map((type, index) => (
            <Option key={index} value={type}>
              {capFirstLetter(type)}
            </Option>
          ))}
        </Select>

        {/* TECHS FILTER */}
        <Select
          multiple
          defaultValue={[]}
          placeholder="Select a tech..."
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
            width: { xs: "100%", lg: "60%" },
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
    </Stack>
  );
};
