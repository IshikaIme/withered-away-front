import axios from "axios";
import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";

const checkPeople = () => {
	axios
		.get("http://localhost:8080" + "/auth/check-people", AuthHeader())
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log(e);
		});
};

const PeopleProtectedRoute = ({
	// isAuth: isAuth,
	element: Component,
	...rest
}) => {
	let isAuth = false;
	useEffect(() => {
		checkPeople();
	}, []);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuth) {
					return <Component />;
				} else {
					return (
						<Navigate
							to={{
								pathname: "/LoginPage",
								// state: { from: props.location },
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default PeopleProtectedRoute;
