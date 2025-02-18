import { Button, Grid, Link, Stack, Table, Typography } from "@mui/joy";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { CATEGORIES_TYPES } from "../../configs/contants";
import { DataModel } from "../../models/data.model";
import { colors } from "../../theme/colors";
import { getDateMonth, getDateYear } from "../../utils/format-date";
import { getCategoryColor } from "../../utils/get-category-color";
import { sortData } from "../../utils/sort-data";
import { ChipTech } from "../shared/chip-tech";

type TimelineTableProps = { data: DataModel[]; categories: CATEGORIES_TYPES[]; techs: string[] };

const ITEMS_INCREMENT = 7;

export const TimelineTable = ({ data, categories, techs }: TimelineTableProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_INCREMENT);

  const dataFiltered: DataModel[] = sortData(data).filter(
    (element: { category: CATEGORIES_TYPES; techs: string[] }) => {
      const categoriesArray = categories.length === 0 || (element.category && categories.includes(element.category));
      const techsArray =
        techs.length === 0 || (element.techs && techs.every(selectedTech => element.techs.includes(selectedTech)));
      return categoriesArray && techsArray;
    }
  );

  const dataVisible: DataModel[] = dataFiltered.slice(0, visibleCount);
  const loadMore = () => setVisibleCount(prevCount => prevCount + ITEMS_INCREMENT);

  const footnotes: Record<string, Record<string, string>> = {
    outdated: { icon: "~", text: "project needs update." },
    inactive: { icon: "†", text: "project is temporarily or permanently inactive." }
  };

  return (
    <Stack component="section" alignItems={{ xs: "center", lg: "baseline" }} mb={6} gap={4}>
      <Stack width={{ xs: "90%", lg: "100%" }} overflow="auto">
        <Table
          sx={{
            width: { xs: 1200, sm: "100%" },
            fontSize: 14,
            th: { bgcolor: "transparent", color: "neutral.lightest" },
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
              <th>Date</th>
              <th>Name / Role</th>
              <th>Company</th>
              <th>Techs</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {dataVisible.map((element, index) => {
              return (
                <tr key={index}>
                  <td>
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
                  </td>

                  <td>
                    <Typography
                      textColor="neutral.lightest"
                      fontSize={{ xs: 12, sm: 14 }}
                      endDecorator={
                        footnotes[element.status]?.icon ? (
                          <Typography textColor="warning.500">{footnotes[element.status].icon}</Typography>
                        ) : null
                      }
                    >
                      {element.name}
                    </Typography>
                  </td>

                  <td>
                    <Typography textColor="neutral.lightest" fontSize={{ xs: 12, sm: 14 }}>
                      {element.place}
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
                      textColor={colors.neutral.lightest}
                      sx={{ fontSize: { xs: 12, sm: 14 }, "&:hover": { color: getCategoryColor(element.category) } }}
                    >
                      {element.link.length > 0 ? <FaLink /> : null}
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
            Load More
          </Button>
        </Stack>
      )}

      <Grid container>
        {Object.values(footnotes).map((footnote, index) => (
          <>
            <Grid xs={0.75} textAlign="center">
              <Typography textColor="warning.500">{footnote.icon}</Typography>
            </Grid>
            <Grid xs={11.25}>
              <Typography key={index} level="body-sm">
                {footnote.text}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Stack>
  );
};
