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
    border: `1px solid ${colors.white3}`,
    ":hover": {
      border: `1px solid ${colors.white}`,
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: colors.lighterDarkBlue,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? colors.white3
      : state.isSelected
      ? colors.darkBlue
      : colors.lighterDarkBlue,
    color: state.isFocused
      ? colors.white
      : state.isSelected
      ? colors.white
      : colors.white2,
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
