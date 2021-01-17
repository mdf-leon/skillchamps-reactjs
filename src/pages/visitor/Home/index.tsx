import React from "react";
// import History from 'react-history';
import { useWindowSize } from "hooks";
import {
  // makeStyles,
  // createStyles,
  // Theme,
  Grid,
  Hidden,
} from "@material-ui/core";
import { ReactComponent as ConeIcon } from "assets/svg/traffic-cone-svgrepo-com 1.svg";
import { ReactComponent as ONicon } from "assets/svg/494642-PHES02-42 1.svg";
import { ReactComponent as BlinderSvg } from "assets/svg/binder 1.svg";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import {
  Header,
  Typography,
  Button,
  FirstHeaderButtons,
  ConeSvgDiv,
  Body1,
  FirstTextDiv,
  SecondTextDiv,
  ThirdTextDiv,
  MainDiv,
  BurguerIcon,
  Card,
  DivORside,
  DivORdown,
  DivBlinder,
  Footer,
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
  const [width] = useWindowSize();

  return (
    <MainDiv>
      <Header>
        <Grid
          container
          direction={width < 959 && width !== 0 ? "row-reverse" : "row"}
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
            <Grid container justify="center" item xs>
              <Button darkblue variant="contained">
                My Account
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid
              container
              justify="flex-start"
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
      <Card>
        <Body1
        // style={{ position: width < 1000 }}
        >
          <SecondTextDiv style={{ maxWidth: "100%" }}>
            <div>
              <div>
                <Typography
                  fontWeight="MainBlue900"
                  textColor="MainBlue900"
                  variant="h3"
                  component="h3"
                  gutterBottom="40"
                >
                  Participant and viewer control
                </Typography>

                <Typography variant="h6" component="h6" marginAll="0 0 20px 0">
                  Be it via e-mail or using our API in your web page, with us,
                  you can control and see how many tickets you have sold, manage
                  every entry and ajust as your please.
                  <br />
                  <br />
                  Riders are also manageable, someone mispeled their license
                  plate? Easy. you can sign your riders via the control panel or
                  even send them a self registration page, there is also an
                  option to have a public registration page. You care about the
                  event, we take care of it.
                </Typography>
              </div>
              <div className="d-flex">
                <DivORside showOffSide>
                  <ONicon />
                </DivORside>
                <Grid
                  container
                  justify="center"
                  style={{
                    flexDirection: width < 1346 ? "column" : "initial",
                    paddingLeft: width < 1346 ? "20px" : "initial",
                    justifyContent: width < 1346 ? "center" : "initial",
                  }}
                >
                  <Grid container justify="flex-start" item xs>
                    <Grid
                      container
                      justify="flex-start"
                      direction="column"
                      item
                      xs={12}
                      style={{
                        display: width < 1346 ? "flex" : "initial",
                        justifyContent: width < 1346 ? "center" : "initial",
                      }}
                    >
                      <HowToRegIcon />

                      <Typography
                        variant="h6"
                        component="h6"
                        gutterBottom="40"
                        textColor="MainBlue900"
                        lineHeightDefault
                      >
                        Effortless registration of a rider
                      </Typography>
                      <Typography variant="h6" component="h6" gutterBottom="40">
                        The rider can create a user and sign in themselves on
                        your event without you moving a finger. Focus on your
                        event experience, let the boring part with us.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-start" item xs>
                    <Grid
                      container
                      justify="flex-start"
                      direction="column"
                      item
                      xs={12}
                      style={{
                        display: width < 1346 ? "flex" : "initial",
                        justifyContent: width < 1346 ? "center" : "initial",
                      }}
                    >
                      <HowToRegIcon />

                      <Typography
                        variant="h6"
                        component="h6"
                        gutterBottom="40"
                        textColor="MainBlue900"
                        lineHeightDefault
                      >
                        Online ticket purchasing
                      </Typography>
                      <Typography variant="h6" component="h6" gutterBottom="40">
                        We give you the option to have a custom page to share
                        with the fans where they can buy tickets from the
                        comfort of their home. Easy and secure.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
            <DivORdown>
              <ONicon />
            </DivORdown>
          </SecondTextDiv>
        </Body1>
      </Card>
      <Card>
        <Body1>
          <ThirdTextDiv direction="row">
            <DivBlinder>
              <BlinderSvg />
            </DivBlinder>
            <div
              style={{
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "186px",
              }}
            >
              <Typography
                fontWeight="MainBlue900"
                textColor="MainBlue900"
                variant="h3"
                component="h3"
                gutterBottom="40"
              >
                Keep track, not folders
              </Typography>

              <Typography variant="h6" component="h6" marginAll="0 0 20px 0">
                talk about keeping track and history of events and scores and
                being able to compare with other events
                <br />
                <br />
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus
                <br />
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
                <br />
                <br />
              </Typography>
            </div>
          </ThirdTextDiv>
        </Body1>
      </Card>
      <Footer>a</Footer>
      <ConeSvgDiv>
        <ConeIcon />
      </ConeSvgDiv>
    </MainDiv>
  );
};

export default Home;
