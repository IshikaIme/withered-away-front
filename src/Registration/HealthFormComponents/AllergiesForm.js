import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const AllergiesForm = (props) => {
  const classes = useStyles();
  const [allergies, setAllergies] = useState([{ name: "" }]);

	const handleAllergieChange = (index, event) => {
		const tempAllergies = [...allergies];
		tempAllergies[index][event.target.name] = event.target.value;
		setAllergies(tempAllergies);
    props.methods.setValue("allergies", tempAllergies);
	};

	const handleAddAllergie = (event) => {
		setAllergies([...allergies, { name: "" }]);
	};

	const handleRemoveAllergie = (event) => {
		const tempAllergies = [...allergies];
		tempAllergies.splice(allergies.length-1, 1);
		setAllergies(tempAllergies);
	};

  const GetRemoveAllergieButton = (event) => { 
    if(allergies.length !== 1) {
      return (<Button
        variant="contained"
        className={classes.button}
        onClick={event => handleRemoveAllergie(event)}
      >-</Button>);
    } else {
      return (<></>);
    }
  }

  return (
		<>
			<div className="table-title">Allergies You Might Have</div>
			<div className="table-content">
				<div className="table-body">
					{allergies.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
								<TextField
									name="name"
									label="Allergies"
									variant="outlined"
									placeholder={"Allergie " + (index + 1)}
									value={item.name}
									onChange={(event) =>
										handleAllergieChange(index, event)
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
							onClick={handleAddAllergie}
						>
							+
						</Button>
						<GetRemoveAllergieButton />
					</center>
				</div>
			</div>
		</>
  );
}

export default AllergiesForm;