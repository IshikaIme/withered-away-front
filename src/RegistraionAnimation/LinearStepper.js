import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  Checkbox,
  Select,
  MenuItem,
  Switch,
  StepLabel,
  RadioGroup,
  FormControlLabel,
  ThemeProvider,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
}));
// const theme = createMuiTheme({
//   palette: {
//     type: "dark",
//   },
// });
function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Health Information",
    "Entertainment",
    "Payment",
    "Setting up your Account",
  ];
}
const defaultValues = {
  TextField: "",
  TextField1: "",
};
const defaultdiseases = [
  {
    name: " ",
  },
];
const defaultMedicines = [
  {
    name: " ",
  },
];

const defaultVaccines = [
  {
    name: " ",
  },
];

const defaultDisabilities = [
  {
    name: " ",
  },
];

const defaultAllergies = [
  {
    name: " ",
  },
];

const defaultSongs = [
  {
    name: " ",
  },
];

const defaultMovies = [
  {
    name: " ",
  },
];

const defaultGames = [
  {
    name: " ",
  },
];

const BasicForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { handleSubmit, reset } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  console.log(errors);
  return (
    // <ThemeProvider theme={theme}>

    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <div className="YourName">
        <div className="wrap1">
          <div classname="flName">
            <Controller
              control={control}
              name="firstName"
              rules={{ required: "this field is required." }}
              render={({ field }) => (
                <TextField
                  id="first-name"
                  value={field.value}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter Your First Name"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={Boolean(errors?.firstName)}
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="wrap1">
          <div classname="flName">
            <Controller
              control={control}
              name="lastName"
              rules={{ required: "this field is required." }}
              render={({ field }) => (
                <TextField
                  id="last-name"
                  value={field.value}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Your Last Name"
                  fullWidth
                  margin="normal"
                  {...field}
                  error={Boolean(errors?.lastName)}
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </div>
        </div>

        <section className="radio">
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <RadioGroup aria-label="gender" {...field}>
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            )}
            name="RadioGroup"
            control={control}
          />
        </section>
        <div className="wrap2">
          <div className="Birthdaypicker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Controller
                name="birthdayPicker"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <KeyboardDatePicker
                    margin="normal"
                    id="Birthday"
                    label="Birthday"
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    {...rest}
                  />
                )}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <div className="wrap2">
          <div className="contactno">
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <TextField
                  value={field.value}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  id="phone-number"
                  label="Phone Number"
                  variant="outlined"
                  placeholder="Enter Your Phone Number"
                  fullWidth
                  margin="normal"
                  {...field}
                />
              )}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
const ContactForm = () => {
  const { handleSubmit, reset } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  const { control } = useFormContext();
  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <h1>Enter A Close Contact </h1>
      <section className="closecontact">
        <section className="contact">
          <Controller
            control={control}
            name="ContactName"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id="Close-Contact Name"
                label="Close-Contact Name"
                variant="outlined"
                placeholder="Enter Your Close Contact Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </section>
        <section className="contact">
          <Controller
            control={control}
            name="ContactRelationship"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id="Close-Contact Relationship"
                label="Close-Contact Relationship"
                variant="outlined"
                placeholder="Enter Your Relationship with the contact"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </section>
      </section>
      <section className="closecontactphoneaddress">
        <section className="contact">
          <Controller
            control={control}
            name="ContactPhone"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id="Close-Contact phone"
                label="Close-Contact Phone"
                variant="outlined"
                placeholder="Enter A Phone Number of the contact"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </section>

        <section className="contact">
          <Controller
            control={control}
            name="ContactAddress"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id="Close-Contact Address"
                label="Close-Contact Address"
                variant="outlined"
                placeholder="Enter Address of the contact"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </section>
      </section>
    </form>
  );
};

const HealthForm = () => {
  const { handleSubmit, reset } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  const { control } = useFormContext();
  //Add New Diseases
  const [diseases, setDiseases] = useState(defaultdiseases);

  const handleDiseaseChange = (event) => {
    event.preventDefault();
    const tempdiseases = [...diseases];
    tempdiseases[event.target.dataset.id][event.target.name] =
      event.target.value;

    setDiseases(tempdiseases);
  };

  const addNewDisease = (event) => {
    event.preventDefault();
    setDiseases((prevDiseases) => [...prevDiseases, { name: "" }]);
  };

  //Add New Medicines
  const [Medicines, setMedicines] = useState(defaultMedicines);

  const handleMedicineChange = (event) => {
    const tempMedicines = [...Medicines];
    tempMedicines[event.target.dataset.id][event.target.name] =
      event.target.value;

    setMedicines(tempMedicines);
  };

  const addNewMedicines = () => {
    setMedicines((prevDiseases) => [...prevDiseases, { name: "" }]);
  };

  //Add new Vaccines

  const [Vaccines, setVaccines] = useState(defaultVaccines);

  const handleVaccineChange = (event) => {
    const tempVaccine = [...Vaccines];
    tempVaccine[event.target.dataset.id][event.target.name] =
      event.target.value;

    setVaccines(tempVaccine);
  };

  const addNewVaccine = () => {
    setVaccines((prevDiseases) => [...prevDiseases, { name: "" }]);
  };

  //Add new Disabilties

  const [Disabilities, setDisabilities] = useState(defaultDisabilities);

  const handleDisabilitiesChange = (event) => {
    const tempDisabilities = [...Disabilities];
    tempDisabilities[event.target.dataset.id][event.target.name] =
      event.target.value;

    setDisabilities(tempDisabilities);
  };

  const addNewDisabilities = () => {
    setDisabilities((prevDiseases) => [...prevDiseases, { name: "" }]);
  };

  //Add new Allergies
  const [Allergies, setAllergies] = useState(defaultAllergies);

  const handleAllergiesChange = (event) => {
    const tempAllergies = [...Allergies];
    tempAllergies[event.target.dataset.id][event.target.name] =
      event.target.value;

    setAllergies(tempAllergies);
  };

  const addNewAllergies = () => {
    setAllergies((prevAllergies) => [...prevAllergies, { name: "" }]);
  };

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <div className="BMI">
        <div className="bmicontent">
          <label>Height</label>
          <Controller
            control={control}
            name="height"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id=" Height in cm"
                label=" Height in cm"
                variant="outlined"
                placeholder="Enter Your Height in cm"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </div>
        <div className="bmicontent">
          <label>Weight</label>
          <Controller
            control={control}
            name="Weight"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id=" Weight in kg"
                label=" Weight in kg"
                variant="outlined"
                placeholder="Enter Your Weight in kg"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </div>
        <div className="bmicontent">
          <label>Blood Group</label>
          <Controller
            control={control}
            name="bloodgroup"
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
            name="Select"
            control={control}
          />
        </div>
      </div>
      <section>
        <div className="table">
          <div className="table-title">Diseases You Might Have</div>
          <div className="table-content">
            <div className="table-body">
              {diseases.map((item, index) => (
                <div className="table-row" key={index}>
                  <div className="table-data">
                    <input
                      name="name"
                      data-id={index}
                      type="text"
                      value={item.name}
                      onChange={handleDiseaseChange}
                    />
                  </div>
                </div>
              ))}
              <div className="table-row">
                <div className="table-data">
                  <button onClick={addNewDisease}>+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="table">
            <div className="table-title">Medicines You Might Take</div>
            <div className="table-content">
              <div className="table-header">
                <div className="table-row"></div>
              </div>
              <div className="table-body">
                {Medicines.map((item, index) => (
                  <div className="table-row" key={index}>
                    <div className="table-data">
                      <input
                        name="name"
                        data-id={index}
                        type="text"
                        value={item.name}
                        onChange={handleMedicineChange}
                      />
                    </div>
                  </div>
                ))}
                <div className="table-row">
                  <div className="table-data">
                    <button onClick={addNewMedicines}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table">
            <div className="table-title">Vaccines You Have Taken</div>
            <div className="table-content">
              <div className="table-header">
                <div className="table-row"></div>
              </div>
              <div className="table-body">
                {Vaccines.map((item, index) => (
                  <div className="table-row" key={index}>
                    <div className="table-data">
                      <input
                        name="name"
                        data-id={index}
                        type="text"
                        value={item.name}
                        onChange={handleVaccineChange}
                      />
                    </div>
                  </div>
                ))}
                <div className="table-row">
                  <div className="table-data">
                    <button onClick={addNewVaccine}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrap3">
        <section>
          <div className="table">
            <div className="table-title">Disabilities You have</div>
            <div className="table-content">
              <div className="table-header">
                <div className="table-row"></div>
              </div>
              <div className="table-body">
                {Disabilities.map((item, index) => (
                  <div className="table-row" key={index}>
                    <div className="table-data">
                      <input
                        name="name"
                        data-id={index}
                        type="text"
                        value={item.name}
                        onChange={handleDisabilitiesChange}
                      />
                    </div>
                  </div>
                ))}
                <div className="table-row">
                  <div className="table-data">
                    <button onClick={addNewDisabilities}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="table">
            <div className="table-title">Allergies You Have</div>
            <div className="table-content">
              <div className="table-header">
                <div className="table-row"></div>
              </div>
              <div className="table-body">
                {Allergies.map((item, index) => (
                  <div className="table-row" key={index}>
                    <div className="table-data">
                      <input
                        name="name"
                        data-id={index}
                        type="text"
                        value={item.name}
                        onChange={handleAllergiesChange}
                      />
                    </div>
                  </div>
                ))}
                <div className="table-row">
                  <div className="table-data">
                    <button onClick={addNewAllergies}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};
const EntertainmentForm = () => {
  const { handleSubmit, reset } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  const { control } = useFormContext();

  //songs
  const [Songs, setSongs] = useState(defaultSongs);

  const handleSongsChange = (event) => {
    const tempSongs = [...Songs];
    tempSongs[event.target.dataset.id][event.target.name] = event.target.value;

    setSongs(tempSongs);
  };

  const addNewSongs = () => {
    setSongs((prevSongs) => [...prevSongs, { name: "" }]);
  };

  //movies
  const [Movies, setMovies] = useState(defaultMovies);

  const handleMoviesChange = (event) => {
    const tempMovies = [...Movies];
    tempMovies[event.target.dataset.id][event.target.name] = event.target.value;

    setMovies(tempMovies);
  };

  const addNewMovies = () => {
    setMovies((prevMovies) => [...prevMovies, { name: "" }]);
  };

  //games

  const [Games, setGames] = useState(defaultGames);

  const handleGamesChange = (event) => {
    const tempGames = [...Games];
    tempGames[event.target.dataset.id][event.target.name] = event.target.value;

    setGames(tempGames);
  };

  const addNewGames = () => {
    setGames((prevGames) => [...prevGames, { name: "" }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit((data) => setData(data))} className="form">
        <div className="table">
          <div className="table-title"> Songs You Like to Listen </div>
          <div className="table-content">
            <div className="table-header">
              <div className="table-row"></div>
            </div>
            <div className="table-body">
              {Songs.map((item, index) => (
                <div className="table-row" key={index}>
                  <div className="table-data">
                    <input
                      name="name"
                      data-id={index}
                      type="text"
                      value={item.name}
                      onChange={handleSongsChange}
                    />
                  </div>
                </div>
              ))}
              <div className="table-row">
                <div className="table-data">
                  <button onClick={addNewSongs}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="table-title"> Movies You Like to Watch </div>
          <div className="table-content">
            <div className="table-header">
              <div className="table-row"></div>
            </div>
            <div className="table-body">
              {Movies.map((item, index) => (
                <div className="table-row" key={index}>
                  <div className="table-data">
                    <input
                      name="name"
                      data-id={index}
                      type="text"
                      value={item.name}
                      onChange={handleMoviesChange}
                    />
                  </div>
                </div>
              ))}
              <div className="table-row">
                <div className="table-data">
                  <button onClick={addNewMovies}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="table-title"> Games You Like to Play </div>
          <div className="table-content">
            <div className="table-header">
              <div className="table-row"></div>
            </div>
            <div className="table-body">
              {Games.map((item, index) => (
                <div className="table-row" key={index}>
                  <div className="table-data">
                    <input
                      name="name"
                      data-id={index}
                      type="text"
                      value={item.name}
                      onChange={handleGamesChange}
                    />
                  </div>
                </div>
              ))}
              <div className="table-row">
                <div className="table-data">
                  <button onClick={addNewGames}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const Payment = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { handleSubmit, reset } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  console.log(errors);
  return (
    // <ThemeProvider theme={theme}>

    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <div className="wrap2">
        <section className="radio">
          <label> Select Your Membership Type</label>
          <Controller
            control={control}
            name="membership"
            rules={{ required: "this field is required." }}
            render={({ field }) => (
              <RadioGroup
                aria-label="membership"
                {...field}
                error={Boolean(errors?.membership)}
                helperText={errors.membership?.message}
              >
                <FormControlLabel
                  value="Basic"
                  control={<Radio />}
                  label="Basic"
                />
                <FormControlLabel
                  value="Premium"
                  control={<Radio />}
                  label="Premium"
                />
                <FormControlLabel
                  value="Gold"
                  control={<Radio />}
                  label="Gold"
                />
              </RadioGroup>
            )}
          />
        </section>
      </div>
      <div className="wrap2">
        <div className="BankAccountNo">
          <label> Enter Your Bank Account No</label>
          <Controller
            control={control}
            name="BankAccountNo"
            rules={{ required: "this field is required." }}
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id="Bank AccountNo"
                label="Bank AccountNo"
                variant="outlined"
                placeholder="Enter Your Account No"
                fullWidth
                margin="normal"
                {...field}
                error={Boolean(errors?.BankAccountNo)}
                helperText={errors.BankAccountNo?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="wrap2">
        <div className="BankAccountTransfer">
          <label> How Much Do You Want to Transfer from Your Account?</label>
          <Controller
            control={control}
            name="BankAccountTransfer"
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                id="Bank AccountTransfer"
                label="BankAccountTransfer"
                variant="outlined"
                placeholder="Enter Amount"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </div>
      </div>
    </form>
  );
};

const CreateAccountForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { handleSubmit, reset } = useForm({ defaultValues });
  const [data, setData] = useState(null);
  console.log(errors);
  return (
    // <ThemeProvider theme={theme}>

    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <div className="createAccount">
        <label> Enter Your User Name</label>
        <Controller
          control={control}
          name="UserName"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              inputRef={field.ref}
              id="UserName"
              label="UserName"
              variant="outlined"
              placeholder="Enter Your User Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.UserName)}
              helperText={errors.UserName?.message}
            />
          )}
        />
      </div>
      <div className="createAccount">
        <label> Enter Your Password</label>
        <Controller
          control={control}
          name="Password"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              value={field.value}
              onChange={field.onChange}
              inputRef={field.ref}
              id="Password"
              label="Password"
              variant="outlined"
              placeholder="Enter A Password"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.Password)}
              helperText={errors.Password?.message}
            />
          )}
        />
      </div>
    </form>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <HealthForm />;
    case 3:
      return <EntertainmentForm />;

    case 4:
      return <Payment />;

    case 5:
      return <CreateAccountForm />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();

  // const useStyles = makeStyles((theme) => ({
  //   button: {
  //     // display: "flex",
  //     // justifyContent: "center",
  //     // alignItems: "center",

  //     // height: "100vh",
  //     // fontFamily: "Courgette",
  //     marginTop: "2rem",
  //   },
  // }));

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",

      phoneNumber: "",
      ContactName: "",
      ContactPhone: "",
      ContactRelationship: "",
      ContactAddress: "",
      height: "",
      bloodgroup: "",
      weight: "",
      membership: "",
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2 || step == 3;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <div>
                <div className="btn">
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    back
                  </Button>
                </div>
                <div className="btn">
                  {isStepOptional(activeStep) && (
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                    >
                      skip
                    </Button>
                  )}
                </div>
                <div className="btn">
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinearStepper;
