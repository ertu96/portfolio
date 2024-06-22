import axios from 'axios';

export const getLanguages = async (languagesUrl: string) => {
	try {
		const response = await axios.get(languagesUrl);
		return Object.keys(response.data);
	} catch (error) {
		console.error(error);
	}
};
