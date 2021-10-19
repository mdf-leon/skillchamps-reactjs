import React, { useState, useEffect } from "react";
import Message from "components/Message";
import AppBar from "components/AppBar";
import { Modal } from "components";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import querySearch from "stringquery";
import { useParams, useLocation } from "react-router-dom";
import {
  YesNoDiv,
  TimeDiv,
  RoundButton,
  NumberBox,
  TimeInput,
  PenaltyDiv,
  MainDiv,
  ShowTimeInput,
} from "./styles";
import { base } from "../../../config/api";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Duration } from "luxon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCardText: {
      color: "white",
    },
    numberText: {
      fontWeight: 300,
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "0px",
    },
    action: {
      position: "unset",
    },
  })
);

export default function AddScore(props: any) {
  const { institute_id, event_id, score_id } = useParams();
  const classes = useStyles();
  // const [scoreInfo, setScoreInfo] = useState<any>({});
  const [penaltiesConf, setPenaltiesConf] = useState<any[]>([]);
  const [bonusesConf, setBonusesConf] = useState<any[]>([]);
  const [activeModal, setactiveModal] = useState<any>("");
  const [dataTrial, setDataTrial] = useState<any>({});
  const [dataRider, setDataRider] = useState<any>({});
  const [baseTime, setbaseTime] = useState<any>();
  const [tempTime, setTempTime] = useState<any>();
  const [finalTime, setfinalTime] = useState<any>();
  const [isButtonTimerDisabled, setIsButtonTimerDisabled] = useState<boolean>(
    true
  );

  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });

  const [point, setpoint] = useState<any>({
    rider_id: localStorage.getItem("ongoing_rider"),
    trial_id: localStorage.getItem("ongoing_trial"),
    time: "0",
  });

  const { trial_id, rider_id } = querySearch(useLocation().search);

  const submitBool = (time) => {
    const body = {
      rider_id,
      trial_id,
      time,
    };
    base
      .post(`/addBoolScore`, body)
      .then(() => {
        props.history.push(
          `/dashboard/institute/${institute_id}/manage/event/${event_id}/score/select_trial_rider`,
          {
            message_alert: {
              message: `Score for ${dataRider.name} created successfully`,
              severity: "success",
            },
          }
        );
      })
      .catch((er) => console.log(er));
  };

  const [pens, setpens] = useState<any[]>([]);
  const [bons, setbons] = useState<any[]>([]);

  useEffect(() => {
    updateFinalTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pens]);

  useEffect(() => {
    updateFinalTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bons]);

  useEffect(() => {
    updateFinalTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseTime]);

  function stringToMS(tm: string[]) {
    // return tm[1].replace('.', '')
    return Duration.fromObject({
      minutes: tm[0],
      milliseconds: tm[1].replace(".", ""),
    }).as("milliseconds");
    // return new Date(ms).toISOString().slice(14, -1);
  }

  const updateFinalTime = () => {
    const msBase = baseTime ? Number(stringToMS(baseTime.split(":"))) : 0;
    setpoint({ ...point, time: msBase });

    let tempTime = msBase;
    // console.log(tempTime);
    for (let i = 0; i < penaltiesConf.length; i++) {
      tempTime += penaltiesConf[i].time_penalty * (pens[i] || 0);
      // console.log(tempTime);
    }

    for (let i = 0; i < bonusesConf.length; i++) {
      tempTime -= bonusesConf[i].time_bonus * (bons[i] || 0);
      // console.log(tempTime);
    }

    let unformatedFinalTime: string = Duration.fromObject({
      milliseconds: tempTime,
    }).toFormat("mm':'S"); // .splice(4, 0, ":")
    let milis = unformatedFinalTime.split(":")[1];
    unformatedFinalTime =
      unformatedFinalTime.substring(0, 3) +
      "0".repeat(5 - milis.length) +
      milis;

    const formatedFinalTime =
      unformatedFinalTime.substring(0, 5) +
      "." + // '0'.repeat(5 - milis.length) +
      unformatedFinalTime.substring(5, unformatedFinalTime.length);
    setfinalTime(formatedFinalTime);
  };

  // let { score_id } = useParams();
  useEffect(() => {
    let params = {
      event_id,
      rider_id: point.rider_id,
      trial_id: point.trial_id,
    };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch(() => {});

    base
      .get("/managedRidersList", { params })
      .then((r) => {
        setDataRider(r.data);
      })
      .catch(() => {});
    base
      .get(`/managedPenaltyConfsFromTrial`, { params })
      .then((r) => {
        setPenaltiesConf(r.data);
      })
      .catch(() => {});
    base
      .get(`/managedBonusConfsFromTrial`, { params })
      .then((r) => {
        setBonusesConf(r.data);
      })
      .catch(() => {});
    base
      .get(`/score/${score_id}?trial_id=${trial_id}&rider_id=${rider_id}`)
      .then((r) => {
        // setScoreInfo(r.data);
        const pensTemp: any[] = [];
        const bonsTemp: any[] = [];
        for (const pen of r.data.penalties) {
          pensTemp.push(pen.quantity);
        }
        for (const bon of r.data.bonuses) {
          bonsTemp.push(bon.quantity);
        }
        setpens(pensTemp);
        setbons(bonsTemp);
        // setbons(r.data.bonuses);
        const duration = Duration.fromObject({ milliseconds: r.data.time })
          .normalize()
          .shiftTo("minutes", "seconds", "milliseconds")
          .toObject();
        const minutesT = `${duration.minutes}`.padStart(2, "0");
        const secondsT = `${duration.seconds}`.padStart(2, "0");
        const millisecondsT = `${duration.milliseconds}`.padEnd(3, "0");
        const timeT = `${minutesT}:${secondsT}.${millisecondsT}`;
        setbaseTime(timeT);

        const durationF = Duration.fromObject({
          milliseconds: r.data.time_total,
        })
          .normalize()
          .shiftTo("minutes", "seconds", "milliseconds")
          .toObject();
        const minutesTF = `${durationF.minutes}`.padStart(2, "0");
        const secondsTF = `${durationF.seconds}`.padStart(2, "0");
        const millisecondsTF = `${durationF.milliseconds}`.padEnd(3, "0");
        const timeTF = `${minutesTF}:${secondsTF}.${millisecondsTF}`;

        setTimeout(function () {
          setfinalTime(timeTF);
        }, 500);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tempTime && tempTime.length === 9) {
      setIsButtonTimerDisabled(false);
    }
  }, [tempTime]);

  useEffect(() => {
    // if (point.penalties) setactiveModal(confirm);
  }, [point]);

  const penalty = (pen, index) => (
    <div key={`${pen.name}-${pen.id}-${index}`}>
      <Typography variant="body2" component="p">
        <strong>
          {pen.id}. {pen.name} {index}
        </strong>
      </Typography>

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          width: "100%",
          justifyContent: "center",
          minHeight: "58px",
        }}
      >
        <NumberBox>
          <div
            style={{
              background: "#1976d3",
              display: "flex",
              alignItems: "center",
              width: "50px",
              justifyContent: "center",
            }}
          >
            <RoundButton
              onClick={() => {
                const temp: any[] = [...pens];
                if (pens[index] > 0) {
                  temp[index] = (temp[index] || 0) - 1;
                  setpens(temp);
                }
              }}
            >
              -
            </RoundButton>
          </div>

          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="p"
              className={classes.numberText}
            >
              {pens[index] || "none"}
            </Typography>
          </div>

          <div
            style={{
              background: "#1976d3",
              display: "flex",
              alignItems: "center",
              width: "50px",
              justifyContent: "center",
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

  const bonus = (bon, index) => (
    <div key={`${bon.name}-${bon.id}-${index}`}>
      <Typography variant="body2" component="p">
        <strong>
          {bon.id}. {bon.name} {index}
        </strong>
      </Typography>

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          width: "100%",
          justifyContent: "center",
          minHeight: "58px",
        }}
      >
        <NumberBox>
          <div
            style={{
              background: "#1976d3",
              display: "flex",
              alignItems: "center",
              width: "50px",
              justifyContent: "center",
            }}
          >
            <RoundButton
              onClick={(e) => {
                const temp: any[] = [...bons];
                if (bons[index] > 0) {
                  temp[index] = (temp[index] || 0) - 1;
                  setbons(temp);
                }
              }}
            >
              -
            </RoundButton>
          </div>

          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="p"
              className={classes.numberText}
            >
              {bons[index] || "none"}
            </Typography>
          </div>

          <div
            style={{
              background: "#1976d3",
              display: "flex",
              alignItems: "center",
              width: "50px",
              justifyContent: "center",
            }}
          >
            <RoundButton
              onClick={(e) => {
                const temp: any[] = [...bons];
                // se o tempo total for maior que o tempo do bonus, permite clicar no botao
                const minutes = finalTime.split(":")[0];
                const milliseconds = finalTime.split(":")[1].replace(".", "");
                const dur = Duration.fromObject({ minutes, milliseconds })
                  .normalize()
                  .shiftTo("milliseconds")
                  .toObject().milliseconds;
                if (dur >= bonusesConf[index].time_bonus) {
                  temp[index] = (temp[index] || 0) + 1;
                  setbons(temp);
                }
              }}
            >
              +
            </RoundButton>
          </div>
        </NumberBox>
      </div>
    </div>
  );

  // const bonuses = (bons, index) => (
  //   <div key={`${bons.name}-${bons.id}-${index}`}>
  //     <Typography variant="body2" component="p">
  //       <strong>
  //         {bons.id}. {bons.name} {index}
  //       </strong>
  //     </Typography>

  //     <div
  //       style={{
  //         display: "flex",
  //         marginTop: "10px",
  //         width: "100%",
  //         justifyContent: "center",
  //         minHeight: "58px",
  //       }}
  //     >
  //       <NumberBox>
  //         <div
  //           style={{
  //             background: "#1976d3",
  //             display: "flex",
  //             alignItems: "center",
  //             width: "50px",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <RoundButton
  //             onClick={(e) => {
  //               const temp: any[] = [...bons];
  //               temp[index] = (temp[index] || 0) - 1;
  //               setbons(temp);
  //             }}
  //           >
  //             -
  //           </RoundButton>
  //         </div>

  //         <div
  //           style={{
  //             height: "100%",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <Typography
  //             variant="h4"
  //             component="p"
  //             className={classes.numberText}
  //           >
  //             {bons[index] || "none"}
  //           </Typography>
  //         </div>

  //         <div
  //           style={{
  //             background: "#1976d3",
  //             display: "flex",
  //             alignItems: "center",
  //             width: "50px",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <RoundButton
  //             onClick={() => {
  //               const temp:any[] = [...bons];
  //               temp[index] = (temp[index] || 0) + 1;
  //               setbons(temp);
  //             }}
  //           >
  //             +
  //           </RoundButton>
  //         </div>
  //       </NumberBox>
  //     </div>
  //   </div>
  // );

  // const cancel = (
  //   <div style={{ textAlign: "left" }}>
  //     <h3>
  //       Are you sure you want to cancel
  //       <br /> the score for this runner?
  //     </h3>
  //     <p>current scores will be deleted</p>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         marginTop: "20px",
  //       }}
  //     >
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         style={{ color: "red", border: "1px solid red", marginRight: "10px" }}
  //         onClick={() => setactiveModal("")}
  //       >
  //         Delete points
  //       </Button>
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         onClick={() => setactiveModal("")}
  //       >
  //         Continue scoring
  //       </Button>
  //     </div>
  //   </div>
  // );

  // const confirm = (
  //   <div style={{ textAlign: "left" }}>
  //     <div style={{ display: "flex", justifyContent: "space-between" }}>
  //       <div style={{ marginRight: "59px" }}>
  //         <p>
  //           Name: NAME
  //           <br />
  //           Category: CATEGORY
  //           <br />
  //           Position*: POSITION
  //           <br />
  //         </p>
  //       </div>
  //       <div>
  //         <h3 style={{ margin: "0" }}>Realized Time</h3>
  //         <h1 style={{ margin: "0" }}>00:00.000</h1>
  //       </div>
  //     </div>

  //     <div>
  //       {point.penalties
  //         ? point.penalties.map((penalty) => {
  //             return (
  //               <p>
  //                 {
  //                   penaltiesConf.find(
  //                     (e) => e.id === parseInt(penalty.penalty_conf_id)
  //                   ).name
  //                 }{" "}
  //                 --- {penalty.quantity}
  //               </p>
  //             );
  //           })
  //         : null}
  //     </div>

  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         marginTop: "20px",
  //       }}
  //     >
  //       <Button
  //         style={{ color: "red", border: "1px solid red", marginRight: "10px" }}
  //         onClick={() => setactiveModal("")}
  //       >
  //         Cancel
  //       </Button>
  //       <Button onClick={() => setactiveModal("")}>Continue scoring</Button>
  //     </div>
  //   </div>
  // );

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
    setactiveModal("");
    // updateFinalTime()
  };

  const handleFinish = async () => {
    const temp = { ...point, penalties: [], bonuses: [] };
    for (let i = 0; i < penaltiesConf.length; i++) {
      temp.penalties.push({
        penalty_conf_id: penaltiesConf[i].id,
        quantity: pens[i] || 0,
      });
    }
    for (let i = 0; i < bonusesConf.length; i++) {
      temp.bonuses.push({
        bonus_conf_id: bonusesConf[i].id,
        quantity: bons[i] || 0,
      });
    }
    await base
      .put(`/score/${score_id}`, temp)
      .then(() => {
        props.history.push(
          `/dashboard/institute/${institute_id}/manage/event/${event_id}/update/score`,
          {
            // riderName:
            message_alert: {
              message: `Score for ${dataRider.name} updated successfully`,
              severity: "success",
            },
          }
        );
      })
      .catch((er) => {
        setMessageParams({
          message:
            "Error on trying to post the score, check your internet connection",
          severity: "error",
        });
      });
  };

  const handleDelete = async () => {
    await base
      .delete(`/scoree/${score_id}`)
      .then(() => {
        props.history.push(
          `/dashboard/institute/${institute_id}/manage/event/${event_id}/update/score`,
          {
            message_alert: {
              message: `Score for ${dataRider.name} deleted successfully`,
              severity: "success",
            },
          }
        );
      })
      .catch(() => {
        console.log("oi eu errwei");
        setMessageParams({
          message:
            "Error on trying to delete the score, check your internet connection",
          severity: "error",
        });
        console.log(messageParams);
      });
    setactiveModal("");
  };

  const customTempDefine = (
    <div style={{ padding: "25px 14px" }}>
      <Typography gutterBottom variant="h5" component="h2">
        Please set the runner time
      </Typography>
      <TimeInput
        placeholder="00:00.000"
        value={baseTime || undefined}
        inputtype="time"
        onChange={(e) => setTempTime(e.target.value)}
      />

      {tempTime && tempTime.length < 9 ? (
        <Typography
          style={{ position: "absolute" }}
          color="error"
          variant="body2"
          component="p"
        >
          Please write down the full time, i.e. 12:34.567
        </Typography>
      ) : null}

      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setactiveModal("");
            setTempTime(0);
          }}
        >
          Cancel
        </Button>
        <Button
          disabled={isButtonTimerDisabled}
          variant="contained"
          color="primary"
          onClick={() => setTimer()}
        >
          Save Time
        </Button>
      </div>
    </div>
  );

  const deleteConfirm = (
    <Card>
      <CardContent className={classes.content}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Do you really want to delete the score for the rider
            {dataRider.name}?
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setactiveModal("")}
        >
          CANCEL
        </Button>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => handleDelete()}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );

  const finishConfirm = (
    <Card>
      <CardContent className={classes.content}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Do you really want to finish update the score for the rider{" "}
            {dataRider.name}?
          </Typography>
          <div style={{ margin: "auto" }}>
            <Typography
              style={{ textAlign: "center" }}
              gutterBottom
              color="textSecondary"
              variant="body2"
              component="p"
            >
              BASE TIME: &nbsp; TOTAL TIME:
            </Typography>
            <Typography
              style={{ textAlign: "center" }}
              gutterBottom
              color="textSecondary"
              variant="body2"
              component="p"
            >
              {baseTime || "00:00.000"} &nbsp;&nbsp;&nbsp; {finalTime}
            </Typography>

            <div style={{ marginTop: "20px" }}>
              <div>
                <Typography
                  gutterBottom
                  color="textSecondary"
                  variant="body2"
                  component="p"
                >
                  Penalties:
                </Typography>
                {penaltiesConf.map((content, i) => (
                  <Typography
                    key={`typography` + content.id}
                    gutterBottom
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {content.name}: {pens[i] || "0"}
                  </Typography>
                ))}
              </div>
              <div style={{ marginTop: "20px" }}>
                <Typography
                  gutterBottom
                  color="textSecondary"
                  variant="body2"
                  component="p"
                >
                  Bonuses:
                </Typography>
                {bonusesConf.map((content, i) => (
                  <Typography
                    key={`typography` + content.id}
                    gutterBottom
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {content.name}: {bons[i] || "0"}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          className={classes.action}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setactiveModal("")}
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

  const modalContent = (modalName, id = null) => {
    const modals = {
      customTempDefine,
      deleteConfirm,
      finishConfirm,
      // totalTempDefine,
      // confirm,
    };
    return modals[modalName] || null;
  };

  // const onFinish = () => {
  //   // TODO: fazer um modal confirmando o fim da corrida

  //   let penalties: any[] = [];
  //   for (let i = 0; i < penaltiesConf.length; i++) {
  //     penalties.push({
  //       penalty_conf_id: penaltiesConf[i].id,
  //       quantity: pens[i] || 0,
  //     });
  //   }

  //   const body = { ...point, penalties };

  //   // console.log(body);
  // };

  return (
    <div>
      <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      />
      <Modal
        bodyStyle={{ margin: "auto 20px", width: "100%" }}
        noPadding
        show={activeModal !== ""}
        onBackgroundClick={() => setactiveModal("")}
      >
        {modalContent(activeModal)}
      </Modal>
      <AppBar isManager title="Update score" {...props} />
      {dataTrial?.type === "boolean" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#6202EE",
              padding: "14px 16px",
              width: "100%",
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
                {dataRider.id}. {dataRider.name}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.mainCardText}
              >
                {dataRider.category} - {dataRider.category2}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.mainCardText}
              >
                {dataRider.motorcycle_plate}
              </Typography>
            </div>
          </div>

          <YesNoDiv>
            <Button
              style={{ fontSize: "30px" }}
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => submitBool(0)}
            >
              No
            </Button>
            <Button
              style={{ fontSize: "30px" }}
              fullWidth
              variant="contained"
              color="primary"
              className="buttonRight"
              onClick={() => submitBool(1)}
            >
              Yes
            </Button>
          </YesNoDiv>
        </div>
      ) : (
        <Card style={{ minHeight: "100%" }}>
          <MainDiv style={{ minHeight: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#6202EE",
                padding: "14px 16px",
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
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Button
                  style={{ width: "100%" }}
                  variant="contained"
                  color="secondary"
                  onClick={() => setactiveModal("deleteConfirm")}
                >
                  DELETE
                </Button>
                <Button
                  style={{ width: "100%", marginLeft: "10px" }}
                  variant="contained"
                  color="primary"
                  onClick={() => setactiveModal("finishConfirm")}
                >
                  EDIT
                </Button>
              </div>
            </div>

            <TimeDiv>
              <div
                style={{
                  width: "100%",
                  cursor: "pointer",
                  border: "1px solid",
                  borderRadius: "4px",
                }}
                onClick={() => setactiveModal("customTempDefine")}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Base Time
                </Typography>
                <ShowTimeInput
                  readOnly
                  style={{ cursor: "pointer", color: "black" }}
                  placeholder="00:00.000"
                  value={baseTime || "00:00.000"}
                />
              </div>

              <div style={{ width: "100%", cursor: "context-menu" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Total Time
                </Typography>
                <Typography variant="h5" component="h2">
                  {finalTime || "00:00.000"}
                </Typography>
              </div>
            </TimeDiv>

            <PenaltyDiv>
              {penaltiesConf.map((p, i) => {
                return penalty(p, i);
              })}
            </PenaltyDiv>

            <PenaltyDiv>
              {bonusesConf.map((p, i) => {
                if (p.condition === "unconditioned") return bonus(p, i);
                return null;
              })}
            </PenaltyDiv>
          </MainDiv>
        </Card>
      )}
    </div>
  );
}
