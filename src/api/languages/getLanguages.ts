import axios from 'axios';

export const getLanguages = async (languegesUrl: string) => {
	try {
		const response = await axios.get(languegesUrl);
		return Object.keys(response.data);
	} catch (error) {
		console.error(error);
	}
};
