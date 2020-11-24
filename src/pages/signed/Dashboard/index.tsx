import React, { useState, useEffect } from "react";
import AppBar from "../../../components/AppBar";
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
  TableCell,
  Typography,
  TableBody,
  Table,
} from "@material-ui/core";
import { base } from "../../../config/api";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
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
    paddingTop: 50,
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function CustomizedTables(props: any) {
  const classes = useStyles();

  const [data, setData] = useState<any>({});
  const [penaltyConfs, setPenaltyConfs] = useState<any>([]);
  const [bonusesConfs, setBonusesConfs] = useState<any>([]);

  let { trial_id, event_id } = useParams();
  useEffect(() => {
    let params: any = {
      event_id,
      trial_id,
    };
    base
      .get(`/fullRanking2`, { params })
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
  }, []);

  return (
    <>
      <AppBar title={props.location.state.trialName} {...props} />
      {data?.riders && data.riders[0].scores ? (
        <Card className={classes.root}>
          <CardContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>POSITION</StyledTableCell>
                    <StyledTableCell>DRIVER</StyledTableCell>
                    <StyledTableCell align="center">TIME</StyledTableCell>
                    {data.riders && data.riders[0]
                      ? data.riders[0].scores.penalties.map((pen) => {
                          return (
                            <StyledTableCell align="center">
                              {
                                penaltyConfs?.filter(
                                  (conf) => conf.id == pen?.penalty_conf_id
                                )[0]?.name
                              }
                            </StyledTableCell>
                          );
                        })
                      : null}
                    {data.riders && data.riders[0]
                      ? data.riders[0].scores.bonuses?.map((bonus) => {
                          return (
                            <StyledTableCell align="center">
                              {
                                bonusesConfs?.filter(
                                  (conf) => conf.id == bonus?.bonus_conf_id
                                )[0]?.name
                              }
                            </StyledTableCell>
                          );
                        })
                      : null}
                    <StyledTableCell align="center">TOTAL TEMP</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.riders?.map((row, i) => {
                    if (!row.scores) return null;
                    return (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {i + 1}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.scores?.time || 0}
                        </StyledTableCell>
                        {row.scores?.penalties?.map((pen) => {
                          return (
                            <StyledTableCell align="center">
                              {pen.quantity}
                            </StyledTableCell>
                          );
                        })}
                        {row.scores?.bonuses?.map((bonus) => {
                          return (
                            <StyledTableCell align="center">
                              {bonus.quantity}
                            </StyledTableCell>
                          );
                        })}
                        <StyledTableCell align="center">
                          {row.scores?.time_total || 0}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ) : (
        <div style={{ paddingTop: "100px", textAlign: "center" }}>
          <Typography component="h1" variant="h5">
            You don't have any scores yet
          </Typography>
        </div>
      )}
    </>
  );
}
