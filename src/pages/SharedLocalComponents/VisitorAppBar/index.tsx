import React from "react";
import { useWindowSize } from "hooks";
import { Grid, Hidden } from "@material-ui/core";
import {
  Header,
  Typography,
  Button,
  FirstHeaderButtons,
  Burguer,
  // BurguerIcon,
} from "./styles";

export default function VisitorAppBar(props: any) {
  const { fixed, buttonName, buttonHref } = props;
  const [width] = useWindowSize();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <Header fixed={fixed}>
      <Grid
        container
        direction={width < 959 && width !== 0 ? "row-reverse" : "row"}
        justify="center"
        alignItems="center"
      >
        <Hidden smDown>
          <Grid container justify="center" item xs>
            <FirstHeaderButtons>
              <Button $topButton onClick={() => props.history.push("/")}>
                Home
              </Button>
              <Button $topButton>About</Button>
              <Button $topButton>Contact</Button>
            </FirstHeaderButtons>
          </Grid>
        </Hidden>
        <Grid container justify="center" item xs>
          <Typography
            onClick={() => props.history.push("/")}
            style={{ cursor: "pointer" }}
            fontWeight="skTitle"
            variant="h5"
            component="h5"
          >
            Skillchamps
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid container justify="center" item xs>
            <Button
              $darkBlue
              variant="contained"
              onClick={() => props.history.push(buttonHref)}
            >
              {buttonName}
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
            {/* <BurguerIcon /> */}
            <Burguer onClick={() => setIsCollapsed(!isCollapsed)}>
              <div className={`menu-section ${!isCollapsed ? "" : "on"}`}>
                <div className="menu-toggle">
                  <div className="one" />
                  <div className="two" />
                  <div className="three" />
                </div>
                <div className="nav">
                  <div className="nav-div">
                    <Button $topButton onClick={() => props.history.push("/")}>
                      Home
                    </Button>
                    <Button $topButton>About</Button>
                    <Button $topButton>Contact</Button>
                    <Button
                      style={{ marginTop: "80px" }}
                      $topButton
                      onClick={() => props.history.push("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      $topButton
                      onClick={() => props.history.push("/register")}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </Burguer>
          </Grid>
        </Hidden>
      </Grid>
    </Header>
  );
}
