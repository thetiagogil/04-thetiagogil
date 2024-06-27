import { Stack, Table, Link, Typography } from "@mui/joy";
import { FaLink } from "react-icons/fa";
import { sortDate } from "../variables/sortDate";
import { hoverColor } from "../variables/typeColors";
import { ChipTech } from "../layout/chip-tech";

export const TimelineTable = ({ data, typesFilter, techsFilter }) => {
  const dataFiltered = sortDate(data).filter((element) => {
    const types =
      typesFilter.length === 0 ||
      (element.type && typesFilter.includes(element.type));
    const techs =
      techsFilter.length === 0 ||
      (element.techs &&
        techsFilter.every((selectedTech) =>
          element.techs.includes(selectedTech)
        ));
    return types && techs;
  });

  return (
    <Stack
      component="section"
      sx={{ alignItems: { xs: "center", lg: "baseline" } }}
    >
      <Stack sx={{ overflowX: "auto", width: { xs: "90%", lg: "100%" } }}>
        <Table
          sx={{
            width: { xs: "1200px", sm: "100%" },
            fontSize: "14px",
            th: {
              bgcolor: "transparent",
              color: "primary.white",
            },
            td: {
              py: 2,
              verticalAlign: "center",
            },
            "& th:nth-of-type(1)": {
              width: "15%",
            },
            "& th:nth-of-type(2)": {
              width: "20%",
            },
            "& th:nth-of-type(3)": {
              width: "15%",
            },
            "& th:nth-of-type(4)": {
              textAlign: { xs: "center", sm: "left" },
            },
            "& th:nth-of-type(5)": {
              width: "5%",
              textAlign: "center",
            },
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
            {dataFiltered.map((element, index) => (
              <tr key={index}>
                {/* DATE */}
                <td>
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
                </td>

                {/* NAME */}
                <td>
                  <Typography
                    sx={{
                      color: "primary.white",
                      fontSize: { xs: "12px", sm: "14px" },
                    }}
                  >
                    {element.name}
                  </Typography>
                </td>

                {/* PLACE */}
                <td>
                  <Typography
                    sx={{
                      color: "primary.white3",
                      fontSize: { xs: "12px", sm: "14px" },
                    }}
                  >
                    {element.place}
                  </Typography>
                </td>

                {/* TECHS */}
                <td>
                  {element.techs?.map((tech, index) => (
                    <ChipTech tech={tech} type={element.type} key={index} />
                  ))}
                </td>

                {/* LINK */}
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
                      ...hoverColor(element.type),
                    }}
                  >
                    <FaLink />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
    </Stack>
  );
};
