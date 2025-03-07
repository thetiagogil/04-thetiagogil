import { Box, Chip, IconButton, List, ListDivider, ListItem, Option, Select, Typography } from "@mui/joy";
import { IoMdClose } from "react-icons/io";
import { DataModel } from "../../models/data.model";
import { colors } from "../../theme/colors";
import { getColorTransparency } from "../../utils/get-color-transparency";
import { getGroupedTechs } from "../../utils/get-grouped-techs";

type TimelineTechsFilterProps = { data: DataModel[]; techs: string[]; setTechs: (techs: string[]) => void };

export const TimelineTechsFilter = ({ data, techs, setTechs }: TimelineTechsFilterProps) => {
  const getTechsArray = (): string[] => {
    const allTechs = new Set<string>();
    data.forEach(data => {
      const techs = data.techs;
      techs?.forEach(tech => {
        allTechs.add(tech);
      });
    });
    return Array.from(allTechs);
  };
  const techsArray = getTechsArray();

  return (
    <Select
      multiple
      value={techs}
      placeholder="Select a tech..."
      onChange={(_event, value: string[]) => setTechs(value)}
      renderValue={selected => (
        <Box display="flex" gap={1}>
          {selected.map((selectedOption, index) => (
            <Chip
              key={index}
              variant="soft"
              sx={{ color: "neutral.lightest", bgcolor: getColorTransparency(colors.neutral.lightest, 20) }}
            >
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
      {...(techs.length > 0 && {
        endDecorator: (
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={event => {
              event.stopPropagation();
            }}
            onClick={() => setTechs([])}
          >
            <IoMdClose />
          </IconButton>
        ),
        indicator: null
      })}
      sx={{ width: { xs: "100%", lg: "60%" } }}
    >
      {Object.entries(getGroupedTechs(techsArray)).map(([name, techs], index) => {
        return (
          <Box key={index}>
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
          </Box>
        );
      })}
    </Select>
  );
};
