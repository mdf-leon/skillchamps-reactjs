/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { AppBar, Modal, UploadFile } from 'components';
import { base } from 'config/api';
import { TextArea } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      // overflowX: 'hidden',
      maxHeight: '100%',
      height: '100%',
      margin: 0,
      padding: '12px',
      // marginBottom: "10px",
      // paddingBottom: "10px",
    },
    card: {
      width: '100%',
      padding: '10px',
    },
    date: {
      width: '100%',
    },
    root: {
      flexGrow: 1,
    },
  })
);

export default function UpdateEvent(props: any) {
  const classes = useStyles();
  const [modalRender, setModalRender] = useState<any>('');
  const [eventPhoto, seteventPhoto] = useState<any>(undefined);
  const [eventFolder, seteventFolder] = useState<any>(undefined);
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const [eventInfo, seteventInfo] = React.useState<any>({
    active: '',
    date_begin: '',
    date_end: '',
    event_name: '',
    id: '',
    institute_id: '',
    longtext: '',
    photo_event: '',
    photo_folder: '',
  });

  const ModalSuccess = (
    <Modal
      bodyStyle={{ padding: '20px', textAlign: 'center', maxWidth: '400px' }}
      show={modalRender === 'Success'}
    >
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Congratulations you have created an event.
        </Typography>
        <Divider />
        <Button
          className="mt-20"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() =>
            props.history.replace(
              `/dashboard/institute/${
                JSON.parse(localStorage.getItem('institute_info') || '').id
              }`
            )
          }
        >
          Ok
        </Button>
      </div>
    </Modal>
  );

  const ModalError = (
    <Modal
      bodyStyle={{ padding: '20px', textAlign: 'center', maxWidth: '400px' }}
      show={modalRender === 'Error'}
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
          onClick={() => setModalRender('')}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(); //formdata object

    formData.append('event_name', eventInfo.event_name); //append the values with key, value pair
    // forma correta de enviar DATA pro backend
    formData.append(
      'date_begin',
      new Date(selectedDate.setHours(0, 0, 0, 0)).toISOString()
    );
    formData.append('longtext', eventInfo.longtext);
    formData.append('photo_event', eventPhoto);
    formData.append('photo_folder', eventFolder);
    // console.log(localStorage.getItem('token'));

    base
      .post(`/createEvent2`, formData)
      .then((r) => {
        console.log(r.data);
        setModalRender('Success');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div style={{ margin: 0, overflowX: 'hidden' }}>
      <AppBar title="Event options" {...props} />
      <form className={classes.mainDiv} onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <Grid
            container
            direction="row"
            spacing={3}
            className={classes.root}
            style={{ width: '100%', margin: 0 }}
          >
            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="event-title"
                  label="Event title"
                  variant="outlined"
                  value={eventInfo.event_name}
                  onChange={(e) => {
                    seteventInfo({ ...eventInfo, event_name: e.target.value });
                  }}
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    className={classes.date}
                    inputVariant="outlined"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Starting Date (MM/DD/YYYY)"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid container>
                <UploadFile
                  labelTitle="Event Photo"
                  style={{ marginTop: '16px' }}
                  onChange={(e) => {
                    if (e && e.target && e.target.files)
                      seteventPhoto(e.target.files[0]);
                  }}
                />
              </Grid>
              <Grid container>
                <UploadFile
                  labelTitle="Event Folder"
                  style={{ marginTop: '16px' }}
                  onChange={(e) => {
                    if (e && e.target && e.target.files)
                      seteventFolder(e.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid
                item
                xs={12}
                style={{ paddingBottom: '20px', paddingTop: '4px' }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  Long description
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ height: '100%' }}
                  fullWidth
                  multiline
                  rows={10}
                  id="long-description"
                  variant="outlined"
                  value={eventInfo.longtext || ''}
                  onChange={(e) => {
                    seteventInfo({ ...eventInfo, longtext: e.target.value });
                  }}
                />
              </Grid>
              <Grid
                container
                justify="flex-end"
                sm={12}
                style={{ marginTop: '16px' }}
              >
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </form>
      {ModalSuccess}
      {ModalError}
    </div>
  );
}
