import { ListItem, Link, Stack, Typography, AspectRatio } from "@mui/joy";
import { ChipTech } from "../layout/Chip";
import { hoverColor, hoverBgColor } from "../variables/typeColors";

export const ContentCard = ({ element, type }) => {
  return (
    <ListItem key={element.id} sx={{ p: 0 }}>
      <Link
        href={element.link}
        underline="none"
        sx={{
          bgcolor: "transparent",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          p: 2,
          gap: 2,
          borderRadius: "8px",
          transition: "0.3s",
          ...hoverBgColor(type),
        }}
      >
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
      </Link>
    </ListItem>
  );
};
