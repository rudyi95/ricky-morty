import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "flex",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
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
  },
}));

export default useStyles;
