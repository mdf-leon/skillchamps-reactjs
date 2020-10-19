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

const penaltiesConf: any[] = [
  {
    id: 12,
    event_id: 1,
    name: "slow ride",
    created_at: "2020-07-04 20:19:13",
    updated_at: "2020-07-04 20:19:13",
  },
  {
    id: 27,
    event_id: 1,
    name: "slow 2",
    created_at: "2020-07-04 20:19:13",
    updated_at: "2020-07-04 20:19:13",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainCardText: {
      color: "white",
    },
  })
);

export default function BeforePoints(props) {
  const classes = useStyles();
  const [activeModal, setactiveModal] = useState<any>();
  const [dataTrial, setDataTrial] = useState<any>({});
  const [dataRider, setDataRider] = useState<any>({});

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
      event_id: localStorage.getItem("event_selected"),
      rider_id: point.rider_id,
      trial_id: point.trial_id,
    };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
        console.log(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
    base
      .get("/managedRidersList", { params })
      .then((r) => {
        setDataRider(r.data);
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
        }}
      >
        <NumberBox>
          <RoundButton
            onClick={(e) => {
              const temp: any[] = [...pens];
              temp[pen.id] = (temp[pen.id] || 0) - 1;
              setpens(temp);
            }}
          >
            <AiOutlineMinusCircle size="50" color="red" />
          </RoundButton>

          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" component="h3">
              {pens[pen.id] || "none"}
            </Typography>
          </div>

          <RoundButton
            onClick={(e) => {
              const temp = [...pens];
              temp[pen.id] = (temp[pen.id] || 0) + 1;
              setpens(temp);
            }}
          >
            <AiFillPlusCircle size="50" color="red" />
          </RoundButton>
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
          onClick={() => setactiveModal(false)}
        >
          Delete points
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setactiveModal(false)}
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
          onClick={() => setactiveModal(false)}
        >
          Cancel
        </Button>
        <Button onClick={() => setactiveModal(false)}>Continue scoring</Button>
      </div>
    </div>
  );

  const totalTempDefine = (
    <div>
      <h3>Please set the runner time</h3>
      <TimeInput
        onChange={(e) => {
          setpoint({
            ...point,
            time: DateTime.fromISO("00:" + e.target.value).toMillis(),
          });
        }}
        placeholder="00:00.000"
        inputType="time"
      />

      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => setactiveModal(false)}>Save Time</Button>
        <Button
          style={{
            color: "red",
            border: "1px solid red",
            marginRight: "10px",
            marginTop: "15px",
          }}
          onClick={() => setactiveModal(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );

  const customTempDefine = (
    <div>
      <h3>Please set the runner's penalty time</h3>
      <TimeInput placeholder="00:00:00" inputType="time" />

      <div style={{ marginTop: "20px" }}>
        <Button onClick={() => setactiveModal(false)}>Save Time</Button>
        <Button
          style={{
            color: "red",
            border: "1px solid red",
            marginRight: "10px",
            marginTop: "15px",
          }}
          onClick={() => setactiveModal(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );

  const modalContent = (modalName, id = null) => {
    const modals = {
      customTempDefine: customTempDefine,
      totalTempDefine: totalTempDefine,
      confirm: confirm,
    };
    return modals[modalName] || null;
  };

  return (
    <>
      <Sidebar topnav title="Manageable Events" rightIcon="gear" />
      <Card>
        <MainDiv style={{ marginTop: "50px" }}>
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
                  START
                </Button>
              </div>
            </div>

            <TimeDiv>
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  <strong>Base Time</strong>
                </Typography>

                <Typography variant="h5" component="h2">
                  <strong>00:00:000</strong>
                </Typography>
              </div>

              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  <strong>Total Time</strong>
                </Typography>
                <Typography variant="h5" component="h2">
                  <strong>00:00:000</strong>
                </Typography>
              </div>
            </TimeDiv>

            <PenaltyDiv>
              {penaltiesConf.map((p, i) => {
                return penalty(p);
              })}
            </PenaltyDiv>
        </MainDiv>
        <div style={{ display: "flex" }}>
          <div
            style={{
              justifyContent: "space-between",
              margin: "20px 0 20px 0",
              padding: "0 8px",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="body2" component="h2">
              Changes should only be saved at the end of the route. All
              penalties must be confirmed by more than one judge.
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setactiveModal(cancel)}
                style={{ color: "red", border: "1px solid red" }}
              >
                Cancelar
              </Button>
              <Button onClick={handleSubmit}>Salvar</Button>
            </div>
          </div>
        </div>
      </Card>
      {/* <Modal
        noPadding
        show={activeModal !== ""}
        onBackgroundClick={() => setactiveModal("")}
      >
        {modalContent(activeModal)}
      </Modal> */}
    </>
  );
}
