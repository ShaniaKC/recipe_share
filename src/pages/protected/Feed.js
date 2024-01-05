import React from "react";

import { FaPlus } from "react-icons/fa";

import { FeedSidebar, Text, Button, FeedRecipeCard } from "../../components";

import feedData from "../../data/feed.json";

const Feed = () => {
	return (
		<div className="grid grid-cols-12 min-h-screen ">
			<div className="col-span-12 xl:col-span-10 container m-auto lg:ms-auto">
				<div className="mx-10 mt-6 mb-0 flex flex-wrap gap-5 justify-between">
					<Text variant="h2">Recently Added</Text>
					<Button className="py-1 px-3 text-sm " variant="secondary">
						<span className="hidden lg:inline"> Add New Recipe</span>
						<FaPlus className="text-amber-900" />
					</Button>
				</div>
				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 m-3 lg:m-10">
					{feedData.map((recipe) => (
						<FeedRecipeCard recipe={recipe} />
					))}
				</div>
			</div>
			<FeedSidebar />
		</div>
	);
};

export default Feed;
