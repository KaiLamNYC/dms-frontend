"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function OneEmailPage({ params }) {
	// const router = useRouter();

	const [oneEmail, setOneEmail] = useState({});
	const [emailPassword, setEmailPassword] = useState("");
	useEffect(() => {
		const fetchEmails = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3001/api/users/get-one-email/${params.emailID}`,
					{
						headers: {
							"x-access-token": localStorage.getItem("token"),
						},
					}
				);
				console.log(response);
				setOneEmail(response.data.payload);
			} catch (error) {
				console.log(error);
			}
		};

		fetchEmails();
	}, [params.emailID]);

	const handleDelete = (e: any) => {
		e.preventDefault();
		console.log("delete me pls");
		console.log(emailPassword);
	};
	return (
		<div>
			<h2>these are params {params.emailID}</h2>
			<h2>To: {oneEmail.toAddress}</h2>
			<h2>Subject: {oneEmail.subject}</h2>
			<p>Password:</p>
			<input
				type='text'
				value={emailPassword}
				onChange={(e: any) => setEmailPassword(e.target.value)}
			/>
			<br />
			<button
				className='bg-accent-color text-lg text-secondary-button p-2 mt-2'
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	);
}
