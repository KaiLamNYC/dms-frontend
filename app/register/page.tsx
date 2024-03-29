"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

import registerUser from "../lib/registerUser";

export default function RegisterPage() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		//REGISTER FUNCTION
		// const data = await registerUser(email, name, password);
		await toast.promise(registerUser(email, name, password), {
			loading: "Registering...",
			success: <b>Account created!</b>,
			error: <b>Error creating account!</b>,
		});
		router.push("/login");

		// if (data.message == "success") {
		// 	toast.success("Successfully signed up!");
		// 	setEmail("");
		// 	setName("");
		// 	setPassword("");
		// } else {
		// 	toast.error("Error creating account!");
		// }

		//need some error handling before redirect to login
		// router.push('/login')
	};

	return (
		<>
			{/*
		  This example requires updating your template:
  
		  ```
		  <html class="h-full bg-white">
		  <body class="h-full">
		  ```
		*/}
			<Toaster position='top-center' reverseOrder={false} />

			<Navbar />
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Create an account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={handleSubmit} method='POST'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Email Address
							</label>
							<div className='mt-2'>
								<input
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									name='email'
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Name
							</label>
							<div className='mt-2'>
								<input
									id='name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									name='name'
									type='name'
									autoComplete='name'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
								{/* <div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div> */}
							</div>
							<div className='mt-2'>
								<input
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-primary-button px-3 py-1.5 text-sm font-semibold leading-6 text-secondary-button shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Register
							</button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm text-gray-500'>
						Already have an account?{" "}
						<Link
							href='/login'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Log In here
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
