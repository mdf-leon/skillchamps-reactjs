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
      <Card style={{ paddingBottom: 0 }}>
        <Body1>
          d
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
                  @2021 Skillchamps
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
                    @2021 Skillchamps
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
