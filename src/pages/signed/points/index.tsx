import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import { Modal } from "components";
import { DateTime } from "luxon";
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
} from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { base } from "../../../config/api";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import classes from "*.module.sass";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCardText: {
      color: "white",
    },
    numberText: {
      fontWeight: 300,
    },
  })
);

export default function BeforePoints(props) {
  const classes = useStyles();
  const [penaltiesConf, setPenaltiesConf] = useState<any[]>([]);
  const [activeModal, setactiveModal] = useState<any>("");
  const [dataTrial, setDataTrial] = useState<any>({});
  const [dataRider, setDataRider] = useState<any>({});
  const [time, setTime] = useState<any>("00:00.000");
  const [tempTime, setTempTime] = useState<any>();

  const [point, setpoint] = useState<any>({
    rider_id: localStorage.getItem("ongoing_rider"),
    trial_id: localStorage.getItem("ongoing_trial"),
    time: "0",
  });

  const [pens, setpens] = useState<any[]>([]);

  // useEffect(() => {
  //   console.log(pens);
  // }, [pens])

  useEffect(() => {
    let params = {
      event_id: localStorage.getItem("event_id"),
      rider_id: point.rider_id,
      trial_id: point.trial_id,
    };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
        // console.log(r.data);
      })
      .catch((er) => {
        // console.log(er);
      });
    base
      .get("/managedRidersList", { params })
      .then((r) => {
        setDataRider(r.data);
        // console.log(r.data);
      })
      .catch((er) => {
        // console.log(er);
      });
    base
      .get(`/managedPenaltyConfsFromTrial`, { params })
      .then((r) => {
        setPenaltiesConf(r.data);
        console.log(r.data);
      })
      .catch((er) => {
        console.log(er);
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

  const penalty = (pen) => (
    <div>
      <Typography variant="body2" component="p">
        <strong>
          {pen.id}.{pen.name}
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
                const temp: any[] = [...pens];
                temp[pen.id] = (temp[pen.id] || 0) - 1;
                setpens(temp);
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
              {pens[pen.id] || "none"}
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
                temp[pen.id] = (temp[pen.id] || 0) + 1;
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
    <div style={{ textAlign: "left" }}>
      <h3>
        Are you sure you want to cancel
        <br /> the score for this runner?
      </h3>
      <p>current scores will be deleted</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{ color: "red", border: "1px solid red", marginRight: "10px" }}
          onClick={() => setactiveModal("")}
        >
          Delete points
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setactiveModal("")}
        >
          Continue scoring
        </Button>
      </div>
    </div>
  );

  const confirm = (
    <div style={{ textAlign: "left" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: "59px" }}>
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
          <h3 style={{ margin: "0" }}>Realized Time</h3>
          <h1 style={{ margin: "0" }}>00:00:00</h1>
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
                  }{" "}
                  --- {penalty.quantity}
                </p>
              );
            })
          : null}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          style={{ color: "red", border: "1px solid red", marginRight: "10px" }}
          onClick={() => setactiveModal("")}
        >
          Cancel
        </Button>
        <Button onClick={() => setactiveModal("")}>Continue scoring</Button>
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
  //       inputType="time"
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

  const setTimer = (time) => {
    setTime(tempTime);
    setactiveModal("");
  };

  const customTempDefine = (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Please set the runner time
      </Typography>
      <TimeInput
        placeholder="00:00.000"
        inputType="time"
        onChange={(e) => setTempTime(e.target.value)}
      />

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
          onClick={() => setactiveModal("")}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setTimer("")}
        >
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

  return (
    <>
      <Sidebar topnav title="Manageable Events" rightIcon="gear" />
      <Card style={{ minHeight: "100%" }}>
        <MainDiv style={{ marginTop: "50px", minHeight: "100%" }}>
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
              <Button variant="contained" color="primary">
                FINISH
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
                style={{ cursor: "pointer" }}
                placeholder="00:00.000"
                inputType="time"
                value={{ time }}
              />
            </div>

            <div style={{ width: "100%", cursor: "context-menu" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Total Time
              </Typography>
              <Typography variant="h5" component="h2">
                00:00.000
              </Typography>
            </div>
          </TimeDiv>

          <PenaltyDiv>
            {penaltiesConf.map((p, i) => {
              return penalty(p);
            })}
          </PenaltyDiv>
        </MainDiv>
      </Card>
      <Modal
        bodyStyle={{ padding: "25px 14px" }}
        show={activeModal !== ""}
        onBackgroundClick={() => setactiveModal("")}
      >
        {modalContent(activeModal)}
      </Modal>
    </>
  );
}
