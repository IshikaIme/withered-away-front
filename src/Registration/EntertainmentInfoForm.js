import GamesForm from "./EntertainmentFormComponents/GamesForm";
import MoviesForm from "./EntertainmentFormComponents/MoviesForm";
import SongsForm from "./EntertainmentFormComponents/SongsForm";

const EntertainmentInfoForm = (props) => {
	return (
		<>
    <GamesForm {...props}/>
    <MoviesForm {...props}/>
    <SongsForm {...props}/>
		</>
	);
};

export default EntertainmentInfoForm;