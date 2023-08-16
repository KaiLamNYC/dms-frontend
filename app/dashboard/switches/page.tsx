"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import { EmailContext } from "../context/EmailContext";

export default function SwitchesPage() {
	const { setEmails, emails } = useContext(EmailContext);
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
					console.log(response.data.payload);

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
		<div className='max-w-fit'>
			<h2 className='text-2xl font-semibold mb-4'>Current Tasks:</h2>

			{emails.length > 0 ? (
				emails.map((email: any, i: number) => {
					return (
						<div
							key={i}
							className='bg-white rounded-lg border-4 border-primary-button p-2 shadow-sm mt-6'
						>
							<Link
								className='block rounded-xl bg-white p-4 sm:p-6 lg:p-8'
								href={`/dashboard/switches/${email.id}`}
							>
								<h3 className='text-xl font-bold mb-2'>
									To: {email.toAddress}
								</h3>
								<p className='text-gray-600'>Subject: {email.subject}</p>
							</Link>
						</div>
					);
				})
			) : (
				<div>SORRY NO TASKS</div>
			)}
		</div>
	);
}
