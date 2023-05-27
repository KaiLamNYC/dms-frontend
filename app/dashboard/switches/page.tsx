"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { EmailContext } from "../context/EmailContext";

export default function SwitchesPage() {
	const { emails } = useContext(EmailContext);

	return (
		<div>
			<h2>THESE ARE YOUR EMAILS</h2>
			<br />
			{emails.map((email: any, i: number) => {
				return (
					<div key={i}>
						<Link href={`/dashboard/switches/${email.id}`}>
							<p>To: {email.toAddress}</p>
						</Link>

						<p>Subject: {email.subject}</p>
						{/* <button>delete</button> */}
						<br />
					</div>
				);
			})}
		</div>
	);
}
