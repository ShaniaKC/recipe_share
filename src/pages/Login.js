import React from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Text } from "../components";

// flex-none  xl:border-b xl:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-slate-900/75

const Login = () => {
	return (
		<main>
			{/* <Navbar /> */}
			<section className="xl:h-[90vh] h-screen w-full bg-orange-300 p-2 flex justify-center item-center">
				{/* <section className="xl:h-[90vh] h-screen w-full bg-gradient-to-b opacity-75 from-orange-300 to-amber-700 p-2"> */}
				<div className="p-6 bg-white border-amber-800 rounded-lg h-fit w-4/5 md:w-[514px] box-border flex items-center flex-col gap-4 mt-14">
					<Text variant="h2" className="text-center">
						Login
					</Text>
					<div className="w-full flex flex-col gap-2">
						<label className="font-bold uppercase">Email</label>
						<input
							type="text"
							className="w-full border border-gray-200 rounded-lg px-5 py-2 focus:border-amber-700 focus:outline-none"
						/>
					</div>
					<div className="w-full flex flex-col gap-2">
						<label className="font-bold uppercase">Password</label>
						<input
							type="text"
							className="w-full border border-gray-200 rounded-lg px-5 py-2 focus:border-amber-700 focus:outline-none"
						/>
					</div>
					<Button className="w-full">Login with Email</Button>
					<Text variant="h5">OR</Text>
				</div>
			</section>
		</main>
	);
};

export default Login;
