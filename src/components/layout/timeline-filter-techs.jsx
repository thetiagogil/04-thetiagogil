import {
  Stack,
  Select,
  Box,
  Chip,
  Option,
  List,
  ListItem,
  Typography,
  ListDivider,
} from "@mui/joy";
import { Fragment } from "react";
import { groupTechs } from "../variables/groupedTechsObject";

export const TimelineFilterTechs = ({ data, setTechsFilter }) => {
  const getTechsArray = () => {
    let allTechs = new Set();
    data.forEach((data) => {
      const techs = data.techs;
      techs?.forEach((tech) => {
        allTechs.add(tech);
      });
    });
    return Array.from(allTechs);
  };
  const techs = getTechsArray();

  const handleTechsChange = (event, value) => {
    setTechsFilter(value);
  };

  return (
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
                bgcolor: "secondary.baseHv",
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
      {Object.entries(groupTechs(techs)).map(([name, techs], index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && <ListDivider role="none" />}
            {techs.length > 0 && (
              <List>
                <ListItem>
                  <Typography level="body-xs" textTransform="uppercase">
                    {name} ({techs.length})
                  </Typography>
                </ListItem>
                {techs.sort().map((tech, index) => (
                  <Option key={index} value={tech} sx={{ pl: 3 }}>
                    {tech}
                  </Option>
                ))}
              </List>
            )}
          </Fragment>
        );
      })}
    </Select>
  );
};
