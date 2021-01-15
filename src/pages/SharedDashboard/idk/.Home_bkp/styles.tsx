import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const homeStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {},
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent',
      boxShadow: '0px 0px 0px 0px #888888',
      margin: '5px 0 5px 0',
      width: '100%',
      cursor: 'pointer',
    },
    ternaryDiv: {
      width: '100%',
    },
    details: {
      display: 'flex',
      marginLeft: '5px',
      paddingRight: '5px',
      flexDirection: 'row',
      borderBottom: '1px solid #D5D5D5',
      alignItems: 'center',
      width: '100%',
    },
    content: {
      flex: '1 0 auto',
      padding: '16px 16px 16px 0',
    },
    cover: {
      height: 92,
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

export {
  homeStyles
}