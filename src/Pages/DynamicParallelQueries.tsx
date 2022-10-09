import React from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const fetchSuperhero = (heroId: any) => {
	return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

function DynamicParallelQueries(props: any) {
	const { heroIds } = props;

	const results = useQueries({
		queries: heroIds.map((e: number) => {
			return {
				queryKey: ["super-hero", e],
				queryFn: () => fetchSuperhero(e),
			};
		}),
	});
	console.log(results);

	return <div>DynamicParallelQueries</div>;
}

export default DynamicParallelQueries;
