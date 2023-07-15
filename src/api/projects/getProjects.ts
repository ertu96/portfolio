import axios from 'axios';

export const getProjects = async () => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos`
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
