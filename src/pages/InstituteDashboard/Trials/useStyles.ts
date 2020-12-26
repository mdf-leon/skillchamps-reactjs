import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      margin: "18px 8px 0 8px",
      display: 'flex',
      justifyContent: "space-between",
    },
    mainDiv: {
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: '0px',
    },
    cover: {
      height: 92,
      width: 151,
    },
    action: {
      position: "unset",
    },
    options: {
      display: "flex",
      padding: '16px',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'transparent',
      borderBottom: '1px solid #D5D5D5',
    },
    row: {
      display: "flex",
      flexDirection: "column",
    },
    actions: {
      justifyContent: "space-between",
      padding: '16px 16px 16px 0',
    }
});

export default useStyles