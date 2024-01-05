import React, { useState } from "react";

import { TfiAngleDown } from "react-icons/tfi";
import { Button } from "../../components";

const Sidebar = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<aside
			className={`col-span-2 h-full border-l text-[13px] bg-white drop-shadow xl:drop-shadow-none fixed top-0 w-[--sidebar-width] max-w-[100%] xl:w-auto xl:static
			 ${isVisible ? "left-0" : "left-[--sidebar-width-negative]"}`}>
			<div className="sticky top-[--navbar-height] flex-col flex sidebar">
				{/* Sidebar Detail elements contain additional styling in css files */}
				<details open>
					<summary>
						FILTER <TfiAngleDown />
					</summary>
					<div className="grid gap-2">
						<input
							type="search"
							placeholder="Enter search term"
							className="w-full border border-gray-400 rounded-lg px-5 py-1.5 focus:ring ring-amber-100/50 focus:outline-none"
						/>
						<Button className="py-1">Search</Button>
						<p className="text-gray-500 text-[10px]">Search by categories, ingredients, or difficulty levels</p>
					</div>
				</details>
			</div>

			<div
				className="absolute backdrop-blur-lg bg-orange-600/75 p-2.5 w-fit top-40 left-[95%] rotate-90 xl:hidden"
				onClick={toggleVisibility}>
				{isVisible ? "CLOSE" : "FILTER"}
			</div>
		</aside>
	);
};

export default Sidebar;
