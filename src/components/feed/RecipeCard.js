import React, { useState } from "react";
import { RxStarFilled } from "react-icons/rx";
import { VscHeartFilled, VscHeart } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Text } from "../../components";

const RecipeCard = ({ recipe }) => {
	const [isSaved, setIsSaved] = useState(false);

	const toggleSavedStatus = () => {
		setIsSaved((prev) => !prev);
	};

	return (
		<>
			<div key={recipe.id} className="py-3 px-5 border rounded grid gap-3 items-start hover:bg-zinc-100/30 ">
				<a href={`/main/recipe_detail/${recipe.id}`}>
					<Text variant="h5" className="sm:h-7 text-ellipsis overflow-hidden hover:text-orange-300 cursor-pointer">
						{recipe.title}
					</Text>
				</a>
				<div className="h-auto w-full overflow-hidden">
					<img
						src={recipe.image}
						alt=""
						className="w-full  h-32 border-box overflow-hidden object-cover hover:scale-110"
					/>
				</div>
				<div className="h-12 text-ellipsis overflow-hidden">
					<Text>{recipe.description}</Text>
				</div>
				<Link
					to={`/main/profile/${recipe.author}`}
					className="text-xs font-semibold text-zinc-700 hover:text-orange-300 cursor-pointer">
					{recipe.author}
				</Link>
				<div className="flex flex-wrap items-center gap-5">
					<p className="text-gray-500 text-xs md:max-w-[50%]">
						{recipe.created_at} &#183; {recipe.categories.join(", ").toLocaleLowerCase()}
					</p>

					<div className="flex gap-2 ms-auto items-center text-zinc-800">
						<div className="flex items-center">
							<span className="text-sm">{recipe.ratings_average}</span>
							<RxStarFilled color="#ffcd3c" />
							<span className="text-xs">({recipe.number_of_ratings})</span>
						</div>
						&#183;
						<div>
							{isSaved ? (
								<button onClick={toggleSavedStatus} className="p-0.5 cursor-pointer">
									<VscHeartFilled className="text-rose-900" />
								</button>
							) : (
								<button onClick={toggleSavedStatus} className="p-0.5 cursor-pointer">
									<VscHeart />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecipeCard;
