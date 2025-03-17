import { Button, Link, Stack, Table, Typography } from "@mui/joy";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { CategoryType } from "../../configs/contants";
import { useLanguageContext } from "../../contexts/language.context";
import { useCategoryColor } from "../../hooks/use-category-color";
import { DataModel } from "../../models/data.model";
import { getDateMonth, getDateYear } from "../../utils/format-date";
import { sortData } from "../../utils/sort-data";
import { ChipTech } from "../shared/chip-tech";

type TimelineTableProps = { data: DataModel[]; categories: CategoryType[]; techs: string[] };

const ITEMS_INCREMENT = 7;

export const TimelineTable = ({ data, categories, techs }: TimelineTableProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_INCREMENT);
  const { language, t } = useLanguageContext();
  const getCategoryColor = useCategoryColor();

  const dataFiltered: DataModel[] = sortData(data).filter((element: { category: CategoryType; techs: string[] }) => {
    const categoriesArray = categories.length === 0 || (element.category && categories.includes(element.category));
    const techsArray =
      techs.length === 0 || (element.techs && techs.every(selectedTech => element.techs.includes(selectedTech)));
    return categoriesArray && techsArray;
  });

  const dataVisible: DataModel[] = dataFiltered.slice(0, visibleCount);
  const loadMore = () => setVisibleCount(prevCount => prevCount + ITEMS_INCREMENT);

  const footnotes: Record<string, Record<string, string>> = {
    outdated: { icon: "~", text: t("statusOutdated") },
    inactive: { icon: "†", text: t("statusInactive") }
  };

  return (
    <Stack component="section" alignItems={{ xs: "center", lg: "baseline" }} gap={4}>
      <Stack width="100%" overflow="auto">
        <Table
          sx={{
            width: { xs: 1200, lg: "100%" },
            fontSize: 14,
            th: { bgcolor: "transparent", color: "neutral.high" },
            td: { py: 2, verticalAlign: "center" },
            "& th:nth-of-type(1)": { width: "15%" },
            "& th:nth-of-type(2)": { width: "20%" },
            "& th:nth-of-type(3)": { width: "15%" },
            "& th:nth-of-type(4)": { textAlign: { xs: "center", sm: "left" } },
            "& th:nth-of-type(5)": { width: "5%", textAlign: "center" }
          }}
        >
          <thead>
            <tr>
              <th>{t("date")}</th>
              <th>{t("nameRole")}</th>
              <th>{t("company")}</th>
              <th>{t("techs")}</th>
              <th>{t("link")}</th>
            </tr>
          </thead>

          <tbody>
            {dataVisible.map((element, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Typography level="body-sm">
                      {getDateYear(element.dateStart)} {getDateMonth(element.dateStart, language)}
                      {element.dateEnd && (
                        <>
                          {" — "}
                          {typeof element.dateEnd === "string"
                            ? element.dateEnd
                            : `${getDateYear(element.dateEnd)} ${getDateMonth(element.dateEnd, language)}`}
                        </>
                      )}
                    </Typography>
                  </td>

                  <td>
                    <Typography
                      textColor="neutral.high"
                      fontSize={{ xs: 12, sm: 14 }}
                      endDecorator={
                        footnotes[element.status]?.icon ? (
                          <Typography textColor="warning.500">{footnotes[element.status].icon}</Typography>
                        ) : null
                      }
                    >
                      {element.nameKey ? t(element.nameKey) : element.name}
                    </Typography>
                  </td>

                  <td>
                    <Typography textColor="neutral.high" fontSize={{ xs: 12, sm: 14 }}>
                      {element.placeKey ? t(element.placeKey) : element.place}
                    </Typography>
                  </td>

                  <td>
                    {element.techs?.map((tech: string, index: number) => (
                      <ChipTech tech={tech} category={element.category} key={index} />
                    ))}
                  </td>

                  <td>
                    <Stack
                      alignItems="center"
                      component={Link}
                      href={element.link}
                      target="_blank"
                      underline="none"
                      textColor="neutral.medium"
                      sx={{ fontSize: { xs: 12, sm: 14 }, "&:hover": { color: getCategoryColor(element.category) } }}
                    >
                      {element.link && element.status !== "inactive" ? <FaLink /> : null}
                    </Stack>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Stack>

      {visibleCount < dataFiltered.length && (
        <Stack sx={{ width: "100%", alignItems: "center" }}>
          <Button variant="outlined" onClick={loadMore} sx={{ width: { xs: "100%", lg: 160 } }}>
            {t("loadMore")}
          </Button>
        </Stack>
      )}

      <Stack width="100%">
        {Object.values(footnotes).map((footnote, index) => (
          <Stack key={index} direction="row">
            <Stack width={20} textAlign="center">
              <Typography textColor="warning.500">{footnote.icon}</Typography>
            </Stack>

            <Typography key={index} level="body-sm">
              {footnote.text.toLocaleLowerCase()}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
