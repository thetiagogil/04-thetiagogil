import { desiredIds } from "../../../../components/variables/desiredIds";
import { List, ListItem, Link, Stack } from "@mui/joy";
import { Section1, Section2 } from "./content/index";

const Content = ({ type, props }) => {
  const filteredData = props
    .filter((element) => {
      return desiredIds(type).includes(Number(element.id));
    })
    .sort((a, b) => b.id - a.id);

  return (
    <Stack sx={{ gap: 6, py: 4 }}>
      <List sx={{ gap: 6}}>
        {filteredData.map((element) => {
          return (
            <ListItem key={element.id} sx={{ p: 0 }}>
              <Link
                href={element.link}
                underline="none"
                sx={{
                  bgcolor: { xs: "primary.lighterDarkBlue", md: "transparent" },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  p: 2,
                  gap: 2,
                  borderRadius: "8px",
                  transition: "0.3s",
                  width: { md: "900px" },
                  "&:hover": {
                    bgcolor: "primary.lighterDarkBlue",
                  },
                }}
              >
                <Section1 element={element} type={type} />

                <Section2 element={element} type={type} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

export default Content;
