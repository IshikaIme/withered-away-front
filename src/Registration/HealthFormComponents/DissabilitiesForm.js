import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const DissabilitiesForm = (props) => {
  const classes = useStyles();
  const [dissabilities, setDissabilities] = useState([{ name: "" }]);

	const handleDissabilitieChange = (index, event) => {
		const tempDissabilities = [...dissabilities];
		tempDissabilities[index][event.target.name] = event.target.value;
		setDissabilities(tempDissabilities);
    props.methods.setValue("dissabilities", tempDissabilities);
	};

	const handleAddDissabilitie = (event) => {
		setDissabilities([...dissabilities, { name: "" }]);
	};

	const handleRemoveDissabilitie = (event) => {
		const tempDissabilities = [...dissabilities];
		tempDissabilities.splice(dissabilities.length-1, 1);
		setDissabilities(tempDissabilities);
	};

  const GetRemoveDissabilitieButton = (event) => { 
    if(dissabilities.length !== 1) {
      return (<Button
        variant="contained"
        className={classes.button}
        onClick={event => handleRemoveDissabilitie(event)}
      >-</Button>);
    } else {
      return (<></>);
    }
  }

  return (
    <>
      <div className="table-title">Dissabilities You Might Have</div>
			<div className="table-content">
				<div className="table-body">
					{dissabilities.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
							<TextField
								name="name"
								label="Dissabilities"
								variant="outlined"
								placeholder={"Dissabilitie " + (index + 1)}
								value={item.name}
								onChange={(event) =>
									handleDissabilitieChange(index, event)
								}
								// fullWidth
								margin="normal"
							/>
							</div>
						</div>
					))}
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleAddDissabilitie}
          >+</Button>
          <GetRemoveDissabilitieButton />
				</div>
			</div>
    </>
  );
}

export default DissabilitiesForm;