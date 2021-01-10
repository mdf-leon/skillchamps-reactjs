import React, { useState, useEffect } from "react";
import Message from "components/Message";
import AppBar from "components/AppBar";
import styles from "./useStyles";
import { Modal } from "components";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import { base } from "../../../config/api";

export default function Riders(props: any) {
  const classes = styles();
  const [dataRider, setDataRider] = useState<any[]>([]);
  const [activeModal, setActiveModal] = useState<any>("");
  const [currentId, setCurrentId] = useState<any>("");

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
          
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setActiveModal("")}
        >
          Cancel
        </Button>
        <Button
          className={classes.action}
          
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
  };

  useEffect(() => {
    softRefresh();
  }, []);

  const deleteRider = (id: any) => {
    base
      .delete(`/deleteRider/${id}`)
      .then(() => {
        setActiveModal("");
        softRefresh();
      })
      .catch(() => {});
  };

  return (
    <>
      <Message {...props} />
      <AppBar title="Rider list" {...props} />
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
              
              size="small"
              color="primary"
              onClick={() => console.log()}
            >
              SETTINGS
            </Button> */}
            <Button
              className={classes.action}
              
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
