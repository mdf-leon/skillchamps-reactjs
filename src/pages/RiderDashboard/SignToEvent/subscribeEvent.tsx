/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
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
import AppBar from "../../../components/AppBar";
import {
  CardHeader,
  HistoryInfoDiv,
  DivDepoisPensoNome,
  FirstMedal,
  SecondMedal,
  ThirdMedal,
} from "./styles";

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
    historyContent: {
      position: "relative",
      overflowY: "scroll",
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
    historyImg: {
      height: 75,
      width: 75,
    },
    action: {
      position: "unset",
    },
  })
);

export default function SubscribeToEvent(props: any) {
  const classes = useStyles();
  const riderCardRef = React.useRef<any>(null);

  const [riderInfo, setriderInfo] = React.useState<any>({});
  const [
    subscribedEventCardSize,
    setsubscribedEventCardSize,
  ] = React.useState<number>(0);

  React.useEffect(() => {
    setriderInfo(JSON.parse(localStorage.getItem("rider_info") || ""));
  }, []);

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
  
  return (
    <div style={{margin: 0 , overflowX: 'hidden'}}>
      <AppBar title="Find Events" {...props} /> 
      <Grid container spacing={3} className={classes.mainDiv} style={{width: '100%'}}> 
        {/* <button onClick={()=>{console.log();
      }}>me come</button> */}
        <Grid item xs={6}>
          <Card className={classes.root} ref={riderCardRef}>
            <CardContent className={classes.riderContent}>
              <CardMedia
                className={classes.riderImage}
                image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
                title="Contemplative Reptile"
              />
              <div className="ml-20">
                <Typography gutterBottom variant="h5" component="h2">
                  {riderInfo.name}
                </Typography>
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                className={classes.action}
                variant="contained"
                size="small"
                color="primary"
                onClick={() => props.history.push("/beforePoints")}
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
          
        </Grid>
        <Grid item xs={6}>
          <div>
            <div style={{ margin: "18px 8px 0 8px" }}>
              <CardMedia
                style={{
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
                className={classes.media}
                image="https://i.pinimg.com/736x/34/df/ee/34dfeed20d644ba572bd2d8d31bc8d77.jpg"
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
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
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
                accident, sometimes on purpose (injected humour and the like).
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
