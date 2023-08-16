import React from "react";
import Navbar from "../components/Navbar";
export default function FeaturesPage() {
	return (
		<>
			<Navbar />
			<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
				How to create your own Dead Mans Switch
			</h2>
			<div className='flex justify-center my-5'>
				<ul>
					<li className='text-xl m-1'>1. Select your recipient</li>
					<li className='text-xl m-1'>2. Set your password</li>
					<li className='text-xl m-1'>3. Write your message</li>
					<li className='text-xl m-1'>4. Pick your check-in dates</li>
					<li className='text-xl m-1'>5. Start the switch!</li>
				</ul>
			</div>
		</>
	);
}
