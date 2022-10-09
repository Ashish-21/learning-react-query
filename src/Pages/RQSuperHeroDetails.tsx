import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const fetchSuperhero = (heroId: any) => {
	return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
const QUERY_KEY = "superheroes";

function RQSuperHeroDetails() {
	const { heroID } = useParams();
	const queryClient = useQueryClient();
	const { data, isLoading, isError } = useQuery<any>(
		["superhero", heroID],
		() => fetchSuperhero(heroID),
		{
			initialData: () => {
				const queryData: any = queryClient.getQueryData([QUERY_KEY]);
				console.log(queryData?.data);
				const hero =
					queryData && queryData?.data
						? queryData.data?.find(
								(hero: any) => hero?.id == heroID
						  )
						: undefined;
				if (hero) {
					console.log("hasd");
					return {
						data: hero,
					};
				} else {
					return undefined;
				}
			},
		}
	);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (isError) {
		return <p>Error</p>;
	}
	return (
		<div>
			SuperHeroDetails
			{data && data?.data ? <p>{data?.data?.name}</p> : null}
			{data && data?.data ? <p>{data?.data?.alterEgo}</p> : null}
		</div>
	);
}

export default RQSuperHeroDetails;
