import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

// export default function Home() {
// 	return (
// 		<main className='mt-4 mx-20'>
// 			<Navbar />

// 			<h3 className='text-center text-black'>
// 				Secure your future, starting today
// 			</h3>
// 			<button className='bg-primary-button text-secondary-button'>
// 				Get Started
// 			</button>
// 			<button>How does it work?</button>
// 		</main>
// 	);
// }
export default function Home() {
	return (
		<main>
			<Navbar />
			<div
				className='flex justify-center items-center h-screen'
				style={{ height: "calc(100vh - 175px)" }}
			>
				<div id='hero'>
					<h3 className='text-center text-black mt-8 text-4xl'>
						Secure your future, starting today
					</h3>

					<div className='mt-4 flex'>
						<Link href='/register'>
							<button className='mr-3 bg-primary-button text-secondary-button text-lg p-4 rounded'>
								Get Started
							</button>
						</Link>
						<Link href='/features'>
							<button className='bg-accent-color text-secondary-button text-lg p-4 rounded'>
								How does it work?
							</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
