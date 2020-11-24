import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      margin: "18px 8px 0 8px",
    },
    mainDiv: {
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
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
});

export default useStyles