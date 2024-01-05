import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, condition, redirect = "/login", ...restOfProps }) => {
	return (
		<Route
			{...restOfProps}
			render={(props) =>
				condition ? (
					<Suspense fallback={""}>
						<Component {...props} />
					</Suspense>
				) : (
					<Redirect to={redirect} />
				)
			}
		/>
	);
};

export default ProtectedRoute;
