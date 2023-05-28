"use client";

import createEmail from "@/app/lib/createEmail";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function CreateSwitch() {
	const router = useRouter();

	const handleCreateTask = async (e: any) => {
		e.preventDefault();
		const data = await createEmail(
			toEmail,
			toSubject,
			emailPassword,
			intervals,
			emailBody
		);
		router.push("/dashboard");
	};

	const [toEmail, setToEmail] = useState("");
	const [toSubject, setToSubject] = useState("");
	const [emailPassword, setEmailPassword] = useState("");
	const [emailBody, setEmailBody] = useState("");
	const [intervals, setIntervals] = useState("");

	return (
		<div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
					Create Your Task
				</h2>
				<p className='mt-2 text-lg leading-8 text-gray-600'>
					Write out your email and setup your switch here.
				</p>
			</div>
			<form
				action='#'
				method='POST'
				className='mx-auto mt-16 max-w-xl sm:mt-20'
				onSubmit={handleCreateTask}
			>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
					<div className='sm:col-span-2'>
						<label
							htmlFor='email'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Email
						</label>
						<div className='mt-2.5'>
							<input
								type='email'
								name='email'
								id='email'
								value={toEmail}
								onChange={(e) => setToEmail(e.target.value)}
								autoComplete='email'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label
							htmlFor='subject'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Subject
						</label>
						<div className='mt-2.5'>
							<input
								type='subject'
								name='subject'
								id='subject'
								// autoComplete='subject'
								value={toSubject}
								onChange={(e) => setToSubject(e.target.value)}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label
							htmlFor='password'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Password
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='password'
								id='password'
								value={emailPassword}
								onChange={(e) => setEmailPassword(e.target.value)}
								// autoComplete='organization'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label
							htmlFor='intervals'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Intervals
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='intervals'
								id='intervals'
								value={intervals}
								onChange={(e) => setIntervals(e.target.value)}
								// autoComplete='email'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='message'
							className='block text-sm font-semibold leading-6 text-gray-900'
						>
							Message
						</label>
						<div className='mt-2.5'>
							<textarea
								name='message'
								id='message'
								value={emailBody}
								onChange={(e) => setEmailBody(e.target.value)}
								rows={4}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				<div className='mt-10 mb-20'>
					<button
						type='submit'
						// className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						className='block w-full rounded-md bg-a px-3.5 py-2.5 text-center text-sm font-semibold text-red-400 shadow-sm'
					>
						Create Switch!
					</button>
				</div>
			</form>
		</div>
	);
}
