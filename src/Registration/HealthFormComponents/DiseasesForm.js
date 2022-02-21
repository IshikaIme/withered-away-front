import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const DiseasesForm = (props) => {
  const classes = useStyles();
  const [diseases, setDiseases] = useState([{ name: "" }]);

  const handleDiseaseChange = (index, event) => {
    const tempDiseases = [...diseases];
    tempDiseases[index][event.target.name] = event.target.value;
    setDiseases(tempDiseases);
    props.methods.setValue("diseases", tempDiseases);
  };

  const handleAddDisease = (event) => {
    setDiseases([...diseases, { name: "" }]);
  };

  const handleRemoveDisease = (event) => {
    const tempDiseases = [...diseases];
    tempDiseases.splice(diseases.length - 1, 1);
    setDiseases(tempDiseases);
  };

  const GetRemoveDiseaseButton = (event) => {
    if (diseases.length !== 1) {
      return (
        <Button
          variant="contained"
          className={classes.button}
          onClick={(event) => handleRemoveDisease(event)}
        >
          -
        </Button>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div className="table-title">Diseases You Might Have</div>
      <div className="table-content">
        <div className="table-body">
          {diseases.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <TextField
                  name="name"
                  label="Diseases"
                  variant="outlined"
                  placeholder={"Disease " + (index + 1)}
                  value={item.name}
                  onChange={(event) => handleDiseaseChange(index, event)}
                  // fullWidth
                  margin="normal"
                />
              </div>
            </div>
          ))}
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleAddDisease}
          >
            +
          </Button>
          <GetRemoveDiseaseButton />
        </div>
      </div>
    </>
  );
};

export default DiseasesForm;
