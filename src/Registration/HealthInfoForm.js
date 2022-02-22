import { MenuItem, Select, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import DiseasesForm from "./HealthFormComponents/DiseasesForm";
import MedicinesForm from "./HealthFormComponents/MedicinesForm";
import DissabilitiesForm from "./HealthFormComponents/DissabilitiesForm";
import VaccinesForm from "./HealthFormComponents/VaccinesForm";
import AllergiesForm from "./HealthFormComponents/AllergiesForm";

// const useStyles = makeStyles((theme) => ({
// 	button: {
// 		marginRight: theme.spacing(1),
// 	},
// }));

const HealthInfoForm = (props) => {
  // const classes = useStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="health">
      <div className="row">
        <div className="content">
          <DiseasesForm {...props} />
        </div>
        <div className="content">
          <MedicinesForm {...props} />
        </div>
      </div>
      <Controller
        control={control}
        name="height"
        render={({ field }) => (
          <TextField
            id="height"
            label="Height"
            variant="outlined"
            placeholder="Enter Your Height"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="weight"
        render={({ field }) => (
          <TextField
            id="weight"
            label="Weight"
            variant="outlined"
            placeholder="Enter Your Weight"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <label>Blood Group</label>
      <Controller
        control={control}
        name="bloodGroup"
        fullWidth
        render={({ field }) => (
          <Select {...field}>
            <MenuItem value="O+" onChange={field.onChange}>
              O+
            </MenuItem>
            <MenuItem value="AB+" onChange={field.onChange}>
              AB+
            </MenuItem>
            <MenuItem value="A+" onChange={field.onChange}>
              A+
            </MenuItem>
            <MenuItem value="B+" onChange={field.onChange}>
              B+
            </MenuItem>
            <MenuItem value="A-" onChange={field.onChange}>
              A-
            </MenuItem>
            <MenuItem value="B-" onChange={field.onChange}>
              B-
            </MenuItem>
            <MenuItem value="AB-" onChange={field.onChange}>
              AB-
            </MenuItem>
            <MenuItem value="O-" onChange={field.onChange}>
              O-
            </MenuItem>
          </Select>
        )}
      />
      <DissabilitiesForm {...props} />
      <AllergiesForm {...props} />
      <VaccinesForm {...props} />
      <Controller
        control={control}
        name="healthCondition"
        render={({ field }) => (
          <>
            <FormLabel id="">Health Condition</FormLabel>
            <RadioGroup row {...field}>
              <FormControlLabel value="BEST" control={<Radio />} label="Best" />
              <FormControlLabel value="GOOD" control={<Radio />} label="Good" />
              <FormControlLabel value="BAD" control={<Radio />} label="Bad" />
            </RadioGroup>
          </>
        )}
      />
    </div>
  );
};

export default HealthInfoForm;
