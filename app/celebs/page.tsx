"use client";

import { useCelebs } from "@/store/celebs";
import { useEffect } from "react";
import celebsRequests from "@/services/celebsRequests";
import { ICelebs } from "@/types/celebs";

const Celebs = () => {
	const { setCelebs, celebs } = useCelebs();

	useEffect(() => {
		const getCelebs = async () => {
			const data: ICelebs = await celebsRequests.getAllCelebs();
			setCelebs(data.items);
		};
		getCelebs();
	}, []);

	return (
		<div>
			<ul>
				{celebs &&
					celebs.map((item) => (
						<li key={item.kinopoiskId}>{item.nameRu}</li>
					))}
			</ul>
		</div>
	);
};

export default Celebs;
