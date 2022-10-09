import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function RQSuperheroes() {
	const QUERY_KEY = "superheroes";

	const onSuccess = (data: any) => {
		console.log(data);
	};

	const onError = (error: any) => {
		console.log(error);
	};
	// Default cache time of react query is 5 minutes
	const { isLoading, data, isError, error, refetch, isFetching } =
		useQuery<any>(
			[QUERY_KEY],
			() => {
				return axios.get("http://localhost:4000/superheroes");
			},
			{
				enabled: false,
				onSuccess,
				onError,
			}
			// {
			// 	cacheTime: 6000,
			// 	staleTime: 3000,
			// 	refetchOnMount: true,
			// 	refetchInterval: 2000,
			// 	refetchOnWindowFocus: true,
			// 	refetchIntervalInBackground: true,
			// }
		);

	// Cache Time : 6 seconds tak data cache me se uthaega but netwrok refetch hosakta h under certain conditions which will again update the cache
	// Stale Time : 3 seconds tak koi bhi network refetch request nahi hoga after first fresh request , data fresh state me hi rahega, after 3 seconds stale hoajega means purana rahega and network refetch request ho sakta h
	// refetchOnMount : whenever we mount the component the query will execute if set to true and data is stale
	// refetchOnWindowFocus : whenever app window will loose focus and again gain it , background refetch will occure to keep data in sync with BE
	// refetchInterval: har 2sec me api call hoga but window is not focussed then refetch nahi hoga uske liye refetchInBackground ko true karo

	if (isFetching) {
		return <p>Loading...</p>;
	}

	if (isError && error instanceof Error) {
		return <p>{error.message}</p>;
	}
	return (
		<div>
			<h2>Super Heroes Page - React Query</h2>
			<button onClick={() => refetch()}>Fetch</button>
			<div>
				{data && data?.data
					? data!.data?.map((e: any) => (
							<div key={e.id}>
								<Link to={`/rq-superhero/${e.id}`}>
									{e?.name}
								</Link>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
}

export default RQSuperheroes;
