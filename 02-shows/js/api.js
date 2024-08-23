const API_URL = "https://api.tvmaze.com";

export const searchShows = async (query) => {
	const res = await axios.get(`${API_URL}/search/shows?q=${query}`);
	const data = res.data;
	return data;
};
