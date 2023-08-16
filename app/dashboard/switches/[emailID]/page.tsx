"use client";
import deleteEmail from "@/app/lib/deleteEmail";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { EmailContext } from "../../context/EmailContext";

export default function OneEmailPage({ params }) {
	const router = useRouter();

	const [oneEmail, setOneEmail] = useState({});
	const [emailPassword, setEmailPassword] = useState("");

	//CONTEXT FOR DELETE EMAIL
	const { setEmails } = useContext(EmailContext);

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

	const handleDelete = async (e: any) => {
		e.preventDefault();
		const data = await deleteEmail(emailPassword, params.emailID);
		console.log(data);
		// console.log("delete me pls");
		// console.log(emailPassword);
		if (data.message == "error") {
			toast.error(`${data.payload}`);
		} else {
			setEmails({});
			router.push("/dashboard/switches");
		}
	};
	return (
		<div className='max-w-md'>
			<Toaster position='top-center' reverseOrder={false} />

			{/* <h2>these are params {params.emailID}</h2>
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
			</button> */}

			<div className='bg-white rounded-lg border-4 border-primary-button p-2 shadow-sm mt-6 '>
				<h3 className='text-xl font-bold mb-2'>{oneEmail.toAddress} </h3>
				<h4 className='text-gray-600 text-xl'>{oneEmail.subject}</h4>
				<h4 className='text-gray-600 text-l'>{oneEmail.intervals}</h4>

				<p className='text-gray-600 mt-4'>Password:</p>

				<input
					type='password'
					name='password'
					className='block rounded-md border-gray-300 shadow-sm px-3 py-2'
					onChange={(e) => setEmailPassword(e.target.value)}
				/>

				<button
					type='button'
					className='block  bg-accent-color text-secondary-button rounded-md px-3 py-2 mt-4 font-semibold'
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</div>
	);
}
