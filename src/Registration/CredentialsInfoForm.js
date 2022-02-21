import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const CredentialsInfoForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="username"
        rules={{
          required: "this field is required.",
          maxLength: {
            value: 15,
            message: "Username can't exceed 15 characters",
          },
        }}
        render={({ field }) => (
          <TextField
            id="username"
            label="User Name"
            variant="outlined"
            placeholder="Enter Your User Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.username)}
            helperText={errors.username?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: "this field is required.",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        }}
        render={({ field }) => (
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            placeholder="Enter Your Password"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.password)}
            helperText={errors.password?.message}
          />
        )}
      />
    </>
  );
};

export default CredentialsInfoForm;
