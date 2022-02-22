import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
	},
}));

const MoviesForm = (props) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([{ name: "" }]);

	const handleMovieChange = (index, event) => {
		const tempMovies = [...movies];
		tempMovies[index][event.target.name] = event.target.value;
		setMovies(tempMovies);
    props.methods.setValue("movies", tempMovies);
	};

	const handleAddMovie = (event) => {
		setMovies([...movies, { name: "" }]);
	};

	const handleRemoveMovie = (event) => {
		const tempMovies = [...movies];
		tempMovies.splice(movies.length-1, 1);
		setMovies(tempMovies);
	};

  const GetRemoveMovieButton = (event) => { 
    if(movies.length !== 1) {
      return (<Button
        variant="contained"
        className={classes.button}
        onClick={event => handleRemoveMovie(event)}
      >-</Button>);
    } else {
      return (<></>);
    }
  }

  return (
		<>
			<div className="table-title">Movies You Watch</div>
			<div className="table-content">
				<div className="table-body">
					{movies.map((item, index) => (
						<div className="table-row" key={index}>
							<div className="table-data">
								<TextField
									name="name"
									label="Movies"
									variant="outlined"
									placeholder={"Movie " + (index + 1)}
									value={item.name}
									onChange={(event) =>
										handleMovieChange(index, event)
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
							onClick={handleAddMovie}
						>
							+
						</Button>
						<GetRemoveMovieButton />
					</center>
				</div>
			</div>
		</>
  );
}

export default MoviesForm;