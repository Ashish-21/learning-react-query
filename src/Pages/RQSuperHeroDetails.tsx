import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const fetchSuperhero = (heroId: any) => {
	return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

function RQSuperHeroDetails() {
	const { heroID } = useParams();
	console.log(heroID);
	const { data, isLoading, isError } = useQuery<any>(
		["superhero", heroID],
		() => fetchSuperhero(heroID)
	);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	console.log(data);
	if (isError) {
		return <p>Error</p>;
	}
	return (
		<div>
			SuperHeroDetails
			{data && data?.data ? <p>{data?.data?.name}</p> : null}
		</div>
	);
}

export default RQSuperHeroDetails;
