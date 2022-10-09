import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Superheroes from "./Pages/Superheroes";
import RQSuperheroes from "./Pages/RQSuperheroes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RQSuperHeroDetails from "./Pages/RQSuperHeroDetails";
import DynamicParallelQueries from "./Pages/DynamicParallelQueries";

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
					<Route
						path="/rq-superhero/:heroID"
						element={<RQSuperHeroDetails />}
					/>
					<Route
						path="/rq-superhereos-d"
						element={<DynamicParallelQueries heroIds={[1, 2]} />}
					/>
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;
