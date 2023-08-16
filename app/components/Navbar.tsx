import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className='mt-4 mx-20'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-bold'>
					<Link href='/'>DMS</Link>
				</h1>
				<ul className='flex space-x-4'>
					<li>
						<Link href='/features' className='text-text-black '>
							Features
						</Link>
					</li>
					<li>
						<Link href='/about' className='text-text-black '>
							About
						</Link>
					</li>
				</ul>
				<Link href='/login'>
					<button className='bg-primary-button text-secondary-button p-3 rounded'>
						Log In
					</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
