"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { useRouter } from "next/navigation";

import axios from "axios";
import { EmailContext, EmailProvider } from "./context/EmailContext";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	// imageUrl:
	// 	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "/dashboard", current: true },
	{ name: "Tasks", href: "/dashboard/switches", current: false },
	{ name: "Create", href: "/dashboard/createSwitch", current: false },
	// { name: "Calendar", href: "#", current: false },
	// { name: "Reports", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "/dashboard/account" },
	// { name: "Settings", href: "/login" },
	{ name: "Sign Out", href: "#" },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const { auth, setAuth } = useContext(AuthContext);
	const router = useRouter();

	// const { emails, setEmails } = useContext(EmailContext);

	const handleSignOut = (e: any) => {
		e.preventDefault();
		localStorage.removeItem("token");
		setAuth({});
		router.push("/");
	};

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className='min-h-full'>
				<Disclosure as='nav' className='bg-primary-button'>
					{({ open }) => (
						<>
							<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
								<div className='flex h-16 items-center justify-between'>
									<div className='flex items-center'>
										<div className='flex-shrink-0'>
											<h1 className='text-3xl font-bold'>DMS</h1>
											{/* <img
												className='h-8 w-8'
												src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
												alt='Your Company'
											/> */}
										</div>
										<div className='hidden md:block'>
											<div className='ml-10 flex items-baseline space-x-4'>
												{navigation.map((item) => (
													<Link
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? "bg-gray-900 text-white"
																: "text-gray-300 hover:bg-gray-700 hover:text-white",
															"rounded-md px-3 py-2 text-sm font-medium"
														)}
														aria-current={item.current ? "page" : undefined}
													>
														{item.name}
													</Link>
												))}
											</div>
										</div>
									</div>
									<div className='hidden md:block'>
										<div className='ml-4 flex items-center md:ml-6'>
											<button
												type='button'
												className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
											>
												<span className='sr-only'>View notifications</span>
												<BellIcon className='h-6 w-6' aria-hidden='true' />
											</button>

											{/* Profile dropdown */}
											<Menu as='div' className='relative ml-3'>
												<div>
													<Menu.Button className='flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
														<span className='sr-only'>Open user menu</span>
														{/* <img
															className='h-8 w-8 rounded-full'
															src={user.imageUrl}
															alt=''
														/> */}
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															strokeWidth={1.5}
															stroke='currentColor'
															className='w-6 h-6h-8 w-8 rounded-full'
														>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
															/>
														</svg>
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													enter='transition ease-out duration-100'
													enterFrom='transform opacity-0 scale-95'
													enterTo='transform opacity-100 scale-100'
													leave='transition ease-in duration-75'
													leaveFrom='transform opacity-100 scale-100'
													leaveTo='transform opacity-0 scale-95'
												>
													<Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md ring-1 ring-black ring-opacity-5 bg-white py-1 shadow-lg  focus:outline-none'>
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<>
																		{item.name !== "Sign Out" ? (
																			<Link
																				href={item.href}
																				className={classNames(
																					active ? "bg-gray-100" : "",
																					"block px-4 py-2 text-sm text-gray-700"
																				)}
																			>
																				{item.name}
																			</Link>
																		) : (
																			<button
																				onClick={handleSignOut}
																				className={classNames(
																					active ? "bg-gray-100" : "",
																					"block px-4 py-2 text-sm text-gray-700"
																				)}
																			>
																				{item.name}
																			</button>
																		)}
																	</>
																)}
															</Menu.Item>
														))}
													</Menu.Items>

													{/* <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md ring-1 ring-black ring-opacity-5 bg-white py-1 shadow-lg  focus:outline-none'>
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<Link
																		href={item.href}
																		className={classNames(
																			active ? "bg-gray-100" : "",
																			"block px-4 py-2 text-sm text-gray-700"
																		)}
																	>
																		{item.name}
																	</Link>
																)}
															</Menu.Item>
														))}
													</Menu.Items> */}
												</Transition>
											</Menu>
										</div>
									</div>
									<div className='-mr-2 flex md:hidden'>
										{/* Mobile menu button */}
										<Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
											<span className='sr-only'>Open main menu</span>
											{open ? (
												<XMarkIcon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											) : (
												<Bars3Icon
													className='block h-6 w-6'
													aria-hidden='true'
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className='md:hidden'>
								<div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as='a'
											href={item.href}
											className={classNames(
												item.current
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white",
												"block rounded-md px-3 py-2 text-base font-medium"
											)}
											aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className='border-t border-gray-700 pb-3 pt-4'>
									<div className='flex items-center px-5'>
										<div className='flex-shrink-0'>
											{/* <img
												className='h-10 w-10 rounded-full'
												src={user.imageUrl}
												alt=''
											/> */}
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-6 h-6h-8 w-8 rounded-full'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
												/>
											</svg>
										</div>
										<div className='ml-3'>
											<div className='text-base font-medium leading-none text-white'>
												{auth.name}
											</div>
											<div className='text-sm font-medium leading-none text-gray-400'>
												{auth.email}
											</div>
										</div>
										<button
											type='button'
											className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
										>
											<span className='sr-only'>View notifications</span>
											<BellIcon className='h-6 w-6' aria-hidden='true' />
										</button>
									</div>
									<div className='mt-3 space-y-1 px-2'>
										{userNavigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as='a'
												href={item.href}
												className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				{/* <header className='bg-white shadow'>
					<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
							Dashboard
						</h1>
					</div>
				</header> */}
				<main>
					<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
						{/* Your content */}

						<EmailProvider>{children}</EmailProvider>
					</div>
				</main>
			</div>
		</>
	);
}
