/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import { AppBar, Modal } from "components";
import { base, baseUrl } from "config/api";
import { CardHeader } from "./styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      // overflowX: 'hidden',
      maxHeight: "100%",
      height: "100%",
      margin: 0,
      marginBottom: "10px",
      paddingBottom: "10px",
    },
    root: {
      flexGrow: 1,
      margin: "18px 8px 0 8px",
      // overflow: "hidden",
    },
    riderContent: {
      display: "flex",
      justifyContent: "flex-start",
    },
    subscribedEventContent: {
      overflowY: "scroll",
    },
    media: {
      height: 140,
    },
    riderImage: {
      minHeight: 110,
      minWidth: 110,
      height: 110,
      width: 110,
    },
    action: {
      position: "unset",
    },
  })
);

export default function ViewPastEvent(props: any) {
  const classes = useStyles();
  const [modalRender, setModalRender] = React.useState<any>("");
  const riderCardRef = React.useRef<any>(null);
  const { event_id } = useParams();

  const [eventInfo, seteventInfo] = React.useState<any>({});
  const [
    subscribedEventCardSize,
    setsubscribedEventCardSize,
  ] = React.useState<number>(0);

  React.useEffect(() => {
    base
      .get(`/events`, { params: { event_id } })
      .then((r) => {
        console.log(r.data);

        seteventInfo(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubscribe = () => {
    const { id: rider_id } = JSON.parse(
      localStorage.getItem("rider_info") || ""
    );
    base
      .post(`/signToEvent`, { rider_id, event_id: eventInfo.id })
      .then((r) => {
        setModalRender("Success");
      })
      .catch((e) => {
        console.log(e.response.data);
        // if (e.response.data.Error === "Ja existe") {
        //   alert("You are already subscribed to this event.");
        // }
        // props.history.push("/dashboard/sign-to-event/7/success");
        setModalRender("Error");
      });
  };

  React.useLayoutEffect(() => {
    function updateSize() {
      setsubscribedEventCardSize(
        window.innerHeight - 140 - (props.appBarHeight || 0)
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line
  }, []);

  const ModalSuccess = (
    <Modal
      bodyStyle={{ padding: "20px", textAlign: "center", maxWidth: "400px" }}
      show={modalRender === "Success"}
    >
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Congratulations you have been subscribed to this event.
        </Typography>
        <Divider />
        <Button
          className="mt-20"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => props.history.push("/dashboard/home")}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );

  const ModalError = (
    <Modal
      bodyStyle={{ padding: "20px", textAlign: "center", maxWidth: "400px" }}
      show={modalRender === "Error"}
    >
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Could not subscribed right now, try again later.
        </Typography>
        <Divider />
        <Button
          className="mt-20"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setModalRender("")}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );

  return (
    <div style={{ margin: 0, overflowX: "hidden" }}>
      <AppBar title="Subscribe to an Event" {...props} />
      <Grid
        container
        spacing={3}
        className={classes.mainDiv}
        style={{ width: "100%" }}
      >
        <Grid item xs={12} sm={6}>
          <Card className={classes.root} ref={riderCardRef}>
            <CardContent className={classes.riderContent}>
              <CardMedia
                className={classes.riderImage}
                image={`${baseUrl}/image/${eventInfo.photo_event}`}
                title="Contemplative Reptile"
              />
              <div className="ml-20">
                <Typography gutterBottom variant="h5" component="h2">
                  {eventInfo.event_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {new Date(
                    localStorage.getItem("temp_event_date_begin") || ""
                  ).toLocaleDateString("en-US")}
                </Typography>
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                className={classes.action}
                variant="contained"
                size="small"
                color="primary"
                onClick={() => {
                  handleSubscribe();
                }}
              >
                Total result
              </Button>
              <Button
                className={classes.action}
                variant="contained"
                size="small"
                color="primary"
                onClick={() => {
                  handleSubscribe();
                }}
              >
                Partial result
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <div style={{ margin: "18px 8px 0 8px" }}>
              <CardMedia
                style={{
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
                className={classes.media}
                image={`${baseUrl}/image/${eventInfo.photo_event}`}
                title="Contemplative Reptile"
              />
            </div>
            <Card style={{ margin: "0px 8px 0 8px" }} className={classes.root}>
              <CardHeader>
                <Typography gutterBottom variant="h5" component="h2">
                  Lorem Ipsum
                </Typography>
                <Divider />
              </CardHeader>
              <CardContent
                className={classes.subscribedEventContent}
                style={{
                  height: subscribedEventCardSize - 190,
                  minHeight: "100px",
                }}
              >
                {eventInfo.long_text ||
                  `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).`}
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
      {ModalSuccess}
      {ModalError}
    </div>
  );
}
