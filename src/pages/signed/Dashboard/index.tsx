import React, { useState, useEffect } from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { base } from "../../../config/api";
import { useParams } from "react-router-dom";

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

const useStyles = makeStyles({
  table: {},
  root: {
    minWidth: 275,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const [data, setData] = useState<any[]>([]);
  const [penaltyConfs, setPenaltyConfs] = useState<any>([]);
  const [bonusesConfs, setBonusesConfs] = useState<any>([]);

  let { trial_id, event_id } = useParams();
  useEffect(() => {
    let params: any = {
      event_id,
      trial_id,
    };
    base
      .get(`/fullRanking/${event_id}`)
      .then((r) => {
        setData(r.data.event.riders);
      })
      .catch((err) => {});
    base
      .get(`/managedPenaltyConfsFromTrial`, { params })
      .then((r) => {
        setPenaltyConfs(r.data);
      })
      .catch((err) => {});
    base
      .get(`/managedBonusConfsFromTrial`, { params })
      .then((r) => {
        setBonusesConfs(r.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <Card className={classes.root}>
      <button onClick={() => console.log(data)}>aa</button>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>DRIVER</StyledTableCell>
                <StyledTableCell align="center">TIME</StyledTableCell>
                {data[0]?.scores[0].penalties.map((pen) => {
                  return (
                    <StyledTableCell align="center">
                      {
                        penaltyConfs?.filter(
                          (conf) => conf.id == pen?.penalty_conf_id
                        )[0]?.name
                      }
                    </StyledTableCell>
                  );
                })}
                {data[0]?.scores[1].bonuses.map((bonus) => {
                  return (
                    <StyledTableCell align="center">
                      {
                        bonusesConfs?.filter(
                          (conf) => conf.id == bonus?.bonus_conf_id
                        )[0]?.name
                      }
                    </StyledTableCell>
                  );
                })}
                <StyledTableCell align="center">TOTAL TEMP</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.scores[0].time}
                  </StyledTableCell>
                  {data[0]?.scores[0].penalties.map((pen) => {
                    return (
                      <StyledTableCell align="center">
                        {pen.quantity}
                      </StyledTableCell>
                    );
                  })}
                  {data[0]?.scores[1].bonuses.map((bonus) => {
                    return (
                      <StyledTableCell align="center">
                        {bonus.quantity}
                      </StyledTableCell>
                    );
                  })}
                  <StyledTableCell align="center">
                    {row.scores[0].time_total}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
