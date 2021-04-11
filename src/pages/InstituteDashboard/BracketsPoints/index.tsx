import React, { useState, useEffect } from 'react';
// import Message from "components/Message";
import { useParams, useLocation } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Modal } from 'components';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import { MainPage, Bracket, Line } from './styles';
import { base } from '../../../config/api';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    mainCardText: {
      color: 'white',
    },
    numberText: {
      fontWeight: 300,
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '0px',
    },
    action: {
      position: 'unset',
    },
  })
);

export default function AddScore(props) {
  const classes = useStyles();
  let qparams = new URLSearchParams(useLocation().search);
  const [activeModal, setactiveModal] = useState<any>('');
  const { institute_id, event_id, group_id, position_id } = useParams();
  const [bracketData, setBrecketData] = useState<any>();

  const [riderSelected, setRiderSelected] = useState<any>(0);
  console.log(riderSelected);

  const handleFinish = () => {
    base
      .put(
        `/bracketScore/${qparams.get('trial_id')}/${group_id}/${position_id}`,
        {
          winner: bracketData && bracketData[`rider${riderSelected}`]?.id,
        }
      )
      .then((res) => {
        props.history.push(
          `/dashboard/institute/${institute_id}/manage/event/${event_id}/score/select_trial_rider`
        );
        // console.log(
        //   `/bracketScore/${qparams.get('trial_id')}/${group_id}/${position_id}`,
        //   {
        //     winner: bracketData && bracketData[`rider${riderSelected}`]?.id.toString(),
        //   }
        // );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    base
      .get(`/trial/${qparams.get('trial_id')}/getBrackets`)
      .then((res) => {
        setBrecketData(res.data.tournament[group_id][position_id]);
        console.log(res.data.tournament[group_id][position_id]);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group_id, position_id]);

  const finishConfirm = (
    <Card>
      <CardContent className={classes.content}>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Typography
            style={{ textAlign: 'center' }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Do you really want to finish scoring for the rider
            {bracketData && bracketData[`rider${riderSelected}`]?.name}
            TODO CARDZINHO DO RIDER
            {/* {dataRider.name}? */}
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setactiveModal('')}
        >
          Cancel
        </Button>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => handleFinish()}
        >
          Finish
        </Button>
      </CardActions>
    </Card>
  );

  const modalContent = (modalName) => {
    const modals = {
      finishConfirm,
    };
    return modals[modalName] || null;
  };

  return (
    <div>
      <Modal
        bodyStyle={{ margin: 'auto 20px', width: '100%' }}
        noPadding
        show={activeModal !== ''}
        onBackgroundClick={() => setactiveModal('')}
      >
        {modalContent(activeModal)}
      </Modal>
      {/* <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      /> */}
      <AppBar title="Scoring for a rider" isManager {...props} />
      <MainPage>
        <div>
          <div className="mb-20">
            <h1>Select the winner.</h1>
          </div>
          <Bracket
            isFocus={riderSelected === 0}
            onClick={() => setRiderSelected(1)}
          >
            <div>
              <div className="d-flex">
                <Typography
                  component={'span'}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {bracketData?.rider1.id}
                  .&nbsp;
                </Typography>
                <Typography component={'span'} gutterBottom variant="h6">
                  {bracketData?.rider1.name}
                </Typography>
              </div>
              <Typography
                component={'span'}
                style={{ margin: 0 }}
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                Bike: {bracketData?.rider1.motorcycle}
              </Typography>
            </div>
          </Bracket>

          <Line />

          <Bracket
            isFocus={riderSelected === 1}
            onClick={() => setRiderSelected(2)}
          >
            <div>
              <div className="d-flex">
                <Typography
                  component={'span'}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {bracketData?.rider2.id}
                  .&nbsp;
                </Typography>
                <Typography component={'span'} gutterBottom variant="h6">
                  {bracketData?.rider2.name}
                </Typography>
              </div>
              <Typography
                component={'span'}
                style={{ margin: 0 }}
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                Bike: {bracketData?.rider2.motorcycle}
              </Typography>
            </div>
          </Bracket>
          <div className="mt-40" style={{ width: '100%' }}>
            <p className="mb-4">Confirm the winner</p>
            <Button
              className={classes.action}
              variant="contained"
              color="secondary"
              onClick={() =>
                riderSelected !== 0
                  ? setactiveModal('finishConfirm')
                  : setactiveModal('')
              }
              fullWidth
            >
              {riderSelected !== 0
                ? `Confirm rider: ${bracketData[`rider${riderSelected}`].name}`
                : 'Confirm'}
            </Button>
          </div>
        </div>
      </MainPage>
    </div>
  );
}
