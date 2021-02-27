import React from "react";
import AppBar from "components/AppBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import { base } from "config/api";

export default function NewTrials(props: any) {
  let { institute_id, event_id } = useParams();
  const [messageParams, setMessageParams] = React.useState<any>({
    message: "",
    severity: "",
  });
  const [paramsInfo, setParamsInfo] = React.useState<any>({
    email: "",
    event_id,
  });
  const addManager = () => {
    base
      .post("/addManagerByEmail", paramsInfo)
      .then(() => {
        props.history.push(`/dashboard/institute/${institute_id}`, {
          message_alert: {
            message: "Manager successfully added.",
            severity: "success",
          },
        });
      })
      .catch((er) => {
        console.log(er)
      });
  };

  return (
    <>
      <AppBar title="Add Manager" isManager {...props} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "1px",
          minHeight: "calc(100% - 64px)",
        }}
      >
        <Container
          style={{ paddingBottom: "64px" }}
          component="main"
          maxWidth="xs"
        >
          <Typography align="center" component="h1" variant="h5">
            Add Manager
          </Typography>
          <TextField
            className="mt-20"
            onChange={(e) => {
              setParamsInfo({ ...paramsInfo, email: e.target.value });
            }}
            autoComplete="email"
            name="Email"
            variant="outlined"
            fullWidth
            id="Email"
            label="Email"
            autoFocus
          />
          <Typography variant="body2" color="textSecondary" align="center">
            Warning: a manager can do anything with your event in this beta, in
            the future, there will be: Administrators, Managers and Judges.
          </Typography>
          <Button
            className="mt-20"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => addManager()}
          >
            Add Manager
          </Button>
        </Container>
      </div>
    </>
  );
}
