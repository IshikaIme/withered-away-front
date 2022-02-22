import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const SongsForm = (props) => {
  const classes = useStyles();
  const [songs, setSongs] = useState([{ name: "" }]);

	const handleSongChange = (index, event) => {
		const tempSongs = [...songs];
		tempSongs[index][event.target.name] = event.target.value;
		setSongs(tempSongs);
    props.methods.setValue("songs", tempSongs);
	};

	const handleAddSong = (event) => {
		setSongs([...songs, { name: "" }]);
	};

	const handleRemoveSong = (event) => {
		const tempSongs = [...songs];
		tempSongs.splice(songs.length-1, 1);
		setSongs(tempSongs);
	};

  const GetRemoveSongButton = (event) => { 
    if(songs.length !== 1) {
      return (<Button
        variant="contained"
        className={classes.button}
        onClick={event => handleRemoveSong(event)}
      >-</Button>);
    } else {
      return (<></>);
    }
  }

  return (
		<>
			<div className="table-title">Songs You Absolutely Love</div>
			<div className="table-content">
				<div className="table-body">
					{songs.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
								<TextField
									name="name"
									label="Songs"
									variant="outlined"
									placeholder={"Song " + (index + 1)}
									value={item.name}
									onChange={(event) =>
										handleSongChange(index, event)
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
							onClick={handleAddSong}
						>
							+
						</Button>
						<GetRemoveSongButton />
					</center>
				</div>
			</div>
		</>
  );
}

export default SongsForm;