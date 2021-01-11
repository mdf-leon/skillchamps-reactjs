import React, { useState } from "react";
import Message from "components/Message";
import AppBar from "../../../components/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { base } from "config/api";
import { UploadInputDiv, UploadInputLabel } from "./styles";
// import { FaceForm } from './Image';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  date: {
    width: "100%",
    margin: "8px 9px",
  },
  category: {
    width: "100%",
  },
}));

export default function NewRider(props: any) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [eventPhoto, seteventPhoto] = useState<any>(undefined);
  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });
  const [registerInfo, setRegisterInfo] = useState<any>({
    event_name: "",
    date_begin: selectedDate?.toISOString().split("T")[0],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(eventPhoto);
    const body = {
      ...registerInfo,
      date_begin: selectedDate?.toISOString().split("T")[0],
    };
    const event = await base
      .post(`/createEvent`, body)
      .then((r) => {
        return r.data;
      })
      .catch(() => {
        setMessageParams({
          message: "Sorry, the Institute could not be created",
          severity: "error",
        });
        return false;
      }); // alert rider coundt be created
    console.log(event.id);
    if (!event || !event.id) return false;

    const formData = new FormData();
    formData.append("photo_event", eventPhoto);
    await base
      .put(`/uploadEventPhoto/${event.id}`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((r) => {
        console.log(r.data);
        props.history.push("/ManageableEvents", {
          message_alert: {
            message: "Event created Successfully",
            severity: "success",
          },
        });
      })
      .catch((e) => {
        console.log(e);
        setMessageParams({
          message: "Sorry, the Image was not uploaded",
          severity: "error",
        });
        return false;
      });
  };

  return (
    <>
      <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      />
      {/* <Button
        
        variant="contained"
        size="small"
        color="primary"
        onClick={() => props.history.push('/ManageableEvents', {message_alert: {message: 'af', severity: 'success'}})} 
      >
        trial success
      </Button> */}
      <AppBar title="Create a New Event" {...props} />
      <div style={{ paddingTop: "1px", minHeight: "100%" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create new Event
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        event_name: e.target.value,
                      })
                    }
                    type="file"
                    name="event_name"
                    variant="outlined"
                    required
                    fullWidth
                    id="event_name"
                    label="Event Name"
                    autoFocus
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
                <Grid item xs={12}>
                  <div style={{ position: "relative", width: "100%" }}>
                    <TextField
                      name="photo_eventt"
                      id="photo_eventt"
                      variant="outlined"
                      required
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      label="Select a photo_event"
                    />
                    <UploadInputDiv>
                      <Button
                        variant="contained"
                        component="label"
                        color="primary"
                      >
                        Upload File
                        <input
                          type="file"
                          id="photo_event"
                          name="photo_event"
                          hidden
                          // value={eventPhoto}
                          onChange={(e) => {
                            if (e && e.target && e.target.files)
                              seteventPhoto(e.target.files[0]);
                          }}
                        />
                      </Button>
                      <UploadInputLabel htmlFor="photo_event">
                        Select file
                      </UploadInputLabel>
                    </UploadInputDiv>
                  </div>
                </Grid>
              </Grid>
              {/* <Grid container justify="space-around">
                <label htmlFor="photo_folder">Select a photo_folder:</label>
                <input
                  type="file"
                  id="photo_folder"
                  name="photo_folder"
                  value={folderPhoto}
                  onChange={(e) => {
                    if (e && e.target && e.target.files)
                      setfolderPhoto(e.target?.files[0]);
                  }}
                />
              </Grid> */}
              {/* <Grid container justify="space-around"> */}
              {/* <label htmlFor="photo_event">Select a photo_event:</label> */}

              {/* </Grid> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
