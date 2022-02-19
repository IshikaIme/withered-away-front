import LinearStepper from "../Registration/LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import RegImg from "../images/form.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // backgroundRepeat: "no-repeat",

    // backgroundImage: `url(${RegImg})`,
    fontFamily: "corgette",

    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    alignContent: "center",
    // backgroundBlendMode: "mix",
  },
  boxroot: {
    border: "blue",
    borderSize: "2px",
    height: "100vh",
    // backgroundSize: "cover",
    marginRight: "10rem",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8),
    // background: "rgba(255,0,0,0.1)",
  },

  papercont: {
    // width: "100vh",
    // Height: "100vh",
    marginBottom: "1rem",
    border: "blue",
    borderSize: "2px",
    // marginLeft: "-1rem",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    // backgroundSize: "cover",

    // backgroundColor: "#4D4DFF",
    // backgroundImage: `url(${RegImg})`,
    padding: theme.spacing(8),
    // backgroundBlendMode: "mix",
    // background: "rgba(255,255,255,0.5)",
  },
}));

function Formcall() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.boxroot}>
          <Paper className={classes.papercont}>
            <LinearStepper />
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default Formcall;
