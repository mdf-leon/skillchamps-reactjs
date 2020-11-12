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

  let { trial_id, event_id } = useParams();
  useEffect(() => {
    let params: any = {
      event_id,
      trial_id,
    };
    console.log(params);

    base
      .get(`/fullRanking/${event_id}`)
      .then((r) => {
        setData(r.data.event.riders);
        console.log(r.data);
      })
      .catch((err) => console.log(err));
    base
      .get(`/managedPenaltyConfsFromTrial`, { params })
      .then((r) => {
        setPenaltyConfs(r.data);
        console.log(r.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>DRIVER</StyledTableCell>
                <StyledTableCell align="right">CATEGORY</StyledTableCell>
                {data[0]?.scores[0].penalties.map((pen) => {
                  console.log("pen.penalty_conf_id");
                  return (
                    <StyledTableCell align="right">
                      {
                        penaltyConfs?.filter(
                          (conf) => conf.id == pen?.penalty_conf_id
                        )[0]?.name
                      }
                    </StyledTableCell>
                  );
                })}
                <StyledTableCell align="right">TOTAL TEMP</StyledTableCell>
                <StyledTableCell align="right">
                  Protein&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.category}
                  </StyledTableCell>
                  {data[0]?.scores[0].penalties.map((pen) => {
                    console.log("pen.penalty_conf_id");
                    return (
                      <StyledTableCell align="right">
                        {pen.quantity}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
