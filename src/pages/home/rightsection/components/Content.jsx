import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { desiredIds } from "../../../../components/variables/desiredIds";
import { AspectRatio, List, ListItem, Stack, Typography, Link } from "@mui/joy";
import ChipTech from "../../../../components/layout/Chip";
import { hoverColor } from "../../../../components/variables/typeColors";

const Content = ({ type, props }) => {
  const filteredData = props
    .filter((element) => {
      return desiredIds(type).includes(Number(element.id));
    })
    .sort((a, b) => b.id - a.id);
  return (
    <>
      <List sx={{ gap: 6, pt: 4, pb: 4 }}>
        {filteredData.map((element) => {
          return (
            <ListItem key={element.id} sx={{ p: 0 }}>
              <Link
                href={element.link}
                underline="none"
                sx={{
                  p: 2,
                  bgcolor: "transparent",
                  borderRadius: "8px",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "primary.lighterDarkBlue",
                  },
                }}
              >
                <Stack sx={{ width: "30%", alignSelf: "baseline" }}>
                  {type === "projects" && element.img ? (
                    <AspectRatio
                      sx={{
                        width: "90%",
                        border: "1px solid",
                        borderColor: "primary.white3",
                        borderRadius: "8px",
                      }}
                    >
                      <img src={element.img} alt={element.name} />
                    </AspectRatio>
                  ) : type === "projects" && !element.img ? null : (
                    <Typography level="body-sm">{element.date}</Typography>
                  )}
                </Stack>

                <Stack sx={{ width: "70%" }}>
                  <Stack
                    sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                  >
                    <Typography
                      level="title-lg"
                      endDecorator={
                        element.link && <FaExternalLinkAlt size={8} />
                      }
                      sx={{ transition: "0.3s", ...hoverColor(type) }}
                    >
                      {element.name}
                    </Typography>

                    <Typography level="title-sm">
                      {type === "projects" ? element.date : null}
                    </Typography>
                  </Stack>

                  <Typography level="title-md">
                    {element.place ? element.place : element.subject}
                  </Typography>

                  <Typography
                    level="body-sm"
                    sx={{
                      mt: 1,
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

      <Link href="/timeline" underline="none">
        <Typography
          level="body-md"
          endDecorator={<FaArrowRightLong size={12} />}
          sx={{ transition: "0.3s", ...hoverColor(type) }}
        >
          Check out my timeline
        </Typography>
      </Link>
    </>
  );
};

export default Content;
