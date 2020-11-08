import React from "react";
// import History from 'react-history';
import {
  TopBar,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  HomeButton,
  AccountButton,
  Body,
} from "./styles";
import DehazeIcon from "@material-ui/icons/Dehaze";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import TabPage from "./TabPage";

const Home = (props: any) => {
  return (
    <div style={{ height: "100%" }}>
      <TopBar>
        <div style={{ display: "flex" }}>
          <Typography style={{ color: "#0043c8" }} variant="h6" component="h2">
            SKILL
          </Typography>
          <Typography style={{ color: "#ee284b" }} variant="h6" component="h2">
            CHAMPS
          </Typography>
        </div>
        <DehazeIcon fontSize="large" />
      </TopBar>
      <FirstDiv>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          gutterBottom
          component="h5"
        >
          Facilitated
          <br />
          Competitions.
        </Typography>
        <Typography
          style={{ color: "white" }}
          component={"span"}
          variant="body2"
        >
          Discover how easy it is to control
          <br /> a competition
        </Typography>
      </FirstDiv>
      <SecondDiv>
        <Typography
          style={{ color: "#1041a0" }}
          variant="h5"
          gutterBottom
          component="h5"
        >
          Access to competitors' videos
        </Typography>

        <Typography component={"span"} variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </Typography>
      </SecondDiv>
      <ThirdDiv>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          gutterBottom
          component="h5"
        >
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
            style={{ color: "white", fontSize: "x-small", marginLeft: "10px" }}
            component={"span"}
            variant="body2"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Typography>
          <Typography
            style={{ color: "white", fontSize: "x-small", marginLeft: "10px" }}
            component={"span"}
            variant="body2"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </Typography>
        </div>
      </ThirdDiv>
    </div>
  );
};

export default Home;
