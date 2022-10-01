import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Superheroes from "./Pages/Superheroes";
import RQSuperheroes from "./Pages/RQSuperheroes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const reactQueryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={reactQueryClient}>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/superheroes">
								Traditional Super Heroes
							</Link>
						</li>
						<li>
							<Link to="/rq-superheroes">RQ Super Heroes</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/superheroes" element={<Superheroes />} />
					<Route path="/rq-superheroes" element={<RQSuperheroes />} />
				</Routes>
			</div>
		</QueryClientProvider>
	);
}

export default App;
