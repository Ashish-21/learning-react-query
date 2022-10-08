import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function RQSuperheroes() {
	const QUERY_KEY = "superheroes";
	const { isLoading, data, isError, error } = useQuery<any>(
		[QUERY_KEY],
		() => {
			return axios.get("http://localhost:4000/superheroes");
		}
	);
	console.log(data);
	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError && error instanceof Error) {
		return <p>{error.message}</p>;
	}
	return (
		<div>
			<h2>Super Heroes Page - React Query</h2>
			<div>
				{data && data?.data
					? data!.data?.map((e: any) => <p>{e?.name}</p>)
					: null}
			</div>
		</div>
	);
}

export default RQSuperheroes;
