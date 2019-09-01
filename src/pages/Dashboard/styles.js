import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperMain: {
    padding: theme.spacing(2),
    minHeight: "200px",
    textAlign: "left",
    color: "black"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "black"
  }
}));

export default useStyles;
