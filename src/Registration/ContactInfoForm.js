import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const ContactInfoForm = () => {
	const { control } = useFormContext();
	return (
		<>
			<Controller
				control={control}
				name="contactName"
				render={({ field }) => (
					<TextField
						id="contact-name"
						label="Name"
						variant="outlined"
						placeholder="Enter Your Contact's Name"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name="contactPhoneNo"
				render={({ field }) => (
					<TextField
						id="contact-phone-no"
						label="Phone No"
						variant="outlined"
						placeholder="Enter Your Contact's Phone No"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name="contactRelationship"
				render={({ field }) => (
					<TextField
						id="contact-relationship"
						label="Relationship"
						variant="outlined"
						placeholder="Enter Your Relationship"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
      <Controller
				control={control}
				name="contactAddress"
				render={({ field }) => (
					<TextField
						id="contact-address"
						label="Address"
						variant="outlined"
						placeholder="Enter Your Contact's Address"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
		</>
	);
};

export default ContactInfoForm;