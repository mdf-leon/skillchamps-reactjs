import React, { useState, useEffect } from 'react';
import PublicAppBar from 'components/PublicAppBar';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import { base } from 'config/api';
import { TableCell, TitleDiv, TheConeMasterDiv } from './styles';
import { useParams } from 'react-router-dom';

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
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {},
  paper: {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
  root: {
    minWidth: 275,
    width: '100%',
  },
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  gridConeMaster: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Result(props: any) {
  const classes = useStyles();
  const { event_id } = useParams();
  const [data, setData] = useState<any>({});

  useEffect(() => {
    base
      .get(`/result/event/${event_id}`)
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => {
        props.history.push(`/event/${event_id}`, {
          message_alert: {
            message:
              "This event doesn't yet have a final result. Please wait for the administration to release it.",
            severity: 'warning',
          },
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const customTableConeMaster = (cone_master) => {
    return (
      <>
        <TitleDiv>
          <Typography component="h5" variant="subtitle1">
            Tie: THE CONE MASTER
          </Typography>
        </TitleDiv>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableBody>
              {cone_master?.map((row, i) => {
                return (
                  <StyledTableRow key={i + 1}>
                    <StyledTableCell align="center">
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Typography
                          component="p"
                          variant="subtitle2"
                          color="textSecondary"
                        >
                          {row.id}.&ensp;
                        </Typography>
                        {row.name}
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  const customTable = (event) => {
    return (
      <>
        <TitleDiv>
          <Typography component="h5" variant="subtitle1">
            {event.trial_name}{' '}
            {event.category_chosen !== 'null' &&
            event.category_chosen !== 'none'
              ? event.category_chosen
              : null}
            &nbsp;
            {event.category2_chosen !== 'null' &&
            event.category2_chosen !== 'none'
              ? event.category2_chosen
              : null}
          </Typography>
        </TitleDiv>
        <TableContainer component={Paper} className={classes.paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">CLASSIFICATION</StyledTableCell>
                <StyledTableCell align="center">NAME</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {event?.riders?.map((row, i) => {
                if (i <= 2) {
                  return (
                    <StyledTableRow key={i + 1}>
                      <StyledTableCell align="center">{i + 1}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.name ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <Typography
                              component="p"
                              variant="subtitle2"
                              color="textSecondary"
                            >
                              {row.id}.&ensp;
                            </Typography>
                            {row.name}
                          </div>
                        ) : null}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <>
      <PublicAppBar
        title={'Result'}
        backButton={{ path: `/event/${event_id}`, title: 'Back to event' }}
        rightButtons={[{ path: `/event/${event_id}`, title: 'Back to event' }]}
        {...props}
      />
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid className={classes.gridConeMaster} item xs={12}>
              <Grid item xl={12} sm={12} md={12} style={{ width: '100%' }}>
                {data?.the_cone_master?.length === 1 ? (
                  <TheConeMasterDiv>
                    <Typography component="h5" variant="subtitle1">
                      THE CONE MASTER
                    </Typography>
                    <div>
                      <Typography component="h4" variant="h4">
                        {data?.the_cone_master[0]?.name}
                      </Typography>
                    </div>
                  </TheConeMasterDiv>
                ) : (
                  customTableConeMaster(data?.the_cone_master)
                )}
              </Grid>
            </Grid>

            {data?.total_events?.map((event, i) => (
              <Grid item key={i} xs={12} sm={12} md={4}>
                {customTable(event)}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
