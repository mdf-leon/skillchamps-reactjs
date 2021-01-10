import React from 'react';
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
} from '@material-ui/core';
import {
  CardHeader,
  HistoryInfoDiv,
  DivDepoisPensoNome,
  FirstMedal,
  SecondMedal,
  ThirdMedal,
} from './styles';
import SubscribedEvents from '../SubscribedEvents';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      // overflowX: 'hidden',
      maxHeight: '100%',
      height: '100%',
      margin: 0,
      marginBottom: '10px',
      paddingBottom: '10px',
    },
    root: {
      flexGrow: 1,
      margin: '18px 8px 0 8px',
      // overflow: "hidden",
    },
    riderContent: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    historyContent: {
      position: 'relative',
      overflowY: 'scroll',
    },
    subscribedEventContent: {
      overflowY: 'scroll',
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
      position: 'unset',
    },
  })
);

export default function DesktopHome(props: any) {
  const classes = useStyles();
  const riderCardRef = React.useRef<any>(null);

  const [historyCardSize, sethistoryCardSize] = React.useState<number>(0);
  const [
    subscribedEventCardSize,
    setsubscribedEventCardSize,
  ] = React.useState<number>(0);

  let historyMocked = [
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Quinto Evento de Motohabilidade',
      institute: 'Discover rideskill',
      podium: 1,
    },
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Chicago summer skill championship',
      institute: 'Chicago P.D.',
      podium: 3,
    },
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'OpenPublic motorcycle ride skill',
      institute: 'NY P.D.',
      podium: 0,
    },
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Quarto Evento de Motohabilidade',
      institute: 'Discover rideskill',
      podium: 2,
    },
  ];

  React.useEffect(() => {
    console.log(historyCardSize);
  }, [historyCardSize]);

  React.useLayoutEffect(() => {
    function updateSize() {
      const riderCardHeight =
        riderCardRef?.current?.getBoundingClientRect()?.height || 0;
      sethistoryCardSize(
        window.innerHeight - riderCardHeight - 138 - (props.appBarHeight || 0)
      );
      setsubscribedEventCardSize(
        window.innerHeight - 120 - (props.appBarHeight || 0)
      );
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line 
  }, []);

  // const modalContent = (modalName, id = null) => { // modal da paytime que eU FIZ E MATEUS N GOSTA
  //   const modals = {
  //     PermissionsModal: <PermissionsModal onButtonCancel={() => setActiveModal('')} id={id} />
  //   }
  //   return modals[modalName] || null
  // }

  const renderPodium = (podium) => {
    if (podium === 0) return null;
    const Medal = {
      1: FirstMedal,
      2: SecondMedal,
      3: ThirdMedal,
    }[podium];
    console.log(podium, Medal);
    return (
      <Medal size="40" internalSize="5">
        {podium}
      </Medal>
    );
  };

  // historyMocked = []
  //calc(100vh - 420px)
  return (
    <Grid container spacing={3} className={classes.mainDiv}>
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
                Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano
                Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga
                de Habsburgo-Lorena e Bragança
              </Typography>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'space-between' }}>
            <Button
              className={classes.action}
              size="small"
              color="primary"
              onClick={() => console.log()}
            >
              SETTINGS
            </Button>
            <Button
              className={classes.action}
              variant="contained"
              size="small"
              color="primary"
              onClick={() => props.history.push('/beforePoints')}
            >
              SIGN TO EVENT
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} style={{ height: 'auto' }} id="paidoboi">
          <CardHeader>
            <Typography gutterBottom variant="h5" component="h2">
              History
            </Typography>
            <Divider />
          </CardHeader>
          <CardContent
            className={classes.historyContent}
            id="boi1"
            style={{ height: historyCardSize, minHeight: '100px' }}
          >
            {historyMocked.map((history) => (
              <div>
                <HistoryInfoDiv>
                  <CardMedia
                    className={classes.historyImg}
                    image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
                    title="Contemplative Reptile"
                  />
                  <DivDepoisPensoNome>
                    <div>
                      <Typography className="ml-20" variant="h5" component="h2">
                        {history.event_name}
                      </Typography>
                      <Typography
                        className="ml-20"
                        color="textSecondary"
                        variant="subtitle1"
                        component="p"
                      >
                        {history.institute}
                      </Typography>
                    </div>
                    {renderPodium(history.podium)}
                  </DivDepoisPensoNome>
                </HistoryInfoDiv>
                <Divider />
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.root}>
          <CardHeader>
            <Typography gutterBottom variant="h5" component="h2">
              Subscribed Events
            </Typography>
            <Divider />
          </CardHeader>
          <CardContent
            className={classes.subscribedEventContent}
            style={{ height: subscribedEventCardSize, minHeight: '100px' }}
          >
            <SubscribedEvents />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
