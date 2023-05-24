import axios from "axios";
import React from "react";

export default async function getUserTeams() {
	const res = await axios
		.get("http://localhost:3001/api/users/get-emails", {
			headers: {
				"x-access-token": localStorage.getItem("token"),
			},
		})
		.then((res) => console.log(res));

	// if (!res.ok) undefined;
	return res;
}
