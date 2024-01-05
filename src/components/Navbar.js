import React, { useRef } from "react";
import { NavLink as Link } from "react-router-dom";

import { Button } from "./";

// temporary fix for authentication
const isAuthorized = true;

const Navbar = () => {
	const navRef = useRef();

	return (
		<header className="grid sticky top-0 lg:h-[--navbar-height] p-3 lg:py-0 xl:px-7 z-40 w-full backdrop-blur-lg border-b border-slate-900/10 bg-white/80 font-semibold items-center">
			<div className="flex justify-between mx-auto container flex-wrap">
				<Link to="/">
					<div className="flex gap-3 items-center ">
						<div className="w-8 h-8 rounded-full bg-gradient-to-t opacity-75 from-orange-300 via-red-900 to-amber-700"></div>
						<p className="italic">
							<span className="text-orange-300">Recipe</span>
							<span className="text-amber-700">Share</span>
						</p>
					</div>
				</Link>
				<div
					className="lg:hidden"
					onClick={() => {
						navRef.current.classList.toggle("hidden");
					}}>
					Menu
				</div>
				<nav
					ref={navRef}
					// having both "flex" and "lg:flex" classes is intentional
					className="hover:*:text-orange-300 gap-5 w-full lg:w-auto pt-4 mt-4 border-t lg:pt-0 lg:mt-0 lg:border-t-0 hidden lg:flex flex flex-col lg:flex-row lg:items-center">
					{isAuthorized ? (
						<>
							<Link to="/main/feed" activeClassName="text-orange-300">
								Feed
							</Link>
							<Link to="/main/profile/:id" activeClassName="text-orange-300">
								My recipes
							</Link>
							<Link to="/main/profile/:id" activeClassName="text-orange-300">
								Profile
							</Link>
							<Link to="/main/settings" activeClassName="text-orange-300">
								Settings
							</Link>
						</>
					) : (
						<>
							<a href="https://github.com/ShaniaKC" target="_blank">
								Developer
							</a>
							<a href="https://github.com/ShaniaKC" target="_blank">
								Source Code
							</a>
							<Link to="/login" activeClassName="text-orange-300">
								<Button>Login</Button>
							</Link>
						</>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
