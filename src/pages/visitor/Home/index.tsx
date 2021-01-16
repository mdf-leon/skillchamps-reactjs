import React from "react";
// import History from 'react-history';
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import { ReactComponent as ConeIcon } from "assets/svg/traffic-cone-svgrepo-com 1.svg";
import {
  Header,
  Typography,
  Button,
  FirstHeaderButtons,
  ConeSvgDiv,
  Body1,
  FirstTextDiv,
} from "./styles";
// import DehazeIcon from "@material-ui/icons/Dehaze";

// import ComponenteF from "./ComponentF"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const Home = (props: any) => {
  return (
    <div style={{ margin: 0 }}>
      <CssBaseline />
      <div
        style={{
          height: "100%",
          position: "relative",
          background: "white",
          // overflow: "hidden",
        }}
      >
        <Header>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid container justify="center" item xs>
              <FirstHeaderButtons>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Contact</Button>
              </FirstHeaderButtons>
            </Grid>
            <Grid container justify="center" item xs>
              <Typography fontWeight="skTitle" variant="h5" component="h5">
                Skillchamps
              </Typography>
            </Grid>
            <Grid container justify="center" item xs>
              <Button darkblue variant="contained">
                My Account
              </Button>
            </Grid>
          </Grid>
        </Header>
        <Body1>
          <FirstTextDiv>
            <Typography
              fontWeight="MainBlue900"
              textColor="MainBlue900"
              variant="h3"
              component="h3"
              gutterBottom
            >
              It was never so easy to count cones
            </Typography>

            <Typography
              variant="h6"
              component="h6"
              gutterBottom="40"
              marginAll="0 0 20px 0"
            >
              We come to help you manage your competition and rider scores from
              the moment they sign in, to a real time ranking page.
              <br />
              <br />
              Organization is the keyword: no more pen and papers, the only
              thing you need is a browser: Smartphones, Laptops or Tablets, we
              got you covered.
              <br />
              <br />
              And that is just the basics.
            </Typography>
            <div className="d-flex" style={{ width: "80%" }}>
              <Button
                darkblue
                variant="contained"
                width="100%"
                marginAll="0 30px 0 0"
              >
                Sign in
              </Button>
              <Button darkblue variant="contained" width="100%">
                Learn more
              </Button>
            </div>
          </FirstTextDiv>
        </Body1>
        <ConeSvgDiv>
          <ConeIcon />
        </ConeSvgDiv>
      </div>
    </div>
  );
};

export default Home;
