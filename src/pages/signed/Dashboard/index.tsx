import React, { useState, useEffect } from 'react';
import AppBar from '../../../components/AppBar';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
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
  TableSortLabel,
} from '@material-ui/core';
import { base } from '../../../config/api';
import { Duration } from 'luxon';

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
      '&:nth-of-type(odd)': {
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
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

type Order = 'asc' | 'desc';

export default function CustomizedTables(props: any) {
  const classes = useStyles();

  const [data, setData] = useState<any>({});
  const [penaltyConfs, setPenaltyConfs] = useState<any>([]);
  const [bonusesConfs, setBonusesConfs] = useState<any>([]);

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('position');

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

  const msToDefault = (ms) => {
    const duration = Duration.fromObject({ milliseconds: ms })
      .normalize()
      .shiftTo('minutes', 'seconds', 'milliseconds')
      .toObject();
    const minutesT = `${duration.minutes}`.padStart(2, '0');
    const secondsT = `${duration.seconds}`.padStart(2, '0');
    const millisecondsT = `${duration.milliseconds}`.padEnd(3, '0');
    const timeT = `${minutesT}:${secondsT}.${millisecondsT}`;
    return timeT;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

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
                    <StyledTableCell
                      key="position"
                      sortDirection={orderBy === 'position' ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === 'position'}
                        direction={orderBy === 'position' ? order : 'asc'}
                        onClick={createSortHandler('position')}
                      >
                        POSITION
                        {orderBy === 'position' ? (
                          <span className={classes.visuallyHidden}>
                            {order === 'desc'
                              ? 'sorted descending'
                              : 'sorted ascending'}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </StyledTableCell>
                    <StyledTableCell>DRIVER</StyledTableCell>
                    <StyledTableCell align="center">TIME</StyledTableCell>
                    {data.riders && data.riders[0]
                      ? data.riders[0].scores.penalties.map((pen) => {
                          return (
                            <StyledTableCell key={"pen-conf-id-"+pen.penalty_conf_id} align="center">
                              {
                                penaltyConfs?.filter(
                                  (conf) => conf.id == pen?.penalty_conf_id
                                )[0]?.name
                              }
                            </StyledTableCell>
                          );
                        })
                      : null}
                    <StyledTableCell align="center">
                      PENALTIES TOTAL
                    </StyledTableCell>
                    {data.riders && data.riders[0]
                      ? data.riders[0].scores.bonuses?.map((bonus) => {
                          return (
                            <StyledTableCell key={"bon-conf-id-"+bonus?.bonus_conf_id} align="center">
                              {
                                bonusesConfs?.filter(
                                  (conf) => conf.id == bonus?.bonus_conf_id
                                )[0]?.name
                              }
                            </StyledTableCell>
                          );
                        })
                      : null}
                    <StyledTableCell align="center">
                      BONUSES TOTAL
                    </StyledTableCell>
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
                          {row.scores?.time ? msToDefault(row.scores?.time) : 0}
                        </StyledTableCell>
                        {row.scores?.penalties?.map((pen) => {
                          return (
                            <StyledTableCell key={pen.id+"-pen-quantity"} align="center">
                              {pen.quantity}
                            </StyledTableCell>
                          );
                        })}
                        <StyledTableCell align="center">n/a</StyledTableCell>
                        {row.scores?.bonuses?.map((bonus) => {
                          return (
                            <StyledTableCell key={bonus.id+"-bon-quantity"} align="center">
                              {bonus.quantity}
                            </StyledTableCell>
                          );
                        })}
                        <StyledTableCell align="center">n/a</StyledTableCell>
                        <StyledTableCell align="center">
                          {row.scores?.time_total
                            ? msToDefault(row.scores?.time_total)
                            : 0}
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
        <div style={{ paddingTop: '100px', textAlign: 'center' }}>
          <Typography component="h1" variant="h5">
            You don't have any scores yet
          </Typography>
        </div>
      )}
    </>
  );
}
