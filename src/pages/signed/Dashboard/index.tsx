import React, { useState, useEffect } from "react";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Typography,
  TableBody,
  Table,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { TableCell, TableSortLabel } from "./styles";
import AppBar from "../../../components/AppBar";
import { base } from "../../../config/api";
// import { Duration } from "luxon";

//TableSortLabel
// const StyledTableSortLabel = withStyles((theme: Theme) =>
//   createStyles({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   })
// )(TableSortLabel);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {},
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {},
  root: {
    minWidth: 275,
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

type Order = "asc" | "desc";

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function CustomizedTables(props: any) {
  const classes = useStyles();
  const [category, setCategory] = useState<any>();
  const [data, setData] = useState<any>({});
  const [penaltyConfs, setPenaltyConfs] = useState<any>([]);
  const [bonusesConfs, setBonusesConfs] = useState<any>([]);

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState("position");

  let { trial_id, event_id } = useParams();
  useEffect(() => {
    let params: any = {
      event_id,
      trial_id,
      category,
    };
    base
      .get(`/fullRanking3`, { params })
      .then((r) => {
        setData(r.data);
      })
      .catch(() => {});
    base
      .get(`/managedPenaltyConfsFromTrial`, { params })
      .then((r) => {
        setPenaltyConfs(r.data);
      })
      .catch(() => {});
    base
      .get(`/managedBonusConfsFromTrial`, { params })
      .then((r) => {
        setBonusesConfs(r.data);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  // const msToDefault = (ms) => {
  //   const duration = Duration.fromObject({ milliseconds: ms })
  //     .normalize()
  //     .shiftTo("minutes", "seconds", "milliseconds")
  //     .toObject();
  //   const minutesT = `${duration.minutes}`.padStart(2, "0");
  //   const secondsT = `${duration.seconds}`.padStart(2, "0");
  //   const millisecondsT = `${duration.milliseconds}`.padEnd(3, "0");
  //   const timeT = `${minutesT}:${secondsT}.${millisecondsT}`;
  //   return timeT;
  // };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <>
      <AppBar title={props.location.state.trialName} {...props} />
      {data?.riders && data?.riders[0]?.scores ? (
        <Card className={classes.root}>
          <CardContent>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="select-outlined-label">Category</InputLabel>
              <Select
                labelId="select-outlined-label"
                id="select-outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="null">None</MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
                <MenuItem value="expert">Expert</MenuItem>
              </Select>
            </FormControl>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      key="position"
                      style={{ overflow: "hidden" }}
                      align="center"
                      padding={false ? "none" : "default"}
                      sortDirection={orderBy === "position" ? order : false}
                    >
                      <TableSortLabel
                        hideSortIcon={true}
                        active={orderBy === "position"}
                        direction={orderBy === "position" ? order : "asc"}
                        onClick={createSortHandler("position")}
                      >
                        POSITION
                        {orderBy !== "position" ? (
                          <ImportExportIcon
                            style={{ color: "rgb(0 0 0 / 20%)" }}
                          />
                        ) : null}
                        {orderBy === "position" ? (
                          <span className={classes.visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                      key="name"
                      align="center"
                      padding={false ? "none" : "default"}
                      sortDirection={orderBy === "name" ? order : false}
                    >
                      <TableSortLabel
                        hideSortIcon={true}
                        active={orderBy === "name"}
                        direction={orderBy === "name" ? order : "asc"}
                        onClick={createSortHandler("name")}
                      >
                        NAME
                        {orderBy !== "name" ? (
                          <ImportExportIcon
                            style={{ color: "rgb(0 0 0 / 20%)" }}
                          />
                        ) : null}
                        {orderBy === "name" ? (
                          <span className={classes.visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    {category ? (
                      <StyledTableCell align="center">CATEGORY</StyledTableCell>
                    ) : null}
                    <TableCell
                      key="treated_time"
                      align="center"
                      padding={false ? "none" : "default"}
                      sortDirection={orderBy === "treated_time" ? order : false}
                    >
                      <TableSortLabel
                        hideSortIcon={true}
                        active={orderBy === "treated_time"}
                        direction={orderBy === "treated_time" ? order : "asc"}
                        onClick={createSortHandler("treated_time")}
                      >
                        BASE TIME
                        {orderBy !== "treated_time" ? (
                          <ImportExportIcon
                            style={{ color: "rgb(0 0 0 / 20%)" }}
                          />
                        ) : null}
                        {orderBy === "treated_time" ? (
                          <span className={classes.visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    {data.riders && data.riders[0]
                      ? data.riders[0].scores.penalties.map((pen) => {
                          return (
                            <StyledTableCell
                              key={"pen-conf-id-" + pen.penalty_conf_id}
                              align="center"
                            >
                              {
                                penaltyConfs?.filter(
                                  (conf) => conf.id === pen?.penalty_conf_id
                                )[0]?.name
                              }
                            </StyledTableCell>
                          );
                        })
                      : null}

                    <TableCell
                      key="penalty_time"
                      align="center"
                      padding={false ? "none" : "default"}
                      sortDirection={
                        orderBy === "penalty_time" ? order : false
                      }
                    >
                      <TableSortLabel
                        hideSortIcon={true}
                        active={orderBy === "penalty_time"}
                        direction={
                          orderBy === "penalty_time" ? order : "asc"
                        }
                        onClick={createSortHandler("penalty_time")}
                      >
                        PENALTIES TOTAL
                        {orderBy !== "penalty_time" ? (
                          <ImportExportIcon
                            style={{ color: "rgb(0 0 0 / 20%)" }}
                          />
                        ) : null}
                        {orderBy === "penalty_time" ? (
                          <span className={classes.visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>

                    {data.riders && data.riders[0]
                      ? data.riders[0].scores.bonuses?.map((bonus) => {
                          return (
                            <StyledTableCell
                              key={"bon-conf-id-" + bonus?.bonus_conf_id}
                              align="center"
                            >
                              {
                                bonusesConfs?.filter(
                                  (conf) => conf.id === bonus?.bonus_conf_id
                                )[0]?.name
                              }
                            </StyledTableCell>
                          );
                        })
                      : null}
                    <TableCell
                      key="bonus_time"
                      align="center"
                      padding={false ? "none" : "default"}
                      sortDirection={
                        orderBy === "bonus_time" ? order : false
                      }
                    >
                      <TableSortLabel
                        hideSortIcon={true}
                        active={orderBy === "bonus_time"}
                        direction={
                          orderBy === "bonus_time" ? order : "asc"
                        }
                        onClick={createSortHandler("bonus_time")}
                      >
                        BONUSES TOTAL
                        {orderBy !== "bonus_time" ? (
                          <ImportExportIcon
                            style={{ color: "rgb(0 0 0 / 20%)" }}
                          />
                        ) : null}
                        {orderBy === "bonus_time" ? (
                          <span className={classes.visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell
                      key="treated_time_total"
                      align="center"
                      padding={false ? "none" : "default"}
                      sortDirection={
                        orderBy === "treated_time_total" ? order : false
                      }
                    >
                      <TableSortLabel
                        hideSortIcon={true}
                        active={orderBy === "treated_time_total"}
                        direction={
                          orderBy === "treated_time_total" ? order : "asc"
                        }
                        onClick={createSortHandler("treated_time_total")}
                      >
                        TOTAL TIME
                        {orderBy !== "treated_time_total" ? (
                          <ImportExportIcon
                            style={{ color: "rgb(0 0 0 / 20%)" }}
                          />
                        ) : null}
                        {orderBy === "treated_time_total" ? (
                          <span className={classes.visuallyHidden}>
                            {order === "desc"
                              ? "sorted descending"
                              : "sorted ascending"}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stableSort(data?.riders, getComparator(order, orderBy)).map(
                    (row, i) => {
                      if (!row.scores) return null;
                      return (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell
                            align="center"
                            component="th"
                            scope="row"
                          >
                            {row.position}
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            component="th"
                            scope="row"
                          >
                            {row.name}
                          </StyledTableCell>
                          {category ? (
                            <StyledTableCell
                              align="center"
                              component="th"
                              scope="row"
                            >
                              {row.category}
                            </StyledTableCell>
                          ) : null}
                          <StyledTableCell align="center">
                            {row.treated_time}
                          </StyledTableCell>
                          {row.scores?.penalties?.map((pen) => {
                            return (
                              <StyledTableCell
                                key={pen.id + "-pen-quantity"}
                                align="center"
                              >
                                {pen.quantity}
                              </StyledTableCell>
                            );
                          })}
                          <StyledTableCell align="center">
                            {row.penalty_time}
                          </StyledTableCell>
                          {row.scores?.bonuses?.map((bonus) => {
                            return (
                              <StyledTableCell
                                key={bonus.id + "-bon-quantity"}
                                align="center"
                              >
                                {bonus.quantity}
                              </StyledTableCell>
                            );
                          })}
                          <StyledTableCell align="center">
                            {row.bonus_time}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.treated_time_total}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ) : (
        <div style={{ paddingTop: "60px", textAlign: "center" }}>
          <Typography component="h1" variant="h5">
            You don't have any scores yet
          </Typography>
        </div>
      )}
    </>
  );
}
