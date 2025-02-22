import { AspectRatio, Link, ListItem, Stack, Typography } from "@mui/joy";
import { CATEGORIES_TYPES } from "../../configs/contants";
import { DataModel } from "../../models/data.model";
import { getDateMonth, getDateYear } from "../../utils/format-date";
import { getCategoryColor } from "../../utils/get-category-color";
import { getColorTransparency } from "../../utils/get-color-transparency";
import { ChipTech } from "./chip-tech";

type ContentCardProps = { element: DataModel; category: CATEGORIES_TYPES };

export const ContentCard = ({ element, category }: ContentCardProps) => {
  return (
    <ListItem key={element.id} sx={{ p: 0 }}>
      <Stack
        component={Link}
        href={element.link}
        target="_blank"
        underline="none"
        bgcolor="transparent"
        width="100%"
        direction={{ xs: "column", sm: "row" }}
        border="1px solid transparent"
        borderRadius={8}
        p={2}
        gap={2}
        sx={{
          "&:hover": {
            bgcolor: getColorTransparency(getCategoryColor(category), 10),
            borderColor: getColorTransparency(getCategoryColor(category), 50)
          }
        }}
      >
        <Stack sx={{ width: { xs: "100%", md: "30%" }, alignSelf: { xs: "center", sm: "baseline" } }}>
          {category === "projects" && element.img ? (
            <AspectRatio sx={{ width: "100%", border: "1px solid", borderColor: "neutral.light", borderRadius: 8 }}>
              <img src={element.img} alt={element.name} />
            </AspectRatio>
          ) : (
            <>
              <Typography level="body-sm">
                {getDateYear(element.dateStart)} {getDateMonth(element.dateStart)}
                {element.dateEnd && (
                  <>
                    {" — "}
                    {typeof element.dateEnd === "string"
                      ? element.dateEnd
                      : `${getDateYear(element.dateEnd)} ${getDateMonth(element.dateEnd)}`}
                  </>
                )}
              </Typography>
            </>
          )}
        </Stack>

        <Stack sx={{ width: { xs: "100%", md: "70%" } }}>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Typography level="title-lg" sx={{ "&:hover": { color: getCategoryColor(category) } }}>
              {element.name}
            </Typography>

            <Typography level="body-sm">
              {category === "projects" ? (
                <>
                  {getDateYear(element.dateStart)} {getDateMonth(element.dateStart)}
                  {element.dateEnd && (
                    <>
                      {" — "}
                      {typeof element.dateEnd === "string"
                        ? element.dateEnd
                        : `${getDateYear(element.dateEnd)} ${getDateMonth(element.dateEnd)}`}
                    </>
                  )}
                </>
              ) : null}
            </Typography>
          </Stack>

          <Typography level="title-md">{element.subject ? element.subject : element.place}</Typography>

          <Typography level="body-sm" sx={{ mt: 1, textAlign: "justify" }}>
            {element.description}
          </Typography>

          <Stack sx={{ mt: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {element.techs?.map((tech, index) => {
              return <ChipTech tech={tech} category={category} key={index} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </ListItem>
  );
};
