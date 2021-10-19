import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 65,
  },
  actions: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 33,
    fontStyle: "italic",

    "& button": {
      textTransform: "inherit",
      fontStyle: "italic",
      color: "#0005FF",
    },
  },
  inputGroup: {
    width: 223,

    "& > div": {
      width: "100%",
    },
    "& button": {
      height: "100%",
      marginRight: "-10px",
    },
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
