import { useLanguageContext } from "@/hooks/use-language-context";
import { getColorTransparency, getGroupedTechs } from "@/lib/utils";
import type { DataType } from "@/types/data";

import {
  Box,
  Chip,
  IconButton,
  List,
  ListDivider,
  ListItem,
  Option,
  Select,
  Typography,
  useTheme,
} from "@mui/joy";
import { IoMdClose } from "react-icons/io";

type TimelineTechsFilterProps = {
  data: DataType[];
  techs: string[];
  setTechs: (techs: string[]) => void;
};

export const TimelineTechsFilter = ({
  data,
  techs,
  setTechs,
}: TimelineTechsFilterProps) => {
  const theme = useTheme();
  const { t } = useLanguageContext();

  const getTechsArray = (): string[] => {
    const allTechs = new Set<string>();
    data.forEach((data) => {
      const techs = data.techs;
      techs?.forEach((tech: string) => {
        allTechs.add(tech);
      });
    });
    return Array.from(allTechs);
  };
  const techsArray = getTechsArray();

  return (
    <Select
      color="neutral"
      multiple
      value={techs}
      placeholder={t("selectTech")}
      onChange={(_event, value: string[]) => setTechs(value)}
      renderValue={(selected) => (
        <Box display="flex" gap={1}>
          {selected.map((selectedOption, index) => (
            <Chip
              key={index}
              variant="soft"
              sx={{
                color: "neutral.high",
                bgcolor: getColorTransparency(theme.palette.neutral.high, 20),
              }}
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
            onMouseDown={(event) => {
              event.stopPropagation();
            }}
            onClick={() => setTechs([])}
          >
            <IoMdClose />
          </IconButton>
        ),
        indicator: null,
      })}
      sx={{ height: 40, width: { xs: "100%", lg: "60%" } }}
    >
      {Object.entries(getGroupedTechs(techsArray)).map(
        ([name, techs], index) => {
          return (
            <Box key={index}>
              {index !== 0 && <ListDivider role="none" />}
              {techs.length > 0 && (
                <List>
                  <ListItem>
                    <Typography level="body-xs" textTransform="uppercase">
                      {t(name)} ({techs.length})
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
        }
      )}
    </Select>
  );
};
