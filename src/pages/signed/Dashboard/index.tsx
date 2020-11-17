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
        console.log(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <button onClick={() => console.log(data.riders[0].scores.penalties)}>
        aa
      </button>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
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
              {data?.riders?.map((row) => {
                if (!row.scores) return null;
                return (
                  <StyledTableRow key={row.name}>
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
  );
}
