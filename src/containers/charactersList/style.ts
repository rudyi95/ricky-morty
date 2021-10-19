import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: 230,
    overflow: "scroll",
  },
  listImg: {
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
}));

export default useStyles;
