import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  TextField,
  InputAdornment,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '../../../components/AppBar';
import { MainDiv, CardsDiv } from './styles';

import { base } from 'config/api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      margin: 0,
    },
    root: {
      margin: '18px 8px 0 8px',
      flexGrow: 1,
    },
    cardRoot: {},
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    media: {
      height: 140,
    },
    date: {
      width: '100%',
      margin: 0,
    },
  })
);

export default function FindEvents(props: any) {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [selectInputValue, setselectInputValue] = React.useState<any>(0);

  const [events, setevents] = React.useState<any[]>([]);

  const handleSearch = (type) => (e) => {
    console.log('sdasdadasdasd', type, e.target.value);
  };

  React.useEffect(() => {
    base
      .get(`/events`)
      .then((r) => {
        setevents(r.data);
      })
      .catch(() => {});
  }, []);

  return (
    <MainDiv>
      <AppBar title="Find events to participate" {...props} />
      <div className={classes.root}>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <FormControl
                fullWidth
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={selectInputValue}
                  onChange={(e) => setselectInputValue(e.target.value)}
                  label="Type"
                >
                  {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
                  <MenuItem value={'date'}>Date</MenuItem>
                  <MenuItem value={'event_id'}>Event ID</MenuItem>
                  <MenuItem value={'event_name'}>Event name</MenuItem>
                  {/* <p>institute name por enquanto ta comentado pq precisa ser implementado</p> */}
                  <MenuItem value={'institute_id'}>Institute ID</MenuItem>
                  <MenuItem value={'institute_name'} disabled>
                    Institute name
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              {selectInputValue === 'date' ? (
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
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              ) : (
                <div>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="input-with-icon-textfield"
                    label="TextField"
                    onChange={handleSearch('text')}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </div>

        {/* <Grid container spacing={3}></Grid> */}

        <CardsDiv>
          {events.map((event, i) => {
            return (
              <Card key={`each-card-div-${i}`} className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://i.pinimg.com/736x/34/df/ee/34dfeed20d644ba572bd2d8d31bc8d77.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {event.id}. {event.event_name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {event.short_description}
                    </Typography>
                    <div className="flex-space-between">
                      <Typography variant="h5" component="h2">
                        {event.institute_name}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {event.date_begin}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </CardsDiv>
      </div>
    </MainDiv>
  );
}
