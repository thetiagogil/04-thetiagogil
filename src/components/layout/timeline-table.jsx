import { Button, Link, Stack, Table, Typography } from "@mui/joy";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { ChipTech } from "../shared/chip-tech";
import { sortData } from "../variables/sortData";
import { hoverColor } from "../variables/typeColors";

const ITEMS_INCREMENT = 7;

export const TimelineTable = ({ data, typesFilter, techsFilter }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_INCREMENT);

  const dataFiltered = sortData(data).filter(element => {
    const types = typesFilter.length === 0 || (element.type && typesFilter.includes(element.type));
    const techs =
      techsFilter.length === 0 ||
      (element.techs && techsFilter.every(selectedTech => element.techs.includes(selectedTech)));
    return types && techs;
  });

  const dataVisible = dataFiltered.slice(0, visibleCount);
  const loadMore = () => setVisibleCount(prevCount => prevCount + ITEMS_INCREMENT);

  const footnotes = {
    outdated: { icon: "~", text: "project needs update." },
    inactive: { icon: "†", text: "project is temporarily or permanently inactive." }
  };

  return (
    <Stack component="section" sx={{ alignItems: { xs: "center", lg: "baseline" }, gap: 4, mb: 6 }}>
      <Stack sx={{ overflowX: "auto", width: { xs: "90%", lg: "100%" } }}>
        <Table
          sx={{
            width: { xs: "1200px", sm: "100%" },
            fontSize: "14px",
            th: {
              bgcolor: "transparent",
              color: "primary.white"
            },
            td: {
              py: 2,
              verticalAlign: "center"
            },
            "& th:nth-of-type(1)": {
              width: "15%"
            },
            "& th:nth-of-type(2)": {
              width: "20%"
            },
            "& th:nth-of-type(3)": {
              width: "15%"
            },
            "& th:nth-of-type(4)": {
              textAlign: { xs: "center", sm: "left" }
            },
            "& th:nth-of-type(5)": {
              width: "5%",
              textAlign: "center"
            }
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
            {dataVisible.map((element, index) => (
              <tr key={index}>
                <td>
                  <Typography level="body-sm">
                    {element.yearStart} {element.monthStart}
                    {(element.yearEnd !== null || element.monthEnd !== null) && (
                      <>
                        {" "}
                        — {element.yearEnd} {element.monthEnd}
                      </>
                    )}
                  </Typography>
                </td>

                <td>
                  <Typography
                    sx={{ color: "primary.white", fontSize: { xs: "12px", sm: "14px" } }}
                    endDecorator={
                      footnotes[element.status]?.icon ? (
                        <Typography sx={{ color: "warning.500" }}>{footnotes[element.status].icon}</Typography>
                      ) : null
                    }
                  >
                    {element.name}
                  </Typography>
                </td>

                <td>
                  <Typography sx={{ color: "primary.white3", fontSize: { xs: "12px", sm: "14px" } }}>
                    {element.place}
                  </Typography>
                </td>

                <td>
                  {element.techs?.map((tech, index) => (
                    <ChipTech tech={tech} type={element.type} key={index} />
                  ))}
                </td>

                <td>
                  <Link
                    href={element.link}
                    target="_blank"
                    underline="none"
                    sx={{
                      color: "primary.white",
                      fontSize: { xs: "12px", sm: "14px" },
                      display: "flex",
                      justifyContent: "center",
                      transition: "0.3s",
                      ...hoverColor(element.type)
                    }}
                  >
                    {element.link.length > 0 ? <FaLink /> : null}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>

      {visibleCount < dataFiltered.length && (
        <Stack sx={{ width: "100%", alignItems: "center" }}>
          <Button
            variant="outlined"
            onClick={loadMore}
            sx={{
              width: { xs: "100%", lg: "160px" },
              borderColor: "primary.white3",
              "&:hover": { bgcolor: "transparent", opacity: "0.8" }
            }}
          >
            Load More
          </Button>
        </Stack>
      )}

      <Stack>
        {Object.values(footnotes).map((footnote, index) => (
          <Typography
            key={index}
            level="body-sm"
            startDecorator={
              <Typography verticalAlign="top" sx={{ color: "warning.500" }}>
                {footnote.icon}
              </Typography>
            }
          >
            - {footnote.text}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
