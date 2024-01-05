import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./Feed";
import RecipieDetail from "./RecipieDetail";

const Main = () => {
	return (
		<Switch>
			<Route path="/main/feed">
				<Feed />
			</Route>
			<Route path="/main/recipe_detail/:id" render={(props) => <RecipieDetail {...props} />} exact />
			<Route path="/main/profile/:id">
				<>Hello Chef</>
			</Route>
			<Route path="/main/settings"></Route>
		</Switch>
	);
};

export default Main;
