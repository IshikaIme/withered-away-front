import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const MonetaryInfoForm = () => {
	const { control } = useFormContext();
	return (
		<>
			<Controller
				control={control}
				name="bankAccountNo"
				render={({ field }) => (
					<TextField
						id="bankAccountNo"
						label="Bank Account No"
						variant="outlined"
						placeholder="Enter Your Bank Account No"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name="bankName"
				render={({ field }) => (
					<TextField
						id="bankName"
						label="Bank Name"
						variant="outlined"
						placeholder="Enter Your Bank Name"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name="balance"
				render={({ field }) => (
					<TextField
						id="balance"
						label="Balance"
						variant="outlined"
						placeholder="Enter Your Balance"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
      <Controller
				control={control}
				name="membershipId"
				render={({ field }) => (
					<TextField
						id="membershipId"
						label="Membership Id"
						variant="outlined"
						placeholder="Enter Your Membership Id"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
		</>
	);
};

export default MonetaryInfoForm;