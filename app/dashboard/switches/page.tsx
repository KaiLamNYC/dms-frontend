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
			<h2 className='text-2xl font-semibold mb-4'>Current Tasks:</h2>

			{emails.length > 0 ? (
				emails.map((email: any, i: number) => {
					return (
						// <div className='rounded-xl p-1 border-text-black' key={i}>
						// <Link
						// 	className='block rounded-xl bg-white p-4 sm:p-6 lg:p-8'
						// 	href={`/dashboard/switches/${email.id}`}
						// >
						// 		<div className='mt-16'>
						// 			<h3 className='text-lg font-bold text-gray-900 sm:text-xl'>
						// 				To: {email.toAddress}
						// 			</h3>

						// 			<p className='mt-2 text-sm text-gray-500'>
						// 				Subject: {email.subject}
						// 			</p>
						// 		</div>
						// 	</Link>
						// </div>

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

			{/* {emails.map((email: any, i: number) => {
				return (
					// <div className='rounded-xl p-1 border-text-black' key={i}>
					// <Link
					// 	className='block rounded-xl bg-white p-4 sm:p-6 lg:p-8'
					// 	href={`/dashboard/switches/${email.id}`}
					// >
					// 		<div className='mt-16'>
					// 			<h3 className='text-lg font-bold text-gray-900 sm:text-xl'>
					// 				To: {email.toAddress}
					// 			</h3>

					// 			<p className='mt-2 text-sm text-gray-500'>
					// 				Subject: {email.subject}
					// 			</p>
					// 		</div>
					// 	</Link>
					// </div>

					<div
						key={i}
						className='bg-white rounded-lg border-4 border-primary-button p-2 shadow-sm mt-6'
					>
						<Link
							className='block rounded-xl bg-white p-4 sm:p-6 lg:p-8'
							href={`/dashboard/switches/${email.id}`}
						>
							<h3 className='text-xl font-bold mb-2'>To: {email.toAddress}</h3>
							<p className='text-gray-600'>Subject: {email.subject}</p>
						</Link>
					</div>
				);
			})} */}
		</div>
	);
}
