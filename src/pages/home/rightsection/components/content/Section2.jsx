import { Stack, Typography } from "@mui/joy";
import ChipTech from "../../../../../components/layout/Chip";
import { hoverColor } from "../../../../../components/variables/typeColors";

export const Section2 = ({ element, type }) => {
  return (
    <Stack sx={{ width: { xs: "100%", md: "70%" } }}>
      <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
        <Typography
          level="title-lg"
          sx={{ transition: "0.3s", ...hoverColor(type) }}
        >
          {element.name}
        </Typography>

        <Typography level="body-sm">
          {type === "projects" ? (
            <>
              {element.yearStart} {element.monthStart}
              {(element.yearEnd !== null || element.monthEnd !== null) && (
                <>
                  {" "}
                  — {element.yearEnd} {element.monthEnd}
                </>
              )}
            </>
          ) : null}
        </Typography>
      </Stack>

      <Typography level="title-md">
        {element.place ? element.place : element.subject}
      </Typography>

      <Typography
        level="body-sm"
        sx={{
          mt: 1,
          textAlign: "justify",
        }}
      >
        {element.description}
      </Typography>

      <Stack sx={{ mt: 1, flexDirection: "row", flexWrap: "wrap" }}>
        {element.techs?.map((tech, index) => {
          return <ChipTech tech={tech} type={type} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};
