"use client";

import React, { useContext } from "react";
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
						<p>To: {email.toAddress}</p>
						<p>Subject: {email.subject}</p>
						<br />
					</div>
				);
			})}
		</div>
	);
}
