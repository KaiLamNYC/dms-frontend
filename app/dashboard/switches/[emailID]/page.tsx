"use client";

// import getOneUserEmail from "@/app/lib/getOneUserEmail";
import axios from "axios";
// import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
// import { EmailContext } from "../../context/EmailContext";

export default async function OneEmailPage({ params }) {
	// const [oneEmail, setOneEmail] = useState();
	const emailId = params.emailId;
	// useEffect(() => {
	// 	const fetchOneEmail = async () => {
	// 		try {
	// 			const response = await axios.get(
	// 				"http://localhost:3001/api/users/get-one-email/${params.user}",
	// 				{
	// 					headers: {
	// 						"x-access-token": localStorage.getItem("token"),
	// 					},
	// 				}
	// 			);
	// 			console.log(response);
	// 			if (response.data.auth === false) {
	// 				// setTeams([]);
	// 				//failed jwtverify
	// 				router.push("/");
	// 			} else if (response.data.payload.length > 0) {
	// 				setEmails(response.data.payload);
	// 				// console.log(teams);
	// 				// console.log(emails);
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};

	// 	fetchOneEmail();
	// });
	return (
		<>
			<h1>{emailId}</h1>
		</>
	);
}
