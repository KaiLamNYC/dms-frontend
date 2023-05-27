import axios from "axios";
import React from "react";

export default async function getOneUserEmail(emailId: string) {
	const res = await axios
		.get(`http://localhost:3001/api/users/get-one-email/${emailId}`, {
			headers: {
				"x-access-token": localStorage.getItem("token"),
			},
		})
		.then((res) => console.log(res));

	// if (!res.ok) undefined;
	return res;
}
