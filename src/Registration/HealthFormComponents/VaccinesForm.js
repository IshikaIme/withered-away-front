import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const VaccinesForm = (props) => {
  const classes = useStyles();
  const [vaccines, setVaccines] = useState([{ name: "" }]);

	const handleVaccineChange = (index, event) => {
		const tempVaccines = [...vaccines];
		tempVaccines[index][event.target.name] = event.target.value;
		setVaccines(tempVaccines);
    props.methods.setValue("vaccines", tempVaccines);
	};

	const handleAddVaccine = (event) => {
		setVaccines([...vaccines, { name: "" }]);
	};

	const handleRemoveVaccine = (event) => {
		const tempVaccines = [...vaccines];
		tempVaccines.splice(vaccines.length-1, 1);
		setVaccines(tempVaccines);
	};

  const GetRemoveVaccineButton = (event) => { 
    if(vaccines.length !== 1) {
      return (<Button
        variant="contained"
        className={classes.button}
        onClick={event => handleRemoveVaccine(event)}
      >-</Button>);
    } else {
      return (<></>);
    }
  }

  return (
		<>
			<div className="table-title">Vaccines You Might Have</div>
			<div className="table-content">
				<div className="table-body">
					{vaccines.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
								<TextField
									name="name"
									label="Vaccines"
									variant="outlined"
									placeholder={"Vaccine " + (index + 1)}
									value={item.name}
									onChange={(event) =>
										handleVaccineChange(index, event)
									}
									fullWidth
									margin="normal"
								/>
							</div>
						</div>
					))}
					<center>
						<Button
							variant="contained"
							className={classes.button}
							onClick={handleAddVaccine}
						>
							+
						</Button>
						<GetRemoveVaccineButton />
					</center>
				</div>
			</div>
		</>
  );
}

export default VaccinesForm;