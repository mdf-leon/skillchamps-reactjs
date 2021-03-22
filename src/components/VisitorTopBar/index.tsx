import React from "react";
import { TopBar, DivTitles, Typography } from "./styles";

const VisitorTopBar = (props: any) => {
  return (
    <TopBar>
      <div style={{ display: "flex" }}>
        <Typography textColor="blue" variant="h6" component="h2">
          SKILL
        </Typography>
        <Typography textColor="red" variant="h6" component="h2">
          CHAMPS
        </Typography>
      </div>
      {/* <DehazeIcon fontSize="large" /> */}
      <DivTitles>
        <Typography
          topbartitleactive={props.isTopBarButtonActive === "home" ? "home" : null}
          onClick={() => props.history.push("/")}
          textColor="blue"
          variant="body2"
          component="p"
        >
          Home
        </Typography>
        <Typography
          topbartitleactive={props.isTopBarButtonActive === "login" ? "login" : null}
          onClick={() => props.history.push("/login")}
          textColor="blue"
          variant="body2"
          component="p"
        >
          Login
        </Typography>
        <Typography
          topbartitleactive={props.isTopBarButtonActive === "register" ? "register" : null}
          onClick={() => props.history.push("/register")}
          textColor="blue"
          variant="body2"
          component="p"
        >
          Register
        </Typography>
      </DivTitles>
    </TopBar>
  );
};

export default VisitorTopBar;
