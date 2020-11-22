import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Sidebar from "../../../components/Sidebar";
import styles from "./useStyles";
import { Modal } from "components";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { base } from "../../../config/api";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Riders(props: any) {
  const classes = styles();
  const [dataRider, setDataRider] = useState<any[]>([]);
  const [activeModal, setActiveModal] = useState<any>("");
  const [currentId, setCurrentId] = useState<any>("");

  const [open, setOpen] = useState<any>(true);

  const handleClose = () => {
    setOpen(false);
    let state = { ...props.history.location.state };
    delete state.created;
    props.history.replace({ ...props.history.location, state });
  };

  const confirmDelete = (
    <Card>
      <CardContent className={classes.content}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Are you sure?
          </Typography>
          <Typography
            style={{ textAlign: "center" }}
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Do you really want to delete this Rider? This process cannot be
            undone.
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          className={classes.action}
          disableRipple
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setActiveModal("")}
        >
          Cancel
        </Button>
        <Button
          className={classes.action}
          disableRipple
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => deleteRider(currentId)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );

  const modalContent = (modalName) => {
    const modals = {
      confirmDelete,
    };
    return modals[modalName] || null;
  };

  const softRefresh = () => {
    let params = { event_id: localStorage.getItem("event_id") };
    base
      .get("/managedRidersList", { params })
      .then((r) => {
        setDataRider(r.data);
      })
      .catch(() => {});
    if (props.location.state?.created) {
      setOpen(true);
    }
  };

  useEffect(() => {
    softRefresh();
  }, []);

  const deleteRider = (id) => {
    base
      .delete(`/deleteRider/${id}`)
      .then((r) => {
        setActiveModal("");
        softRefresh();
        // setOpen("success");
      })
      .catch(() => {
        // setOpen("error");
      });
  };

  return (
    <>
      {props.location.state?.created ? (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Trial successfully created
          </Alert>
        </Snackbar>
      ) : null}
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="Riders"
        rightIcon="gear"
      />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography
              style={{ textAlign: "center", width: "100%", margin: 0 }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              List of Riders
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            {/* <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
              onClick={() => console.log()}
            >
              SETTINGS
            </Button> */}
            <Button
              className={classes.action}
              disableRipple
              variant="contained"
              size="small"
              color="primary"
              onClick={() => props.history.push("/newRider")}
            >
              NEW RIDER
            </Button>
          </CardActions>
        </Card>
        {dataRider.map((content, i) => (
          <div key={`riderList${content.id}`} className={classes.options}>
            <div className={classes.row}>
              <div style={{ display: "flex" }}>
                <Typography
                  component={"span"}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {content.id}.&nbsp;
                </Typography>
                <Typography
                  component={"span"}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                >
                  {content.name}
                </Typography>
              </div>
              <Typography
                component={"span"}
                style={{ margin: 0 }}
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                {content.license_ido} - {content.motorcycle_plate}
              </Typography>
            </div>
            <Button
              className={classes.action}
              disableRipple
              size="small"
              color="secondary"
              onClick={() => {
                setActiveModal("confirmDelete");
                setCurrentId(content.id);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
      <Modal
        bodyStyle={{ margin: "auto 20px", width: "100%" }}
        noPadding
        show={activeModal !== ""}
        onBackgroundClick={() => setActiveModal("")}
      >
        {modalContent(activeModal)}
      </Modal>
    </>
  );
}
