import { Select, Box, Chip, Option } from "@mui/joy";
import { capFirstLetter } from "../variables/capFirstLetter";

export const TimelineFilterTypes = ({ data, setTypesFilter }) => {
  const getTypesArray = () => {
    let allTypes = new Set();
    data.forEach((data) => {
      const type = data.type;
      allTypes.add(type);
    });
    return Array.from(allTypes);
  };
  const types = getTypesArray();

  const handleTypeChange = (event, value) => {
    setTypesFilter(value);
  };

  return (
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
                bgcolor: "secondary.baseHv",
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
      {types.map((type, index) => (
        <Option key={index} value={type}>
          {capFirstLetter(type)}
        </Option>
      ))}
    </Select>
  );
};
