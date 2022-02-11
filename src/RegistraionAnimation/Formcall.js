import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "100vh",
    // backgroundSize: "cover",
    //  backgroundColor: "brown",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
  },

  papercont: {
    padding: theme.spacing(8),
    // background: "rgba(0,0,0,0.5)",
  },
}));

function Formcall() {
  const classes = useStyles();
  return (
    <>
      {/* <CssBaseline /> */}
      <Container className={classes.root} component={Box} p={4}>
        <Paper className={classes.papercont} component={Box} p={4} pt={4}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default Formcall;
