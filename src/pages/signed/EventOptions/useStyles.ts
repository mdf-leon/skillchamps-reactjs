import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      margin: "18px 8px 0 8px",
      display: 'flex',
      justifyContent: "space-between",
    },
    mainDiv: {
      paddingTop: "50px",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      width: '100%',
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