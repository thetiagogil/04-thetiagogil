import { Button, Link, Stack, Table, Typography } from "@mui/joy";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { useLanguageContext } from "../../../contexts/language.context";
import { useCategoryColor } from "../../../hooks/use-category-color";
import { getDateMonth, getDateYear, sortData } from "../../../lib/utils";
import { DataCategory } from "../../../types/common";
import { Data } from "../../../types/data";
import { ChipTech } from "../../shared/chip-tech";

type TimelineTableProps = {
  data: Data[];
  categories: DataCategory[];
  techs: string[];
  footnotes: Record<string, Record<string, string>>;
};

const ITEMS_INCREMENT = 10;

export const TimelineTable = ({ data, categories, techs, footnotes }: TimelineTableProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_INCREMENT);
  const { language, t } = useLanguageContext();
  const getCategoryColor = useCategoryColor();

  const dataFiltered: Data[] = sortData(data).filter((element: { category: DataCategory; techs: string[] }) => {
    const categoriesArray = categories.length === 0 || (element.category && categories.includes(element.category));
    const techsArray =
      techs.length === 0 || (element.techs && techs.every(selectedTech => element.techs.includes(selectedTech)));
    return categoriesArray && techsArray;
  });

  const dataVisible: Data[] = dataFiltered.slice(0, visibleCount);
  const loadMore = () => setVisibleCount(prevCount => prevCount + ITEMS_INCREMENT);

  return (
    <Stack width="100%" alignItems="center" gap={2}>
      <Table
        stickyHeader
        sx={{
          width: { xs: 1200, lg: "100%" },
          fontSize: 14,
          th: { bgcolor: "background.body", color: "neutral.high" },
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
                      element.status && footnotes[element.status]?.icon ? (
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

      {visibleCount < dataFiltered.length && (
        <Button variant="outlined" onClick={loadMore} sx={{ width: { xs: "100%", lg: 160 } }}>
          {t("loadMore")}
        </Button>
      )}
    </Stack>
  );
};
