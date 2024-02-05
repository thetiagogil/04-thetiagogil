import { colors } from "../utils/colors.js";

export const customSelectStyles = {
  container: (provided) => ({
    ...provided,
    width: "20rem",
    fontSize: "0.9rem",
    transition: "0.3s",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: colors.darkBlue,
    transition: "0.3s",
    ":hover": {
      border: `1px solid ${colors.white3}`,
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: colors.lighterDarkBlue,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? colors.darkBlue
      : colors.lighterDarkBlue,
    color: colors.white2,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: colors.lighterDarkBlue,
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: colors.white,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: colors.white,
    transition: "0.3s",
    ":hover": {
      color: colors.white3,
    },
  }),
};
