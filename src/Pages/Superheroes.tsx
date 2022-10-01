import axios from "axios";
import React, { useEffect, useState } from "react";

function Superheroes() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		axios.get("http://localhost:4000/superheroes").then((res) => {
			setData(res.data);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<h2>Super Heroes Page</h2>
			{data &&
				data.map((hero: any) => {
					return <div key={hero?.id}>{hero?.name}</div>;
				})}
		</>
	);
}

export default Superheroes;
