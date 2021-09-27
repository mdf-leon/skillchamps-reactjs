import React from "react";
// import History from 'react-history';
import { useWindowSize } from "hooks";
import {
  // makeStyles,
  // createStyles,
  // Theme,
  Grid,
} from "@material-ui/core";
import { ReactComponent as ConeIcon } from "assets/svg/traffic-cone-svgrepo-com 1.svg";
import { ReactComponent as ONicon } from "assets/svg/494642-PHES02-42 1.svg";
import { ReactComponent as BlinderSvg } from "assets/svg/binder 1.svg";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import VisitorAppBar from "../../SharedLocalComponents/VisitorAppBar";
import {
  Typography,
  Button,
  ConeSvgDiv,
  Body1,
  FirstTextDiv,
  SecondTextDiv,
  ThirdTextDiv,
  MainDiv,
  Card,
  DivORside,
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
  const [width, height] = useWindowSize();

  React.useEffect(() => {
    if (localStorage.getItem("lastSeenEvent")) {
      props.history.push(`/event/${localStorage.getItem("lastSeenEvent")}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainDiv>
      <VisitorAppBar
        fixed
        buttonName="My Account"
        buttonHref="/login"
        {...props}
      />
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
                $darkBlue
                variant="contained"
                width="100%"
                marginAll="0 30px 0 0"
                onClick={() => props.history.push("/login")}
              >
                Sign up
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
          <SecondTextDiv
            style={{
              maxWidth: "100%",
              justifyContent: width < 785 ? "center" : "inherit",
            }}
          >
            <div>
              <div
                style={{
                  backgroundColor: "#ffffffc7",
                  boxShadow: "0px 0px 20px 10px #ffffff",
                }}
              >
                <Typography
                  fontWeight="MainBlue900"
                  textColor="MainBlue900"
                  variant="h3"
                  component="h3"
                  gutterBottom="40"
                >
                  Participant and viewer control
                </Typography>

                <Typography
                  textColor="MainBlue900"
                  variant="h6"
                  component="h6"
                  // gutterBottom="40"
                >
                  (rider registration is still in development)
                </Typography>

                <Typography variant="h6" component="h6" marginAll="0 0 20px 0">
                  Be it via e-mail or using our API in your web page, with us,
                  you can control and see how many tickets you have sold, manage
                  every entry and ajust as your please.
                  <br />
                  Riders are also manageable, someone mispeled their license
                  plate? Easy. you can sign your riders via the control panel or
                  even send them a self registration page, there is also an
                  option to have a public registration page. You care about the
                  event, we take care of it.
                </Typography>
              </div>
              {width >= 785 ? (
                <div className="d-flex">
                  {width <= 1438 && width > 1062 ? (
                    <DivORside>
                      <ONicon />
                    </DivORside>
                  ) : null}
                  <Grid
                    container
                    justify="center"
                    style={{
                      flexDirection:
                        width < 1439 && width > 1062 ? "column" : "initial",
                      paddingLeft:
                        width < 1439 && width > 1062 ? "20px" : "initial",
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
                          display:
                            width < 1439 && width > 1062 ? "flex" : "initial",
                          justifyContent:
                            width < 1439 && width > 1062 ? "center" : "initial",
                        }}
                      >
                        {width > 481 && height >= 850 ? <HowToRegIcon /> : null}

                        <Typography
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                          textColor="MainBlue900"
                          lineHeightDefault
                        >
                          Effortless registration of a rider
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                        >
                          The rider can create an user and sign in themselves on
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
                          display:
                            width < 1439 && width > 1062 ? "flex" : "initial",
                          justifyContent:
                            width < 1439 && width > 1062 ? "center" : "initial",
                          marginLeft:
                            width > 1438 || width < 1062 ? "20px" : "0",
                        }}
                      >
                        {width > 481 && height >= 850 ? <HowToRegIcon /> : null}

                        <Typography
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                          textColor="MainBlue900"
                          lineHeightDefault
                        >
                          Online ticket purchasing
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                        >
                          We give you the option to have a custom page to share
                          with the fans where they can buy tickets from the
                          comfort of their home. Easy and secure.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              ) : null}
            </div>
            {width >= 785 ? (
              width > 1438 ||
              (width < 1063 && height >= 850 && width >= 405) ? (
                <DivORside>
                  <ONicon />
                </DivORside>
              ) : null
            ) : null}
          </SecondTextDiv>
        </Body1>
      </Card>
      {width < 785 ? (
        <Card>
          <Body1
          // style={{ position: width < 1000 }}
          >
            <SecondTextDiv
              style={{
                maxWidth: "100%",
                justifyContent: width < 785 ? "center" : "inherit",
              }}
            >
              <div>
                <DivORside style={{ maxHeight: "250px" }}>
                  <ONicon style={{ height: "250px", width: "250px" }} />
                </DivORside>
                <div className="d-flex mt-20">
                  <Grid
                    container
                    justify="center"
                    style={{
                      flexDirection:
                        width < 1439 && width > 1062 ? "column" : "initial",
                      paddingLeft:
                        width < 1439 && width > 1062 ? "20px" : "initial",
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
                          display:
                            width < 1439 && width > 1062 ? "flex" : "initial",
                          justifyContent:
                            width < 1439 && width > 1062 ? "center" : "initial",
                        }}
                      >
                        {width > 481 && height >= 850 ? <HowToRegIcon /> : null}

                        <Typography
                          fontWeight="MainBlue900"
                          textColor="MainBlue900"
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                        >
                          Effortless registration of a rider
                        </Typography>

                        <Typography
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                        >
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
                          display:
                            width < 1439 && width > 1062 ? "flex" : "initial",
                          justifyContent:
                            width < 1439 && width > 1062 ? "center" : "initial",
                          marginLeft:
                            width > 1438 || width < 1062 ? "20px" : "0",
                        }}
                      >
                        {width > 481 && height >= 850 ? <HowToRegIcon /> : null}

                        <Typography
                          fontWeight="MainBlue900"
                          textColor="MainBlue900"
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                        >
                          Online ticket purchasing
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          gutterBottom="40"
                        >
                          We give you the option to have a custom page to share
                          with the fans where they can buy tickets from the
                          comfort of their home. Easy and secure.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </SecondTextDiv>
          </Body1>
        </Card>
      ) : null}
      <Card>
        <Body1>
          <ThirdTextDiv direction="row">
            <DivBlinder>
              <BlinderSvg />
            </DivBlinder>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: width < 1280 ? "0px" : "100px",
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
              <Typography
                textColor="MainBlue900"
                variant="h6"
                component="h6"
                // gutterBottom="40"
              >
                (public history and tracking will be accessible with rider
                registration complete)
              </Typography>
              <Typography variant="h6" component="h6" marginAll="0 0 20px 0">
                {/* talk about keeping track and history of events and scores and
                being able to compare with other events */}
                Compare everything you did in your last event with the next one,
                set milestones and keep track of your students performance at
                the millisecond.
                <br />
                Keep track of your event, see how many are racing, how many are
                watching and even see in real time the leaderboard of trials
                individually or for the final score.
                <br />
                You can even publicly share the link to the leaderboard so
                everyone can see how their competitor is doing in real time!
                <br />
              </Typography>
            </div>
          </ThirdTextDiv>
        </Body1>
      </Card>
      <Card style={{ paddingBottom: 0 }}>
        <Body1>
          <ThirdTextDiv direction="row"></ThirdTextDiv>
          {width < 960 ? (
            <Footer>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-around",
                  paddingBottom: "16px",
                }}
              >
                <Typography variant="body2" component="p">
                  Home
                </Typography>
                <Typography variant="body2" component="p">
                  About
                </Typography>
                <Typography variant="body2" component="p">
                  Contact
                </Typography>
              </div>
              <div className="mb-10">
                <Button $darkBlue variant="contained">
                  Purchase now
                </Button>
              </div>
              <div>
                <Typography fontWeight="skTitle" variant="h5" component="h5">
                  Skillchamps
                </Typography>
                <Typography variant="body2" component="p">
                  @2020 Skillchamps
                </Typography>
              </div>
            </Footer>
          ) : null}

          {width > 959 ? (
            <Footer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  borderBottom: "1px solid #CDD1D4",
                  paddingBottom: "10px",
                }}
              >
                <div
                  className="d-flex"
                  style={{
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <Typography variant="body2" component="p">
                    Home
                  </Typography>
                  <Typography variant="body2" component="p">
                    About
                  </Typography>
                  <Typography variant="body2" component="p">
                    Contact
                  </Typography>
                </div>
                <div style={{ width: "100%" }}>
                  <Typography
                    fontWeight="skTitle"
                    variant="h5"
                    component="h5"
                    className="pb-10"
                  >
                    Skillchamps
                  </Typography>
                  <Typography variant="body2" component="p">
                    @2020 Skillchamps
                  </Typography>
                </div>
                <div
                  // className="mb-10"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Button $darkBlue variant="contained">
                    Purchase now
                  </Button>
                </div>
              </div>
            </Footer>
          ) : null}
        </Body1>
      </Card>
      <ConeSvgDiv>
        <ConeIcon />
      </ConeSvgDiv>
    </MainDiv>
  );
};

export default Home;
