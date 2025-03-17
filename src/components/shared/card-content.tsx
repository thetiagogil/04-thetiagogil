import { AspectRatio, Link, ListItem, Stack, Typography } from "@mui/joy";
import { CategoryType } from "../../configs/contants";
import { useLanguageContext } from "../../contexts/language.context";
import { useCategoryColor } from "../../hooks/use-category-color";
import { DataModel } from "../../models/data.model";
import { getDateMonth, getDateYear } from "../../utils/format-date";
import { getColorTransparency } from "../../utils/get-color-transparency";
import { ChipTech } from "./chip-tech";

type CardContentProps = { element: DataModel; category: CategoryType };

export const CardContent = ({ element, category }: CardContentProps) => {
  const { language, t } = useLanguageContext();
  const getCategoryColor = useCategoryColor();

  return (
    <ListItem key={element.id} sx={{ p: 0 }}>
      <Stack
        component={Link}
        href={element.link}
        target="_blank"
        underline="none"
        bgcolor="transparent"
        width="100%"
        direction="row"
        alignItems="start"
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
        <Stack>
          {element.img ? (
            <AspectRatio variant="outlined" ratio="1" sx={{ width: 64, borderRadius: 8 }}>
              <img src={element.img} alt={element.name} />
            </AspectRatio>
          ) : (
            <AspectRatio variant="outlined" ratio="1" sx={{ width: 64, borderRadius: 8 }} />
          )}
        </Stack>

        <Stack gap={1}>
          <Stack>
            <Typography level="title-lg" sx={{ "&:hover": { color: getCategoryColor(category) } }}>
              {element.nameKey ? t(element.nameKey) : element.name}
            </Typography>

            <Stack gap={0.5}>
              <Typography level="title-md">
                {element.subjectKey
                  ? t(element.subjectKey)
                  : element.subject
                    ? element.subject
                    : element.placeKey
                      ? t(element.placeKey)
                      : element.place}
              </Typography>

              <Typography level="title-sm" textColor="neutral.low">
                {getDateMonth(element.dateStart, language)} {getDateYear(element.dateStart)}
                {element.dateEnd && (
                  <>
                    {" — "}
                    {typeof element.dateEnd === "string"
                      ? element.dateEnd
                      : `${getDateMonth(element.dateEnd, language)} ${getDateYear(element.dateEnd)}`}
                  </>
                )}
              </Typography>
            </Stack>
          </Stack>

          {element.descriptionKey && (
            <Typography level="body-sm" textAlign="justify">
              {t(element.descriptionKey)}
            </Typography>
          )}

          <Stack direction="row" flexWrap="wrap">
            {element.techs?.map((tech, index) => {
              return <ChipTech tech={tech} category={category} key={index} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </ListItem>
  );
};
