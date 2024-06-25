import { desiredIds } from "../variables/desiredIds";
import { List, ListItem, Link, Stack, Typography, AspectRatio } from "@mui/joy";
import { ChipTech } from "../layout/Chip";
import { hoverColor } from "../variables/typeColors";

export const ContentCard = ({ type, props }) => {
  const filteredData = props
    .filter((element) => {
      return desiredIds(type).includes(Number(element.id));
    })
    .sort((a, b) => b.id - a.id);

  return (
    <Stack sx={{ gap: 6, py: 4 }}>
      <List sx={{ gap: 6 }}>
        {filteredData.map((element) => {
          return (
            <ListItem key={element.id} sx={{ p: 0 }}>
              <Link
                href={element.link}
                underline="none"
                sx={{
                  bgcolor: { xs: "primary.lighterDarkBlue", md: "transparent" },
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  p: 2,
                  gap: 2,
                  borderRadius: "8px",
                  transition: "0.3s",
                  width: "100%",
                  "&:hover": {
                    bgcolor: "primary.lighterDarkBlue",
                  },
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
                        {(element.yearEnd !== null ||
                          element.monthEnd !== null) && (
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
                  <Stack
                    sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}
                  >
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
                          {(element.yearEnd !== null ||
                            element.monthEnd !== null) && (
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
        })}
      </List>
    </Stack>
  );
};
