"use client";
import getUserInfo from "@/app/lib/getUserInfo";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
//FUNCTION TO GET THE USERS DATA
import updateUserInfo from "@/app/lib/updateUserInfo";
//CONTACTS THE

export default function AccountPage() {
	const router = useRouter();

	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/api/users/get-user",
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
				} else {
					setCurrentUser(response.data.payload);
					// console.log(teams);
					// console.log(emails);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchUser();
	}, []);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		let name = firstName + " " + lastName;
		let data = await updateUserInfo(email, name);
		router.push("/dashboard");
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='space-y-12'>
					<div className='border-b border-gray-900/10 pb-12'>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Personal Information
						</h2>
						{/* <p className='mt-1 text-sm leading-6 text-gray-600'>
							Use a permanent address where you can receive mail.
						</p> */}

						<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
							<div className='sm:col-span-3'>
								<label
									htmlFor='first-name'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									First name
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='first-name'
										id='first-name'
										// autoComplete='given-name'
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										placeholder={currentUser.firstName}
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:col-span-3'>
								<label
									htmlFor='last-name'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Last name
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='last-name'
										id='last-name'
										// autoComplete='family-name'
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										placeholder={currentUser.lastName}
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:col-span-4'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Email Address
								</label>
								<div className='mt-2'>
									<input
										id='email'
										name='email'
										type='email'
										// autoComplete='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder={currentUser.email}
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							{/* <div className='sm:col-span-2 sm:col-start-1'>
								<label
									htmlFor='city'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
								<div className='mt-2'>
									<input
										type='password'
										name='password'
										id='password'
										// autoComplete='address-level2'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div> */}

							{/* <div className='sm:col-span-2'>
								<label
									htmlFor='region'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									New Password
								</label>
								<div className='mt-2'>
									<input
										type='password'
										name='newPass'
										id='newPass'
										// autoComplete='address-level1'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='postal-code'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Confirm New Password
								</label>
								<div className='mt-2'>
									<input
										type='password'
										name='confirmPass'
										id='confirmPass'
										autoComplete='postal-code'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div> */}
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<Link href='/dashboard/account/confirmDelete'>
						<button
							type='button'
							className='rounded-md bg-red px-3 py-2 text-sm  text-secondary-button font-semibold'
							// onClick={handleDelete}
						>
							Delete Account
						</button>
					</Link>
					<Link href='/dashboard/account/changePassword'>
						<button
							type='button'
							className='rounded-md bg-accent-color px-3 py-2 text-sm  text-secondary-button font-semibold'
							// onClick={handleChangePassword}
						>
							Change Password
						</button>
					</Link>

					<button
						type='submit'
						className='rounded-md bg-accent-color px-3 py-2 text-sm text-secondary-button font-semibold'
					>
						Update Info
					</button>
				</div>
			</form>
		</>
	);
}
