import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxStarFilled, RxStar } from "react-icons/rx";
import { VscHeartFilled, VscHeart } from "react-icons/vsc";

import recipeData from "../../data/feed.json";
import profileImageUrl from "../../data/fakeprofile-pic.js";
import { Text, FeedRecipeCard } from "../../components";

const RecipieDetail = ({ match }) => {
	const [recipe, setRecipe] = useState(recipeData[1]);
	const [similarRecipes, setSimilarRecipes] = useState([]);
	const [isSaved, setIsSaved] = useState(false);
	const [userRating, setUserRating] = useState(0);

	const toggleSavedStatus = () => {
		setIsSaved((prev) => !prev);
	};

	const updateRating = (num) => {
		setUserRating(num);
	};

	useEffect(() => {
		setRecipe(() => recipeData.find((recipe) => recipe.id === parseInt(match.params.id)));

		setSimilarRecipes(() => {
			return [recipeData[0], recipeData[2], recipeData[5]];
		});
	}, [recipeData]);

	return (
		<div className="py-10 px-3 lg:px-14 xl:container mx-auto grid grid-cols-12 gap-2">
			<div className="col-span-12 xl:col-span-8 container m-auto lg:ms-auto">
				<Text variant="h1">{recipe?.title}</Text>
				<Text className="italic mt-2 text-sm">{recipe.description}</Text>
				<img src={recipe.image} alt="" className="mt-4 w-[650px] max-h-[300px] object-cover border " />

				<div className="flex gap-4 items-center mt-4">
					<img src={profileImageUrl} alt="" className="w-12 h-12 rounded-full" />
					<Link to={`/main/profile/${recipe?.author}`} className=" font-semibold hover:text-orange-300 cursor-pointer">
						{recipe?.author}
					</Link>
				</div>

				<div className="mt-4">
					<Text variant="h4">Ingredients</Text>
					<ul className="pl-10 mt-3 list-disc text-sm">
						{recipe.ingredients.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
				<div className="mt-4">
					<Text variant="h4">Instructions</Text>
					<ul className="pl-10 mt-3 list-decimal text-sm">
						{recipe.instructions.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>

				<div className="mt-20">
					<Text variant="h4" className="mb-4">
						More Like This
					</Text>
					<div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
						{similarRecipes.map((item) => (
							<FeedRecipeCard recipe={item} />
						))}
					</div>
				</div>
			</div>

			<div className="col-span-12 xl:col-span-4 ">
				<div className=" sticky top-[--navbar-height] pt-10">
					<div className="border border-1 p-4 rounded ">
						<div className="flex justify-between">
							<Text variant="h6">Rate This Recipe</Text>

							{isSaved ? (
								<button onClick={toggleSavedStatus} className="p-0.5 cursor-pointer flex items-center gap-1 ms-auto">
									<Text>Saved</Text>
									<VscHeartFilled className="text-rose-900" />
								</button>
							) : (
								<button onClick={toggleSavedStatus} className="p-0.5 cursor-pointer flex items-center gap-1 ms-auto">
									<Text>Save Recipe</Text>
									<VscHeart />
								</button>
							)}
						</div>
						<hr className="my-1" />

						<div className="my-4 flex items-center">
							<span className="mr-2">Your rating:</span>
							{[...Array(5)].map((item, index) => {
								let num = index + 1;
								return userRating >= num ? (
									<RxStarFilled
										color="#ffcd3c"
										fontSize={30}
										onClick={() => {
											setUserRating(num);
										}}
									/>
								) : (
									<RxStar
										color="#ffcd3c"
										fontSize={30}
										onClick={() => {
											setUserRating(num);
										}}
									/>
								);
							})}
						</div>
						<div className="my-2 w-fit">
							<Text className="flex items-center text-sm">
								<span>{recipe.ratings_average}</span>
								<span className="mx-1 flex">
									{[...Array(recipe.ratings_average)].map((element) => (
										<RxStarFilled color="#ffcd3c" />
									))}
									{[...Array(5 - recipe.ratings_average)].map((element) => (
										<RxStar color="#ffcd3c" />
									))}
								</span>
								<span>of {recipe.number_of_ratings} ratings</span>
							</Text>
						</div>
						<hr className="my-1" />
						<div className="flex gap-1 flex-wrap mt-2">
							{recipe.categories.map((item) => (
								<div className="text-xs py-0.5 px-2.5 bg-zinc-200 w-fit rounded-full">{item}</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipieDetail;
