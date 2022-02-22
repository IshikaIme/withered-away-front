import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const MedicinesForm = (props) => {
	const classes = useStyles();
	const { control } = useFormContext();
	const [medicines, setMedicines] = useState([{ name: "", time: "" }]);

	const handleMedicineChange = (index, event) => {
		const tempMedicines = [...medicines];
		tempMedicines[index][event.target.name] = event.target.value;
		setMedicines(tempMedicines);
		props.methods.setValue("medicines", tempMedicines);
	};

	const handleAddMedicine = (event) => {
		setMedicines([...medicines, { name: "", time: "" }]);
	};

	const handleRemoveMedicine = (event) => {
		const tempMedicines = [...medicines];
		tempMedicines.splice(medicines.length - 1, 1);
		setMedicines(tempMedicines);
	};

	const GetRemoveMedicineButton = (event) => {
		if (medicines.length !== 1) {
			return (
				<Button
					variant="contained"
					className={classes.button}
					onClick={(event) => handleRemoveMedicine(event)}
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
			<div className="table-title">Medicines You Might Have</div>
			<div className="table-content">
				<div className="table-body">
					{medicines.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
								<TextField
									name="name"
									label="Medicines"
									variant="outlined"
									placeholder={"Medicine " + (index + 1)}
									value={item.name}
									onChange={(event) =>
										handleMedicineChange(index, event)
									}
									fullWidth
									margin="normal"
								/>
							</div>
							<center>
								<label>Time</label>&emsp;&emsp;
								{/* <Controller
								// control={control}
								name=""
								render={({ field }) => ( */}
								<Select
									name="time"
									onChange={(event) =>
										handleMedicineChange(index, event)
									}
								>
									<MenuItem
										value="Before-Breakfast"
										// selected={(event) => handleMedicineChange(index, event)}
									>
										Before-Breakfast
									</MenuItem>
									<MenuItem
										value="Before-Lunch"
										// selected={(event) => handleMedicineChange(index, event)}
									>
										Before-Lunch
									</MenuItem>
									<MenuItem
										value="Before-Dinner"
										// selected={(event) => handleMedicineChange(index, event)}
									>
										Before-Dinner
									</MenuItem>
									<MenuItem
										value="After-Breakfast"
										// selected={(event) => handleMedicineChange(index, event)}
									>
										After-Breakfast
									</MenuItem>
									<MenuItem
										value="After-Lunch"
										// selected={(event) => handleMedicineChange(index, event)}
									>
										After-Lunch
									</MenuItem>
									<MenuItem
										value="After-Dinner"
										// selected={(event) => handleMedicineChange(index, event)}
									>
										After-Dinner
									</MenuItem>
								</Select>
							</center>
							{/* )}
							/> */}
						</div>
					))}
					<center>
						<br />
						<Button
							variant="contained"
							className={classes.button}
							onClick={handleAddMedicine}
						>
							+
						</Button>
						<GetRemoveMedicineButton />
					</center>
				</div>
			</div>
		</>
	);
};

export default MedicinesForm;
