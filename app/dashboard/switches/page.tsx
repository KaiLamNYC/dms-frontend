"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

import { EmailContext } from "../context/EmailContext";

export default function SwitchesPage() {
	const { emails } = useContext(EmailContext);

	return (
		<div className='max-w-fit'>
			<h2 className='text-xl font-semibold mb-4'>Current Tasks:</h2>

			{emails.map((email: any, i: number) => {
				return (
					<div key={i} className='mb-4'>
						<Link href={`/dashboard/switches/${email.id}`}>
							<p className='text-blue-500 hover:underline cursor-pointer'>
								To: {email.toAddress}
							</p>
						</Link>

						<p className='text-gray-700'>Subject: {email.subject}</p>
						{/* <button className="text-red-500 hover:underline cursor-pointer">delete</button> */}
						<br />
					</div>
				);
			})}
		</div>
	);
}
