"use client";

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function DashboardHome() {
	const { auth } = useContext(AuthContext);
	return (
		<>
			<h2>Welcome user {auth.name}</h2>
			<h2>You currently have x switches running</h2>
			<button className='bg-accent-color text-lg text-secondary-button p-2'>
				TEST BUTTON
			</button>
		</>
	);
}
