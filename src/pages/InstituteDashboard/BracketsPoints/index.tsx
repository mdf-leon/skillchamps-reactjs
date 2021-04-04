import React, { useState, useEffect } from "react";
// import Message from "components/Message";
import { useParams, useLocation } from "react-router-dom";
import AppBar from "components/AppBar";
import { Modal } from "components";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import { MainPage, Bracket, Line } from "./styles";
import { base } from "../../../config/api";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
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

export default function AddScore(props) {
  const classes = useStyles();
  let trial_id = new URLSearchParams(useLocation().search);
  const [activeModal, setactiveModal] = useState<any>("");
  const { group_id, position_id } = useParams();
  const [bracketData, setBrecketData] = useState<any>();

  const [riderSelected, setRiderSelected] = useState<any>();
  console.log(riderSelected);

  const handleFinish = () => {};

  useEffect(() => {
    base
      .get(`/trial/${trial_id.get("trial_id")}/getBrackets`)
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
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Do you really want to finish scoring for the rider{""}
            {/* {dataRider.name}? */}
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
        bodyStyle={{ margin: "auto 20px", width: "100%" }}
        noPadding
        show={activeModal !== ""}
        onBackgroundClick={() => setactiveModal("")}
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
            onClick={() => setRiderSelected(0)}
          >
            <div>
              <div className="d-flex">
                <Typography
                  component={"span"}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {bracketData?.rider1.id}
                  .&nbsp;
                </Typography>
                <Typography component={"span"} gutterBottom variant="h6">
                  {bracketData?.rider1.name}
                </Typography>
              </div>
              <Typography
                component={"span"}
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
            onClick={() => setRiderSelected(1)}
          >
            <div>
              <div className="d-flex">
                <Typography
                  component={"span"}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {bracketData?.rider2.id}
                  .&nbsp;
                </Typography>
                <Typography component={"span"} gutterBottom variant="h6">
                  {bracketData?.rider2.name}
                </Typography>
              </div>
              <Typography
                component={"span"}
                style={{ margin: 0 }}
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                Bike: {bracketData?.rider2.motorcycle}
              </Typography>
            </div>
          </Bracket>
          <div className="mt-40" style={{ width: "100%" }}>
            <p className="mb-4">Confirm the winner</p>
            <Button
              className={classes.action}
              variant="contained"
              color="secondary"
              fullWidth
            >
              {riderSelected === 0 || riderSelected === 1
                ? `Confirm rider: ${
                    bracketData[`rider${riderSelected + 1}`].name
                  }`
                : "Confirm"}
            </Button>
          </div>
        </div>
      </MainPage>
    </div>
  );
}
