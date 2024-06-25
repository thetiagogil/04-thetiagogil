export const hoverColor = (type) => {
  switch (type) {
    case "projects":
      return {
        "&:hover": {
          color: "primary.blue",
        },
      };
    case "experience":
      return {
        "&:hover": {
          color: "primary.green",
        },
      };
    case "education":
      return {
        "&:hover": {
          color: "primary.yellow",
        },
      };
    case "certifications":
      return {
        "&:hover": {
          color: "primary.pink",
        },
      };
  }
};

export const hoverBgColor = (type) => {
  switch (type) {
    case "projects":
      return {
        "&:hover": {
          bgcolor: "secondary.blueBg",
        },
      };
    case "experience":
      return {
        "&:hover": {
          bgcolor: "secondary.greenBg",
        },
      };
    case "education":
      return {
        "&:hover": {
          bgcolor: "secondary.yellowBg",
        },
      };
    case "certifications":
      return {
        "&:hover": {
          bgcolor: "secondary.pinkBg",
        },
      };
  }
};

export const fillColor = (type) => {
  switch (type) {
    case "projects":
      return {
          bgcolor: "primary.blue",
      };
    case "experience":
      return {
          bgcolor: "primary.green",
      };
    case "education":
      return {
          bgcolor: "primary.yellow",
      };
    case "certifications":
      return {
          bgcolor: "primary.pink",
      };
  }
};
