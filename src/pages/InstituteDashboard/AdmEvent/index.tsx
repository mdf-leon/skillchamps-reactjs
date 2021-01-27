/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  TextField,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { AppBar, Modal, UploadFile } from "components";
import { base } from "config/api";
import { TextArea } from "./styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      // overflowX: 'hidden',
      maxHeight: "100%",
      height: "100%",
      margin: 0,
      padding: "12px",
      // marginBottom: "10px",
      // paddingBottom: "10px",
    },
    card: {
      width: "100%",
      padding: "10px",
    },
    date: {
      width: "100%",
    },
    root: {
      flexGrow: 1,
    },
  })
);

export default function ViewPastEvent(props: any) {
  const classes = useStyles();
  const [modalRender, setModalRender] = useState<any>("");
  const riderCardRef = React.useRef<any>(null);
  const { event_id } = useParams();
  const [eventPhoto, seteventPhoto] = useState<any>(undefined);
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const [eventInfo, seteventInfo] = React.useState<any>({});
  const [
    subscribedEventCardSize,
    setsubscribedEventCardSize,
  ] = React.useState<number>(0);

  React.useEffect(() => {
    base
      .get(`/events`, { params: { event_id } })
      .then((r) => {
        console.log(r.data);

        seteventInfo(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubscribe = () => {
    const { id: rider_id } = JSON.parse(
      localStorage.getItem("rider_info") || ""
    );
    base
      .post(`/signToEvent`, { rider_id, event_id: eventInfo.id })
      .then((r) => {
        setModalRender("Success");
      })
      .catch((e) => {
        console.log(e.response.data);
        // if (e.response.data.Error === "Ja existe") {
        //   alert("You are already subscribed to this event.");
        // }
        // props.history.push("/dashboard/sign-to-event/7/success");
        setModalRender("Error");
      });
  };

  React.useLayoutEffect(() => {
    function updateSize() {
      setsubscribedEventCardSize(
        window.innerHeight - 140 - (props.appBarHeight || 0)
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line
  }, []);

  const ModalSuccess = (
    <Modal
      bodyStyle={{ padding: "20px", textAlign: "center", maxWidth: "400px" }}
      show={modalRender === "Success"}
    >
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Congratulations you have been subscribed to this event.
        </Typography>
        <Divider />
        <Button
          className="mt-20"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => props.history.push("/dashboard/home")}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );

  const ModalError = (
    <Modal
      bodyStyle={{ padding: "20px", textAlign: "center", maxWidth: "400px" }}
      show={modalRender === "Error"}
    >
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Could not subscribed right now, try again later.
        </Typography>
        <Divider />
        <Button
          className="mt-20"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setModalRender("")}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );

  return (
    <div style={{ margin: 0, overflowX: "hidden" }}>
      <AppBar title="Subscribe to an Event" {...props} />
      <div className={classes.mainDiv}>
        <Card className={classes.card}>
          <Grid
            container
            direction="row"
            spacing={3}
            className={classes.root}
            style={{ width: "100%", margin: 0 }}
          >
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="event-title"
                  label="Event title"
                  variant="outlined"
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    className={classes.date}
                    inputVariant="outlined"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid container>
                <UploadFile
                  style={{ marginTop: "16px" }}
                  onChange={(e) => {
                    if (e && e.target && e.target.files)
                      seteventPhoto(e.target.files[0]);
                  }}
                />
              </Grid>
              <Grid container>
                <UploadFile
                  style={{ marginTop: "16px" }}
                  onChange={(e) => {
                    if (e && e.target && e.target.files)
                      seteventPhoto(e.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid
                item
                xs={12}
                style={{ paddingBottom: "20px", paddingTop: "4px" }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Long description
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ height: "100%" }}
                  fullWidth
                  multiline
                  rows={10}
                  id="long-description"
                  variant="outlined"
                />
              </Grid>
              <Grid
                container
                justify="flex-end"
                sm={12}
                style={{ marginTop: "16px" }}
              >
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
      {ModalSuccess}
      {ModalError}
    </div>
  );
}
