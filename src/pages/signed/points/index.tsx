import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Sidebar';
import { Modal } from 'components';
import { DateTime } from 'luxon';
import {
  SideBarDiv,
  TimeDiv,
  RoundButton,
  NumberBox,
  TimeInput,
  PenaltyDiv,
  MainDiv,
  ShowTimeInput,
  Blackground,
} from './styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { base } from '../../../config/api';
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from '@material-ui/core/styles';
import { AiOutlineMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import classes from '*.module.sass';
import { Duration } from 'luxon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCardText: {
      color: 'white',
    },
    numberText: {
      fontWeight: 300,
    },
  })
);

export default function BeforePoints(props) {
  const classes = useStyles();
  const [penaltiesConf, setPenaltiesConf] = useState<any[]>([]);
  const [activeModal, setactiveModal] = useState<any>('');
  const [dataTrial, setDataTrial] = useState<any>({});
  const [dataRider, setDataRider] = useState<any>({});
  const [baseTime, setbaseTime] = useState<any>();
  const [tempTime, setTempTime] = useState<any>();
  const [finalTime, setfinalTime] = useState<any>();

  const [point, setpoint] = useState<any>({
    rider_id: localStorage.getItem('ongoing_rider'),
    trial_id: localStorage.getItem('ongoing_trial'),
    time: '0',
  });

  const [pens, setpens] = useState<any[]>([]);

  useEffect(() => {
    updateFinalTime();
  }, [pens]);

  useEffect(() => {
    updateFinalTime();
  }, [baseTime]);

  function stringToMS(tm) {
    // return tm[1].replace('.', '')
    return Duration.fromObject({
      minutes: tm[0],
      milliseconds: tm[1].replace('.', ''),
    }).as('milliseconds');
    // return new Date(ms).toISOString().slice(14, -1);
  }

  const updateFinalTime = () => {
    const msBase = baseTime ? Number(stringToMS(baseTime.split(':'))) : 0;
    // console.log(pens);
    setpoint({ ...point, time: msBase });

    let tempTime = msBase;
    // console.log(tempTime);
    for (let i = 0; i < penaltiesConf.length; i++) {
      tempTime += penaltiesConf[i].time_penalty * (pens[i] || 0);
      // console.log(tempTime);
    }
    let unformatedFinalTime: string = Duration.fromObject({
      milliseconds: tempTime,
    }).toFormat("mm':'S"); // .splice(4, 0, ":")
    let milis = unformatedFinalTime.split(':')[1];
    unformatedFinalTime =
      unformatedFinalTime.substring(0, 3) +
      '0'.repeat(5 - milis.length) +
      milis;

    const formatedFinalTime =
      unformatedFinalTime.substring(0, 5) +
      '.' + // '0'.repeat(5 - milis.length) +
      unformatedFinalTime.substring(5, unformatedFinalTime.length);
    setfinalTime(formatedFinalTime);
  };

  useEffect(() => {
    let params = {
      event_id: localStorage.getItem('event_id'),
      rider_id: point.rider_id,
      trial_id: point.trial_id,
    };
    base
      .get('/managedTrialsList', { params })
      .then((r) => {
        setDataTrial(r.data);
        // // console.log(r.data);
      })
      .catch((er) => {
        // // console.log(er);
      });
    base
      .get('/managedRidersList', { params })
      .then((r) => {
        setDataRider(r.data);
        // // console.log(r.data);
      })
      .catch((er) => {
        // // console.log(er);
      });
    base
      .get(`/managedPenaltyConfsFromTrial`, { params })
      .then((r) => {
        setPenaltiesConf(r.data);
      })
      .catch((er) => {
        // console.log(er);
      });
  }, []);

  useEffect(() => {
    if (point.penalties) setactiveModal(confirm);
  }, [point]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp: any[] = [];
    for (const i in pens) {
      if (pens[i]) {
        temp.push({
          penalty_conf_id: i,
          quantity: pens[i],
        });
      }
    }
    // pens.map((p, i) => {
    //   if (p) {
    //     temp.push({
    //       "penalty_conf_id": i,
    //       "quantity": p
    //     })
    //   }
    // })
    setpoint({ ...point, penalties: temp });
  };

  const penalty = (pen, index) => (
    <div key={`${pen.name}-${pen.id}-${index}`}>
      <Typography variant="body2" component="p">
        <strong>
          {pen.id}. {pen.name} {index}
        </strong>
      </Typography>

      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          width: '100%',
          justifyContent: 'center',
          minHeight: '58px',
        }}
      >
        <NumberBox>
          <div
            style={{
              background: '#1976d3',
              display: 'flex',
              alignItems: 'center',
              width: '50px',
              justifyContent: 'center',
            }}
          >
            <RoundButton
              onClick={(e) => {
                const temp: any[] = [...pens];
                temp[index] = (temp[index] || 0) - 1;
                setpens(temp);
              }}
            >
              -
            </RoundButton>
          </div>

          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              component="p"
              className={classes.numberText}
            >
              {pens[index] || 'none'}
            </Typography>
          </div>

          <div
            style={{
              background: '#1976d3',
              display: 'flex',
              alignItems: 'center',
              width: '50px',
              justifyContent: 'center',
            }}
          >
            <RoundButton
              onClick={(e) => {
                const temp = [...pens];
                temp[index] = (temp[index] || 0) + 1;
                setpens(temp);
              }}
            >
              +
            </RoundButton>
          </div>
        </NumberBox>
      </div>
    </div>
  );

  const cancel = (
    <div style={{ textAlign: 'left' }}>
      <h3>
        Are you sure you want to cancel
        <br /> the score for this runner?
      </h3>
      <p>current scores will be deleted</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ color: 'red', border: '1px solid red', marginRight: '10px' }}
          onClick={() => setactiveModal('')}
        >
          Delete points
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setactiveModal('')}
        >
          Continue scoring
        </Button>
      </div>
    </div>
  );

  const confirm = (
    <div style={{ textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '59px' }}>
          <p>
            Name: NAME
            <br />
            Category: CATEGORY
            <br />
            Position*: POSITION
            <br />
          </p>
        </div>
        <div>
          <h3 style={{ margin: '0' }}>Realized Time</h3>
          <h1 style={{ margin: '0' }}>00:00.000</h1>
        </div>
      </div>

      <div>
        {point.penalties
          ? point.penalties.map((penalty) => {
              return (
                <p>
                  {
                    penaltiesConf.find(
                      (e) => e.id === parseInt(penalty.penalty_conf_id)
                    ).name
                  }{' '}
                  --- {penalty.quantity}
                </p>
              );
            })
          : null}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <Button
          style={{ color: 'red', border: '1px solid red', marginRight: '10px' }}
          onClick={() => setactiveModal('')}
        >
          Cancel
        </Button>
        <Button onClick={() => setactiveModal('')}>Continue scoring</Button>
      </div>
    </div>
  );

  // const totalTempDefine = (
  //   <div>
  //     <Typography
  //       gutterBottom
  //       variant="h5"
  //       component="h2"
  //       className={classes.mainCardText}
  //     >
  //       Please set the runner time
  //     </Typography>
  //     <TimeInput
  //       onChange={(e) => {
  //         setpoint({
  //           ...point,
  //           time: DateTime.fromISO("00:" + e.target.value).toMillis(),
  //         });
  //       }}
  //       placeholder="00:00.000"
  //       inputtype="time"
  //     />

  //     <div style={{ marginTop: "20px" }}>
  //       <Button onClick={() => setactiveModal("")}>Save Time</Button>
  //       <Button
  //         style={{
  //           color: "red",
  //           border: "1px solid red",
  //           marginRight: "10px",
  //           marginTop: "15px",
  //         }}
  //         onClick={() => setactiveModal("")}
  //       >
  //         Cancel
  //       </Button>
  //     </div>
  //   </div>
  // );

  const setTimer = () => {
    setbaseTime(tempTime);
    // setpoint({ ...point, time: tempTime.replace(':', '').replace('.', '') });
    setactiveModal('');
    // updateFinalTime()
  };

  const customTempDefine = (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Please set the runner time
      </Typography>
      <TimeInput
        placeholder="00:00.000"
        value={baseTime || undefined}
        inputtype="time"
        onChange={(e) => setTempTime(e.target.value)}
      />

      <div
        style={{
          display: 'flex',
          marginTop: '20px',
          justifyContent: 'space-between',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setactiveModal('');
            setTempTime(0);
          }}
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={() => setTimer()}>
          Save Time
        </Button>
      </div>
    </div>
  );

  const modalContent = (modalName, id = null) => {
    const modals = {
      customTempDefine,
      // totalTempDefine,
      confirm,
    };
    return modals[modalName] || null;
  };

  const onFinish = () => {
    // TODO: fazer um modal confirmando o fim da corrida

    let penalties: any[] = [];
    for (let i = 0; i < penaltiesConf.length; i++) {
      penalties.push({
        penalty_conf_id: penaltiesConf[i].id,
        quantity: pens[i] || 0,
      });
    }

    const body = {...point, penalties}


    // console.log(body);
  };

  return (
    <>
      <Sidebar topnav title="Manageable Events" rightIcon="gear" />
      <Card style={{ minHeight: '100%' }}>
        <MainDiv style={{ marginTop: '50px', minHeight: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#6202EE',
              padding: '14px 16px',
            }}
          >
            <div>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.mainCardText}
              >
                {dataTrial.name}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.mainCardText}
              >
                {dataRider.name}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.mainCardText}
              >
                Advanced
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.mainCardText}
              >
                {dataRider.motorcycle_plate}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => onFinish()}
              >
                FINISH
              </Button>
            </div>
          </div>

          <TimeDiv>
            <div
              style={{
                width: '100%',
                cursor: 'pointer',
                border: '1px solid',
                borderRadius: '4px',
              }}
              onClick={() => setactiveModal('customTempDefine')}
            >
              <Typography gutterBottom variant="h5" component="h2">
                Base Time
              </Typography>
              <ShowTimeInput
                readOnly
                style={{ cursor: 'pointer', color: 'black' }} 
                placeholder="00:00.000"
                inputtype="number"
                value={baseTime}
              />
            </div>

            <div style={{ width: '100%', cursor: 'context-menu' }}>
              <Typography gutterBottom variant="h5" component="h2">
                Total Time
              </Typography>
              <Typography variant="h5" component="h2">
                {finalTime || '00:00.000'}
              </Typography>
            </div>
          </TimeDiv>

          <PenaltyDiv>
            {penaltiesConf.map((p, i) => {
              return penalty(p, i);
            })}
          </PenaltyDiv>
        </MainDiv>
      </Card>
      <Modal
        bodyStyle={{ padding: '25px 14px' }}
        show={activeModal !== ''}
        onBackgroundClick={() => setactiveModal('')}
      >
        {modalContent(activeModal)}
      </Modal>
    </>
  );
}
