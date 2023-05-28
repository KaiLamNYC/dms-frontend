"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ConfirmDeletePage() {
	const router = useRouter();
	const handleCancel = (e: any) => {
		e.preventDefault();
		router.push("/dashboard/account");
	};

	const handleDeleteUser = (e: any) => {
		e.preventDefault();
	};

	return (
		<div className='flex flex-col items-center justify-center mt-12'>
			<h2 className='text-xl font-bold text-gray-900 mb-4'>
				ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?
			</h2>
			<div className='flex gap-4'>
				<button
					onClick={handleCancel}
					className='rounded-md bg-red text-sm px-3 py-2 text-secondary-button'
				>
					NO
				</button>
				<button className='rounded-md bg-accent-color px-3 py-2 text-sm font-semibold text-secondary-button'>
					YES
				</button>
			</div>
		</div>
	);
}
