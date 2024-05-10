import axios from "axios";

class celebsRequests {
	async getAllCelebs() {
		const { data } = await axios.get(
			`https://kinopoiskapiunofficial.tech/api/v1/persons`,
			{
				headers: {
					"X-API-KEY": "0e3a3cff-f024-41b6-9860-a89006e524ff",
					"Content-Type": "application/json",
				},
			},
		);
		console.log(data);

		return data;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new celebsRequests();
