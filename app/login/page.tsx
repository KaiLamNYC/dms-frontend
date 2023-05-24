"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userInfo } from "os";
import React, { use, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import loginUser from "../lib/loginUser";

// export default function () {
// 	return <div>LogInPage</div>;
// }

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function LogInPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { auth, setAuth } = useContext(AuthContext);

	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		//REGISTER FUNCTION
		const data = await loginUser(email, password);

		setAuth({
			email: data.email,
			name: data.name,
			accessToken: data.token,
			auth: data.auth,
		});
		console.log(auth);
		localStorage.setItem("token", `${data.token}`);
		// console.log(localStorage.getItem("token"));
		if (data.auth) {
			router.push("/dashboard");
		} else {
			router.push("/");
		}
		console.log(data);

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
			<Navbar />
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign in to your account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={handleSubmit} method='POST'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Email address
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
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
								<div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'
									>
										Forgot password?
									</a>
								</div>
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
								Sign in
							</button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm text-gray-500'>
						Not a member?{" "}
						<Link
							href='/register'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Register here
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
