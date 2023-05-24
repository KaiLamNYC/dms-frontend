"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { EmailContext } from "./context/EmailContext";

export default function DashboardHome() {
	const { auth } = useContext(AuthContext);
	const { emails, setEmails } = useContext(EmailContext);
	const router = useRouter();

	useEffect(() => {
		const fetchEmails = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/api/users/get-emails",
					{
						headers: {
							"x-access-token": localStorage.getItem("token"),
						},
					}
				);
				console.log(response);
				if (response.data.auth === false) {
					// setTeams([]);
					//failed jwtverify
					router.push("/");
				} else if (response.data.payload.length > 0) {
					setEmails(response.data.payload);
					// console.log(teams);
					// console.log(emails);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchEmails();
	}, []);
	return (
		<>
			<h2>Welcome user {auth.name}</h2>
			<h2>You currently have {emails.length} switches running</h2>
			<button className='bg-accent-color text-lg text-secondary-button p-2'>
				TEST BUTTON
			</button>
		</>
	);
}
