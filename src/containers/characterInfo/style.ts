import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  imgContainer: {
    width: 224,
    height: 224,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "0px 0px 34px rgba(0, 0, 0, 0.0914656)",
  },
  error: {
    color: "#FF0000",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    lineHeight: "41px",
    marginLeft: 14,
  },
  characterInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "self-start",
    justifyContent: "space-around",
    marginLeft: 21,

    "& > div": {
      "&:first-child": {
        fontSize: 32,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        lineHeight: "41px",
        color: "#000",
        textAlign: "start",
      },
    },
  },
  columnGroup: {
    display: "flex",
    height: "65%",
  },
  categoryColumn: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "space-around",
    marginRight: 23,

    "& > span": {
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: "21px",
      color: "#B1B1B1",
    },
  },
  infoColumn: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "space-around",

    "& > span": {
      fontSize: 16,
      lineHeight: "21px",
      fontWeight: "bold",
      color: "#000",
    },
  },
  grey: {
    color: "#B1B1B1 !important",
  },
  green: {
    color: "#3de472 !important",
  },
  red: {
    color: "#FF0000 !important",
  },
}));

export default useStyles;
