import axios from "axios";
import React from "react";

export default async function getUserInfo() {
	const res = await axios
		.get("http://localhost:3001/api/users/get-user", {
			headers: {
				"x-access-token": localStorage.getItem("token"),
			},
		})
		.then((res) => console.log(res));

	// if (!res.ok) undefined;
	return res;
}
