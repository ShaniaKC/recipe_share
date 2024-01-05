import { Switch, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config";
import { Navbar, ProtectedRoute } from "./components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/protected/index";

import "./styles/root.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// temporary fix for authentication
const isAuthorized = true;

function App() {
	return (
		<main className="antialiased">
			<Navbar />
			<Switch>
				<ProtectedRoute condition={isAuthorized} component={Main} path="/main" />
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</main>
	);
}

export default App;
