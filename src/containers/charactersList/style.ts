import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: 230,
    overflow: "scroll",
  },
  listImg: {
    position: "relative",
    width: 66,
    height: 66,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
    border: "1px solid #FFF",

    "& img": {
      opacity: 0.5,
      width: 60,
      height: 60,
    },
  },
  selected: {
    border: "1px solid #0005FF",
    borderRadius: 6,

    "& img": {
      opacity: 1,
    },
  },
  removeCircle: {
    position: "absolute",
    borderRadius: 20,
    width: 20,
    height: 20,
    backgroundColor: "#F1F1F1",
    right: -10,
    top: -10,
    cursor: "pointer",
    zIndex: 1,
  },
}));

export default useStyles;
