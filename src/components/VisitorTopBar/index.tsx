import React, { useState } from "react";
import { TopBar, DivTitles, Typography } from "./styles";

const VisitorTopBar = (props: any) => {
  const [titleId, setTitleId] = useState<any>(0);
  const [titles] = useState<any[]>([
    { id: 0, name: "Home" },
    { id: 1, name: "Login" },
    { id: 2, name: "Register" },
  ]);

  const onClickTitle = async (title) => {
    await setTitleId(title.id);
    if (titleId === 1) {
      props.history.push("/login");
    } else if (titleId === 2) {
      props.history.push("/register");
    }
    return;
  };

  return (
    <TopBar>
      <div style={{ display: "flex" }}>
        <Typography textcolor="blue" variant="h6" component="h2">
          SKILL
        </Typography>
        <Typography textcolor="red" variant="h6" component="h2">
          CHAMPS
        </Typography>
      </div>
      {/* <DehazeIcon fontSize="large" /> */}
      <DivTitles>
        <Typography
          topbartitleactive={props.isTopBarButtonActive === "home"}
          onClick={() => props.history.push("/")}
          textcolor="blue"
          variant="body2"
          component="p"
        >
          Home
        </Typography>
        <Typography
          topbartitleactive={props.isTopBarButtonActive === "login"}
          onClick={() => props.history.push("/login")}
          textcolor="blue"
          variant="body2"
          component="p"
        >
          Login
        </Typography>
        <Typography
          topbartitleactive={props.isTopBarButtonActive === "register"}
          onClick={() => props.history.push("/register")}
          textcolor="blue"
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
