import React from "react";
// import History from 'react-history';
import VisitorTopBar from "components/VisitorTopBar";
import { Link, CssBaseline } from "@material-ui/core";
import {
  Typography,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  FourthDiv,
  // LandPageButton,
  // DivButtons,
} from "./styles";
// import DehazeIcon from "@material-ui/icons/Dehaze";

const Home = (props: any) => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <VisitorTopBar isTopBarButtonActive="home" {...props} />
      <CssBaseline />
      <FirstDiv>
        <Typography textcolor="white" variant="h5" gutterBottom component="h5">
          Facilitated
          <br />
          Competitions.
        </Typography>
        <Typography textcolor="white" component={"span"} variant="body2">
          Discover how easy it is to control
          <br /> a competition
        </Typography>

        {/* <DivButtons>
          <LandPageButton backcolor="red">DOWNLOAD NOW</LandPageButton>
          <LandPageButton>FREE TRIAL</LandPageButton>
        </DivButtons> */}
      </FirstDiv>
      <SecondDiv>
        <Typography textcolor="blue" variant="h5" gutterBottom component="h5">
          Make your own competition with different set of trials ans checkout of
          them in the end
        </Typography>

        <Typography component={"span"} variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </Typography>
        {/* <DivButtons>
          <LandPageButton backcolor="red">TRY IT NOW</LandPageButton>
        </DivButtons> */}
      </SecondDiv>
      <ThirdDiv>
        <Typography textcolor="white" variant="h5" gutterBottom component="h5">
          How it works
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography
            style={{ color: "white", fontSize: "small", width: "100%" }}
            component={"span"}
            variant="body1"
          >
            Create a competition
          </Typography>
          <Typography
            style={{ color: "white", fontSize: "small", width: "100%" }}
            component={"span"}
            variant="body1"
          >
            Record
            <br /> the trials
          </Typography>
          <Typography
            style={{ color: "white", fontSize: "small", width: "100%" }}
            component={"span"}
            variant="body1"
          >
            Record
            <br /> the points
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{ color: "white", fontSize: "x-small" }}
            component={"span"}
            variant="body2"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: "x-small",
              marginLeft: "10px",
            }}
            component={"span"}
            variant="body2"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Typography>
          <Typography
            style={{
              color: "white",
              fontSize: "x-small",
              marginLeft: "10px",
            }}
            component={"span"}
            variant="body2"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Typography>
        </div>
      </ThirdDiv>
      <FourthDiv>
        <div>
          <ul>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  About
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Home
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Investors
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Account
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Login
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Register
                </Link>
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  About
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Privacy + Security
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Terms of Use
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Account
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Support
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <Link href="#" onClick={() => {}}>
                  Return Policy
                </Link>
              </Typography>
            </li>
          </ul>
        </div>
      </FourthDiv>
    </div>
  );
};

export default Home;
