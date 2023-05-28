import Link from "next/link";
import React from "react";

export default function ChangePasswordPage() {
	return (
		<>
			<form>
				<div className='space-y-12'>
					<div className='border-b border-gray-900/10 pb-12'>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Personal Information
						</h2>
						<p className='mt-1 text-sm leading-6 text-gray-600'>
							Update your password below:
						</p>

						<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
							<div className='sm:col-span-2 sm:col-start-1'>
								<label
									htmlFor='city'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Old Password
								</label>
								<div className='mt-2'>
									<input
										type='password'
										name='oldPass'
										id='oldPass'
										// autoComplete='address-level2'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
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
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<Link href='/dashboard/account'>
						<button
							type='button'
							className='rounded-md bg-red px-3 py-2 text-sm  text-secondary-button font-semibold'
						>
							Cancel
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
