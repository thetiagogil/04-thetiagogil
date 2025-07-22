import { AspectRatio, Box, Link, ListItem, Stack, Typography } from "@mui/joy";
import { useLanguageContext } from "../../contexts/language.context";
import { useCategoryColor } from "../../hooks/use-category-color";
import { getColorTransparency, getDateMonth, getDateYear } from "../../lib/utils";
import { DataCategory } from "../../types/common";
import { Data } from "../../types/data";
import { ChipTech } from "./chip-tech";

type CardContentProps = { element: Data; category: DataCategory };

export const CardContent = ({ element, category }: CardContentProps) => {
  const { language, t } = useLanguageContext();
  const getCategoryColor = useCategoryColor();

  const renderAspectRatio = () => {
    return (
      <Stack>
        {element.img ? (
          <AspectRatio variant="outlined" ratio="1" sx={{ width: 64, borderRadius: 8 }}>
            <img src={element.img} alt={element.name} />
          </AspectRatio>
        ) : (
          <AspectRatio variant="outlined" ratio="1" sx={{ width: 64, borderRadius: 8 }} />
        )}
      </Stack>
    );
  };

  const renderTitle = () => {
    return (
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
    );
  };

  const renderBody = () => {
    return (
      <>
        {element.descriptionKey && (
          <Typography level="body-sm" textAlign="justify">
            {t(element.descriptionKey)}
          </Typography>
        )}

        {element.techs && (
          <Stack direction="row" flexWrap="wrap">
            {element.techs?.map((tech, index) => {
              return <ChipTech tech={tech} category={category} key={index} />;
            })}
          </Stack>
        )}
      </>
    );
  };

  return (
    <ListItem key={element.id} sx={{ p: 0 }}>
      <Stack
        component={Link}
        href={element.link}
        target="_blank"
        underline="none"
        bgcolor="transparent"
        width="100%"
        alignItems="start"
        border="1px solid transparent"
        borderRadius={8}
        p={2}
        gap={2}
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          "&:hover": {
            bgcolor: getColorTransparency(getCategoryColor(category), 10),
            borderColor: getColorTransparency(getCategoryColor(category), 50)
          }
        }}
      >
        <Stack direction={{ xs: "row", lg: "column" }} alignItems={{ xs: "center", lg: "flex-start" }} gap={2}>
          {renderAspectRatio()}
          <Box sx={{ display: { xs: "block", lg: "none" }, flex: 1 }}>{renderTitle()}</Box>
        </Stack>

        <Stack gap={1} flex={1}>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>{renderTitle()}</Box>
          {renderBody()}
        </Stack>
      </Stack>
    </ListItem>
  );
};
