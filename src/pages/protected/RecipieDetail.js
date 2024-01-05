import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipeData from "../../data/feed.json";
import profileImageUrl from "../../data/fakeprofile-pic.js";
import { Text, FeedRecipeCard } from "../../components";

const RecipieDetail = ({ match }) => {
	const [recipe, setRecipe] = useState(recipeData[1]);
	const [similarRecipes, setSimilarRecipes] = useState([]);

	useEffect(() => {
		setRecipe(() => recipeData.find((recipe) => recipe.id === parseInt(match.params.id)));

		setSimilarRecipes(() => {
			return [recipeData[0], recipeData[2], recipeData[5]];
		});
	}, [recipeData]);

	return (
		<div className="py-10 px-2 xl:container mx-auto grid grid-cols-12 ">
			<div className="col-span-12 xl:col-span-8 container m-auto lg:ms-auto">
				<Text variant="h1">{recipe?.title}</Text>
				<Text className="italic mt-2 text-sm">{recipe.description}</Text>
				<img src={recipe.image} alt="" className="mt-4 w-[650px] max-h-[300px] object-fill" />

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
					<div className="border border-1 p-4 rounded "></div>
				</div>
			</div>
		</div>
	);
};

export default RecipieDetail;
