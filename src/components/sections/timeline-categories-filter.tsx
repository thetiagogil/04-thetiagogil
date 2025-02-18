import { Box, Chip, IconButton, Option, Select } from "@mui/joy";
import { IoMdClose } from "react-icons/io";
import { CATEGORIES, CATEGORIES_TYPES } from "../../configs/contants";
import { capFirstLetter } from "../../utils/cap-first-letter";
import { chipColors } from "../shared/chip-tech";

type TimelineCategoriesFilterProps = {
  categories: CATEGORIES_TYPES[];
  setCategories: (categories: CATEGORIES_TYPES[]) => void;
};

export const TimelineCategoriesFilter = ({ categories, setCategories }: TimelineCategoriesFilterProps) => {
  return (
    <Select
      multiple
      value={categories}
      placeholder="Select a category..."
      onChange={(_event, value: CATEGORIES_TYPES[]) => setCategories(value)}
      renderValue={selected => (
        <Box display="flex" gap={1}>
          {selected.map((selectedOption, index) => (
            <Chip key={index} variant="soft" sx={chipColors(selectedOption.value)}>
              {selectedOption.label}
            </Chip>
          ))}
        </Box>
      )}
      {...(categories.length > 0 && {
        endDecorator: (
          <IconButton size="sm" variant="plain" color="neutral" onClick={() => setCategories([])}>
            <IoMdClose />
          </IconButton>
        ),
        indicator: null
      })}
      sx={{ width: { xs: "100%", lg: "40%" } }}
    >
      {CATEGORIES.map((category, index) => (
        <Option key={index} value={category}>
          {capFirstLetter(category as CATEGORIES_TYPES)}
        </Option>
      ))}
    </Select>
  );
};
