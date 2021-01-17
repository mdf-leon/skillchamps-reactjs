import React from "react";
// import History from 'react-history';
import {
  // makeStyles,
  // createStyles,
  // Theme,
  Grid,
  Hidden,
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
  MainDiv,
  BurguerIcon,
  Card,
} from "./styles";
// import DehazeIcon from "@material-ui/icons/Dehaze";

// import ComponenteF from "./ComponentF"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//     },
//   })
// );

const Home = (props: any) => {
  const [size, setSize] = React.useState<any>({
    width: 0,
    height: 0,
  });
  const setWidth = () =>
    setSize({
      ...size,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  window.addEventListener("resize", setWidth);

  return (
    <MainDiv>
      <Header>
        <Grid
          container
          direction={size < "959" && size !== 0 ? "row-reverse" : "row"}
          justify="center"
          alignItems="center"
        >
          <Hidden smDown>
            <Grid container justify="center" item xs>
              <FirstHeaderButtons>
                <Button topbutton>Home</Button>
                <Button topbutton>About</Button>
                <Button topbutton>Contact</Button>
              </FirstHeaderButtons>
            </Grid>
          </Hidden>
          <Grid container justify="center" item xs>
            <Typography fontWeight="skTitle" variant="h5" component="h5">
              Skillchamps
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid
              container
              justify={size < "959" && size !== 0 ? "flex-start" : "center"}
              item
              xs
            >
              <Button darkblue variant="contained">
                My Account
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid
              container
              justify={size < "959" ? "flex-start" : "center"}
              item
              xs
              style={{
                position: "absolute",
                paddingLeft: "20px",
              }}
            >
              <BurguerIcon />
            </Grid>
          </Hidden>
        </Grid>
      </Header>
      <Card>
        <Body1>
          <FirstTextDiv>
            <div>
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
                We come to help you manage your competition and rider scores
                from the moment they sign in, to a real time ranking page.
                <br />
                <br />
                Organization is the keyword: no more pen and papers, the only
                thing you need is a browser: Smartphones, Laptops or Tablets, we
                got you covered.
                <br />
                <br />
                And that is just the basics.
              </Typography>
            </div>

            <div>
              <Button
                darkblue
                variant="contained"
                width="100%"
                marginAll="0 30px 0 0"
              >
                Sign in
              </Button>
              <Button variant="contained" width="100%">
                Learn more
              </Button>
            </div>
          </FirstTextDiv>
        </Body1>
      </Card>
      <Card>b</Card>
      <Card>c</Card>
      <ConeSvgDiv>
        <ConeIcon />
      </ConeSvgDiv>
    </MainDiv>
  );
};

export default Home;
