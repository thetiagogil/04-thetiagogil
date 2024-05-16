import { AspectRatio, Stack, Typography } from "@mui/joy";

export const Section1 = ({ element, type }) => {
  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "30%" },
        alignSelf: { xs: "center", sm: "baseline" },
      }}
    >
      {type === "projects" && element.img ? (
        <AspectRatio
          sx={{
            width: "100%",
            border: "1px solid",
            borderColor: "primary.white3",
            borderRadius: "8px",
          }}
        >
          <img src={element.img} alt={element.name} />
        </AspectRatio>
      ) : (
        <>
          <Typography level="body-sm">
            {element.yearStart} {element.monthStart}
            {(element.yearEnd !== null || element.monthEnd !== null) && (
              <>
                {" "}
                — {element.yearEnd} {element.monthEnd}
              </>
            )}
          </Typography>
        </>
      )}
    </Stack>
  );
};