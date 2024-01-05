import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.svg";

import { Button, Navbar, Text } from "../components";

// flex-none  xl:border-b xl:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-slate-900/75

const Home = () => {
	return (
		<main>
			{/* <Navbar /> */}
			<section className="py-10 2xl:container mx-auto grid xl:grid-cols-2 gap-12 xl:min-h-[85vh] *:max-w-xl lg:*:max-w-2xl xl:*:max-w-full">
				<div className="m-auto px-5 xl:px-12 xl:w-9/12">
					<Text variant="h1">
						Find Recipes from <br /> around the world! <br /> Contribute your own!
					</Text>
					<p className="mt-4 mb-2 text-sm">
						Unleash culinary creativity and connect with food enthusiasts worldwide on our Recipe Sharing Platform –
						where every dish tells a story, and every kitchen becomes a global culinary haven.
					</p>
					<p className="text-sm">
						Discover, share, and savor the art of cooking, bringing people together one delicious recipe at a time.
					</p>
					<Link to="/login">
						<Button className="mt-4">Login to Start</Button>
					</Link>
				</div>
				<div className="m-auto">
					<img src={heroImg} alt="" className="w-11/12 h-11/12 my-auto" />
				</div>
			</section>
			<section className="w-full bg-gradient-to-b opacity-75 from-orange-300 to-amber-700">
				<div className="max-xl:py-10 2xl:container mx-auto grid xl:grid-cols-2 gap-12 h-screen *:max-w-xl lg:*:max-w-2xl xl:*:max-w-full"></div>
			</section>
			<footer></footer>
		</main>
	);
};

export default Home;
