import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const GamesForm = (props) => {
  const classes = useStyles();
  const [games, setGames] = useState([{ name: "" }]);

	const handleGameChange = (index, event) => {
		const tempGames = [...games];
		tempGames[index][event.target.name] = event.target.value;
		setGames(tempGames);
    props.methods.setValue("games", tempGames);
	};

	const handleAddGame = (event) => {
		setGames([...games, { name: "" }]);
	};

	const handleRemoveGame = (event) => {
		const tempGames = [...games];
		tempGames.splice(games.length-1, 1);
		setGames(tempGames);
	};

  const GetRemoveGameButton = (event) => { 
    if(games.length !== 1) {
      return (<Button
        variant="contained"
        className={classes.button}
        onClick={event => handleRemoveGame(event)}
      >-</Button>);
    } else {
      return (<></>);
    }
  }

  return (
		<>
			<div className="table-title">Games You Love to Play</div>
			<div className="table-content">
				<div className="table-body">
					{games.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
								<TextField
									name="name"
									label="Games"
									variant="outlined"
									placeholder={"Game " + (index + 1)}
									value={item.name}
									onChange={(event) =>
										handleGameChange(index, event)
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
							onClick={handleAddGame}
						>
							+
						</Button>
						<GetRemoveGameButton />
					</center>
				</div>
			</div>
		</>
  );
}

export default GamesForm;