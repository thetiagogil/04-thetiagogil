import { Box, Chip, IconButton, Option, Select } from "@mui/joy";
import { IoMdClose } from "react-icons/io";
import { CATEGORIES, CategoryType } from "../../configs/contants";
import { capFirstLetter } from "../../utils/cap-first-letter";
import { chipColors } from "../shared/chip-tech";

type TimelineCategoriesFilterProps = {
  categories: CategoryType[];
  setCategories: (categories: CategoryType[]) => void;
};

export const TimelineCategoriesFilter = ({ categories, setCategories }: TimelineCategoriesFilterProps) => {
  return (
    <Select
      multiple
      value={categories}
      placeholder="Select a category..."
      onChange={(_event, value: CategoryType[]) => setCategories(value)}
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
          {capFirstLetter(category as CategoryType)}
        </Option>
      ))}
    </Select>
  );
};
