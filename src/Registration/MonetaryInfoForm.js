import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
const MonetaryInfoForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="bankAccountNo"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="bankAccountNo"
            label="Bank Account No"
            variant="outlined"
            placeholder="Enter Your Bank Account No"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.bankAccountNo)}
            helperText={errors.bankAccountNo?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="bankName"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="bankName"
            label="Bank Name"
            variant="outlined"
            placeholder="Enter Your Bank Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.bankName)}
            helperText={errors.bankName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="balance"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="balance"
            label="Balance"
            variant="outlined"
            placeholder="Enter Your Balance"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.balance)}
            helperText={errors.balance?.message}
          />
        )}
      />
      {/* <Controller
        control={control}
        name="membershipId"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="membershipId"
            label="Membership Id"
            variant="outlined"
            placeholder="Enter Your Membership Id"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.membershipId)}
            helperText={errors.membershipId?.message}
          />
        )}
      /> */}
      <label>Enter Your Membership Plan</label>
      <Controller
        control={control}
        name="membershipId"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <RadioGroup
            row
            {...field}
            error={Boolean(errors?.membershipId)}
            helperText={errors.membershipId?.message}
          >
            <FormControlLabel value="1" control={<Radio />} label="Basic" />
            <FormControlLabel value="2" control={<Radio />} label="Premium" />
            <FormControlLabel value="3" control={<Radio />} label="Gold" />
          </RadioGroup>
        )}
      />
    </>
  );
};

export default MonetaryInfoForm;
