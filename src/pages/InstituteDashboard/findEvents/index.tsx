import React, { useState } from "react";
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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "../../../components/AppBar";
import { MainDiv, CardsDiv } from "./styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      margin: 0,
    },
    root: {
      margin: "18px 8px 0 8px",
      flexGrow: 1,
    },
    cardRoot: {
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
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
  })
);

export default function CenteredGrid(props: any) {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState<any>(0);

  return (
    <MainDiv>
      <AppBar title="Find Events" {...props} />
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
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  label="Type"
                >
                  {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
                  <MenuItem value={0}>Ten</MenuItem>
                  <MenuItem value={1}>Twenty</MenuItem>
                  <MenuItem value={2}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <div>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="input-with-icon-textfield"
                  label="TextField"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        {/* <Grid container spacing={3}></Grid> */}

        <CardsDiv>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://thumbs.dreamstime.com/x/competition-moto-gymkhana-events-start-motorcycle-cones-full-hd-107010990.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ID. Event Name
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <div className="flex-space-between">
                  <Typography variant="h5" component="h2">
                    INSTITUTE
                  </Typography>
                  <Typography variant="h5" component="h2">
                    2021-08-06
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://thumbs.dreamstime.com/x/competition-moto-gymkhana-events-start-motorcycle-cones-full-hd-107010990.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ID. Event Name
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <div className="flex-space-between">
                  <Typography variant="h5" component="h2">
                    INSTITUTE
                  </Typography>
                  <Typography variant="h5" component="h2">
                    2021-08-06
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://thumbs.dreamstime.com/x/competition-moto-gymkhana-events-start-motorcycle-cones-full-hd-107010990.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ID. Event Name
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <div className="flex-space-between">
                  <Typography variant="h5" component="h2">
                    INSTITUTE
                  </Typography>
                  <Typography variant="h5" component="h2">
                    2021-08-06
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://thumbs.dreamstime.com/x/competition-moto-gymkhana-events-start-motorcycle-cones-full-hd-107010990.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ID. Event Name
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <div className="flex-space-between">
                  <Typography variant="h5" component="h2">
                    INSTITUTE
                  </Typography>
                  <Typography variant="h5" component="h2">
                    2021-08-06
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://thumbs.dreamstime.com/x/competition-moto-gymkhana-events-start-motorcycle-cones-full-hd-107010990.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ID. Event Name
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <div className="flex-space-between">
                  <Typography variant="h5" component="h2">
                    INSTITUTE
                  </Typography>
                  <Typography variant="h5" component="h2">
                    2021-08-06
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </CardsDiv>
      </div>
    </MainDiv>
  );
}
